import React from 'react';
import ReceiveWeatherData from './WeatherData';
import WeatherDataView from './WeatherDataView';
import { useState } from "react";

const WeatherForm = () => {
    const [weatherData, setWeatherData] = useState(null);


    const handleClick = (e) => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        // setWeatherData(ReceiveWeatherData(city));
        
        ReceiveWeatherData(city).then(data => setWeatherData(data));
            
    }
    return (
        <>
     <form onSubmit = {handleClick}> <input
            type="text"
            name="city"
            placeholder="Enter city"
        />
        <button type = "submit">Check the weather</button>
     </form>
     {
        weatherData &&
       <WeatherDataView data={weatherData}/>
      }
     </>
    )
    
}

export default WeatherForm;