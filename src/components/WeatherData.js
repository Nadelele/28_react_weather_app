import { API_KEY, BASE_URL } from '../utils';



async function ReceiveWeatherData(city) {
    // const [weatherData, setWeatherData] = useState(null)

    // console.log(city);
   
return fetch (`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
.then((response) => response.json())


}

export default ReceiveWeatherData;