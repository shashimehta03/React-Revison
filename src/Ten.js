import React, { useEffect, useState } from "react"

const Ten = (props) => {
    const [weather ,setWeather] =useState(null);
    useEffect(()=>{
        // if(navigator.geolocation){
        //     navigator.getCurrentPosition((position)=>{
                const latitude=87.82;
                const longitude =19.16;
          
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ec86c01ea2504a17448029ce19fd74dd`)
            .then((response)=>response.json())
            .then((data)=>setWeather(data))
            .catch((err)=>console.log(err))
        // })
        // } 
    },[])
  return (
    <div>
      <h1>Weather Api</h1>
      {
        weather?(
            <div>
                <h3>current weather</h3>
                <p>temperature :{weather.main.temp}</p>
                <p>condition:{weather.weather[0].description}</p>
                <p>location :{weather.name}</p>

            </div>
        ):(
            <p>
                loading....
            </p>
        )
      }
      
    </div>
  )
};

export default Ten;
