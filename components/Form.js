import React from "react";
import { useState } from "react";

function Form(props) {
    const{location, setLocation}=props;
    const[typedLocation,setTypedLocation]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        setLocation(typedLocation)
        setTypedLocation("")
    }
  return (
    <div className = "form">
    <form onSubmit={handleSubmit}>
        <label className = "city">City:
            <input type="text" value={typedLocation} onChange={(e)=>setTypedLocation(e.target.value)}/>
        </label>
        <button className = "btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
  );
};


// Export the WeatherCard
module.exports = Form;