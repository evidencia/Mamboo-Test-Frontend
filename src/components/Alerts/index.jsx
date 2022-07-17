import { Container } from './styles';
import AlertIcon from './../../assets/images/alert.png';

export function Alerts({ data, showAlertModal }) {
    return (
        <Container>
            <h2>Alerts</h2>
            <ul>
            {data.map((item, index) =>
                <li key={index}><a href="/" onClick={ (e) => showAlertModal(e, item) }>{item.event}</a></li>
            )}
            </ul>
            {Object.keys(data).length === 0 && <img className="icon" src={AlertIcon} alt="alert"/>}
        </Container>
    )
}