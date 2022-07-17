import { Container } from './styles';
import { weekday, iconsPath } from '../../../constants'

export function Forecasts({data}) {
  return (
    <Container>
        <div className="infoForecasts">
            <h1>Extended Forecast</h1>
            
            <div className="forecasts">
                {data.map((item, index) =>
                    (
                        (index > 0) && 
                        (<span key={index}>
                            <h1>{weekday[new Date(item.dt * 1000).getDay()]}</h1>
                            <img src={`${iconsPath}/${item.weather[0].icon}.png`} alt="" />
                            <strong>{`${item.weather[0].main}`}</strong>
                            <p>{Math.floor(item.temp.max)}º/{Math.floor(item.temp.min)}º</p> 
                        </span>)
                  )
                )}
            </div>
        </div>
    </Container>
  );
}