import { Search } from './Search';
import { CurrentWeather } from './CurrentWeather';
import { Forecasts } from './Prediction';
import { Container } from './styles';

export function Weather({search, searchLocation, handleSearchInput, addFavorite, handleEnterKey, weatherData, cityName}) {
    return (
        <Container>
          <Search value={search} search={search} searchLocation={searchLocation} handleSearchInput={handleSearchInput} addFavorite={addFavorite} handleEnterKey={handleEnterKey} />
          <CurrentWeather data={weatherData.current} timezone={weatherData.timezone} cityName={cityName}/>
          <Forecasts data={weatherData.daily} />
        </Container>
    )
}