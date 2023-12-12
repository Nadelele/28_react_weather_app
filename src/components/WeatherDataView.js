function WeatherDataView(props){return (
<div>
  
    
        <h2>{props.data.name}, {props.data.sys.country}</h2>
        <p>Temperature: {props.data.main.temp}°C</p>
        <p>Weather: {props.data.weather[0].main}</p>
        <p>Description: {props.data.weather[0].description}</p>
        <p>Humidity: {props.data.main.humidity}%</p>
        <p>Wind speed: {props.data.wind.speed} meter/sec</p>
        <p>Visibility: {props.data.visibility} meters, {props.data.visibility / 100}%</p>
    </div>
)
}

export default WeatherDataView;