import { MdSearch } from 'react-icons/md'

import { Container } from './styles';

export function Search({value, search, searchLocation, handleSearchInput, addFavorite, handleEnterKey}) {
  
  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
         <MdSearch className="searchIcon" onClick={searchLocation} size={20}/>
         <input type="search" onChange={(e) => handleSearchInput(e)} onKeyDown={handleEnterKey} placeholder="Search" value={value} />
         <button type="button" onClick={(e) => addFavorite(search)} title="Add favorite">+</button>
      </form>
    </Container>
  )

}


