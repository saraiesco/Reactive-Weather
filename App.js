import React from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard';
import cities from './data';
import { useState } from 'react';
import Location from './components/Location';
import sunny from "./assets/Sunny.svg";
import cloudy from "./assets/Cloudy.svg";
import rainy from "./assets/Rainy.svg";
import partlyCloudy from "./assets/PartlyCloudy.svg";

function App() {
    const [location,setLocation]=useState("Tokyo")


    function images(location,cities){
        const equals = {
            "Sunny" : sunny,
            "Cloudy" : cloudy,
            "Rainy": rainy,
            "Partly cloudy": partlyCloudy,
          }
          for(let i=0;i< cities.length;i++){
            if(cities[i].city === location){
                return equals[cities[i].forecast]
            }
          }
    }

    return (
        <>
            <h3 className = "title">REACTIVE WEATHER</h3>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
            {cities.map((city,index)=> (<WeatherCard data = {city} keys={index} images={() => images(city.city, cities)}/>))}
            </div>
            <Location data={cities} location = {location} setLocation={setLocation} images={() => images(location, cities)}/>
            <h4>its working</h4>
        </>
    )
}

export default App;