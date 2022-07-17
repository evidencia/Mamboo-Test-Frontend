import { Container } from './styles';
import AddFavoriteIcon from './../../assets/images/favorite.png';
export function Favorites({ data, openFavorite, setSearch, removeFavorite, setFavorites}) {
    return (
        <Container>
            <h2>Favorites</h2>
            <ul>
            {data.map((item, index) =>
                <li key={index}><a href="/" onClick={ (e) => openFavorite(e, item, setSearch) }>{item}</a><span onClick={ (e) => removeFavorite(item, setFavorites)}>&times;</span></li>
            )}
            </ul>
            {data.length === 0 && <img className="icon" src={AddFavoriteIcon} alt="add favorite"/>}
        </Container>
    )
}