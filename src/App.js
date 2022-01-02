import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import 'normalize.css'

function App() {

  let parameter = "";
  const units = {
    metric: "&units=metric",
    standard: ""
  }
  const [ weather, setWeather ] = useState(null);
  const [ oneCall, setOneCall ] = useState(null);
  const [ loader, setLoader ] = useState(true);
  const [ toSwitch, setToSwitch ] = useState(true);

  const handleSwitch = () => {
    setToSwitch(!toSwitch);
  }

  //console.log(toSwitch);

  if ( toSwitch ) {
    parameter = units.metric;    
  }
  else {
    parameter = units.standard
  }

  useEffect(() => {
    const handleError = () => {
      console.log("No permitió acceder a la ubicación");
    }
    
    const success = position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a41591c088df2f82f4b32a21c5358474${parameter}`)
        .then(res => setWeather(res.data))
        .catch(error => console.log(error.res));
      setLoader(false);
    }

    navigator.geolocation.getCurrentPosition(success, handleError)
    console.log("Soy handle")

  }, [parameter]);

  //const lastTime = weather?.dt;

/*   useEffect(() => {
    const handleError2 = () => {
      console.log("No permitió acceder a la ubicación");
    }
    
    const success2 = position2 => {
      const lat2 = position2.coords.latitude
      const lon2 = position2.coords.longitude
      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat2}&lon=${lon2}&dt=${lastTime}&appid=a41591c088df2f82f4b32a21c5358474`)        
          .then(res => setOneCall(res))
          .catch(error => console.log(error.res));
    }

    navigator.geolocation.getCurrentPosition(success2, handleError2)
    console.log("Soy Historical weather data")

  }, [parameter]); */

  console.log("Estoy en App.js")
  console.log(weather?.timezone)
  console.log(oneCall)

  return (
    <div className="App">
      <Card 
        weather={weather}
        timezone = {weather?.timezone}
        sunrise = {weather?.sys?.sunrise}
        sunset = {weather?.sys?.sunset}
        name = {weather?.name}
        country = {weather?.sys?.country}
        icon = {weather?.weather?.[0]?.icon}
        temp = {weather?.main?.temp}
        main = {weather?.weather?.[0].main}
        feels_like = {weather?.main?.feels_like}
        humidity = {weather?.main?.humidity}
        pressure = {weather?.main?.pressure}
        loader={loader} 
        toSwitch={toSwitch}
      />
      <button onClick={handleSwitch} >Switch</button>
    </div>
  );
}

export default App;