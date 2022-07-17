import { MdWaterDrop } from 'react-icons/md'
import { WiNightSnowWind } from 'react-icons/wi'
import { FaCompressAlt, FaArrowDown,  FaArrowUp} from 'react-icons/fa'
import { Container } from './styles';
import { iconsPath } from '../../../constants';

export function CurrentWeather({ data, timezone, cityName }) {
  return (
    <Container>
        <main>
          <h1>Current Weather</h1>

          <div className="temperature">
            <div>
              <p>{cityName || timezone.substr(timezone.lastIndexOf('/')+1)}</p>
                <span>
                    <img src={`${iconsPath}/${data.weather[0].icon}.png`} alt="Clear" />
                    <h3>{Math.floor(data.temp)}º</h3>
                </span>

                <h2>{data.weather[0].description}</h2>
                <p>Timezone: { timezone }</p>
            </div>

            <div className="info-climate">
              <p>Feels like {data.feels_like}º</p>
              
              <div>
                <i>
                   <FaArrowUp size={20} /> 37º
                </i>

                <i>
                   <FaArrowDown size={20} /> 34º
                </i>

              </div>

              <ul>
                <li>
                    <MdWaterDrop size={20} /> Humidity
                    <strong>{data.humidity}%</strong>
                </li>

                <li>
                    <WiNightSnowWind size={20} /> Wind
                    <strong>{data.wind_speed}kph</strong>
                </li>

                <li>
                    <FaCompressAlt size={20} /> Pressure
                    <strong>{data.pressure}hPa</strong>
                </li>
              </ul>
            </div>
          </div>
        </main>
    </Container>
  );
}