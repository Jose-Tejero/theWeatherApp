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
      axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${1641151877}&appid=a41591c088df2f82f4b32a21c5358474`)
        .then(res => setWeather(res.data))
        .catch(error => console.log(error.res));
      setLoader(false);
    }

    navigator.geolocation.getCurrentPosition(success, handleError)
    console.log("Soy handle")

  }, [parameter]);

  console.log("Estoy en App.js")
  console.log(weather)

  return (
    <div className="App">
      <Card 
        weather={weather}
        timezone = {weather?.timezone}
        sunrise = {weather?.current?.sunrise}
        sunset = {weather?.current?.sunset}
        name = {weather?.timezone}
        icon = {weather?.current?.weather?.[0]?.icon}
        temp = {weather?.current?.temp}
        main = {weather?.weather?.[0].main}
        feels_like = {weather?.current?.feels_like}
        humidity = {weather?.current?.humidity}
        pressure = {weather?.current?.pressure}
        loader={loader} 
        toSwitch={toSwitch}
      />
      <button onClick={handleSwitch} >Switch</button>
    </div>
  );
}

export default App;