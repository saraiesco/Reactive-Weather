import React from "react";
import {useState} from "react";

function Location(props) {
    // const[location,setLocation]=useState("")
 let myCity= props.data.find((object)=> object.city === props.location)

  return (
    <>
    { myCity ?(
     <div className = "card">
      <h2>Your Location's Weather</h2>
        <div className = "img-container">
            <img className="card-img-top" src = {props.images()} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{myCity.city}</h3>
            <h5 className="card-text">{myCity.temperature}</h5>
            <h5 className="card-text">{myCity.forecast}</h5>
        </div>
    </div>
    ): (<h2>Location not found. Please try a new Location</h2>)}
    </>
  )
};


// Export the WeatherCard
module.exports = Location;