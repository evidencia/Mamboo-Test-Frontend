import { useEffect, useState } from 'react';

import { 
  getCurrentPositionFromBrowser,
  getCurrentPositionFromOpenApi,
  getWeatherData
} from './../../services/api';

import { Favorites } from '../../components/Favorites';
import { Alerts } from '../../components/Alerts';
import { Weather } from '../../components/Weather';

import { Container } from './styles';
import { AlertModal } from '../../components/AlertModal';

export function Home() {

  const[search, setSearch] = useState('');
  const[searchInput, setSearchInput] = useState('');
  const[currentPosition, setCurrentPosition] = useState({});
  const[weatherData, setWeatherData] = useState({});
  const[favorites, setFavorites] = useState((JSON.parse(localStorage.getItem('favorites'))) || []);
  const[isLoading, setIsLoading] = useState(true);
  const[alertModalData, setAlertModalData] = useState({});
  const[isModalAlertModalOpen, setIsModalAlertModalOpen] = useState(false)

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      setSearch(searchInput);
    }
  }
  
  function searchLocation(e) {
    setSearch(searchInput);
  }

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  
  function addFavorite(search) {
    if(search.length > 0) 
      setFavorites(prev => ([...prev, search]));
  }
  
  function openFavorite(e, item) {
    e.preventDefault();
    setSearch(item);
  }
  
  function showAlertModal(e, item) {
    e.preventDefault();
    setAlertModalData({...item});
  }
  
  function handleCloseModal() {
    setIsModalAlertModalOpen(false);
  }
  
  function removeFavorite(item) {
    setFavorites(prev => prev.filter(i => i !== item));
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify([...(new Set(favorites))]));
  }, [favorites])

  useEffect(() => {
    (async () => {
      try {
        setCurrentPosition(((search.length > 0) ? await getCurrentPositionFromOpenApi(search) : await getCurrentPositionFromBrowser()) || await getCurrentPositionFromBrowser());
      } catch (error) {
        if ("response" in error) {
          alert(`${error.response.status} - ${error.response.data.message}`);
        }else { 
          console.log(error)
        }
      }
    })()
  }, [search])

  useEffect(() => {
    (async () => {
      try {
        if("latitude" in currentPosition) { 
          setWeatherData(await getWeatherData(currentPosition));
        }
      } catch (error) {
        if ("response" in error) {
          alert(`${error.response.status} - ${error.response.data.message}`);
        }else { 
          console.log(error)
        }
      }
    })()
  }, [currentPosition])

  useEffect(() => {
      if(Object.keys(weatherData).length > 0) {
        setIsLoading(false);
      }
  }, [weatherData])

  useEffect(() => {
    if (Object.keys(alertModalData).length > 0) {
      setIsModalAlertModalOpen(true);
    }
  }, [alertModalData])

  if (!isLoading) {
    return (
      <Container>
        <Alerts 
          data={weatherData.alerts || []}
          showAlertModal={showAlertModal}
          setAlertModalData={setAlertModalData}
        />
        <Weather 
          search={searchInput} 
          searchLocation={searchLocation} 
          handleSearchInput={handleSearchInput}
          addFavorite={addFavorite} 
          handleEnterKey={handleEnterKey}
          weatherData={weatherData}
          cityName={currentPosition.name} 
        />
        <Favorites data={favorites} openFavorite={openFavorite} removeFavorite={removeFavorite} />
        <AlertModal data={alertModalData} isModalAlertModalOpen={isModalAlertModalOpen} handleCloseModal={handleCloseModal} />
      </Container>     
    );
  }
}
