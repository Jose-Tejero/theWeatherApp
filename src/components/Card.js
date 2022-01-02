import React from 'react';

const Card = ({
        timezone,
        sunrise,
        sunset,
        name,
        country,
        icon,
        temp,
        main,
        feels_like,
        humidity,
        pressure,
        loader,
        toSwitch
}) => {

    const sunriseTime = new Date(sunrise*1000).toTimeString().split(' ');
    const sunriseHM = sunriseTime[0].split(':');
    const sunsetTime = new Date((sunset*1000)).toTimeString().split(' ');
    const sunsetHM = sunsetTime[0].split(':');

    console.log("Entré a Card.js")

    return (
        <>
            {
                loader ? (
                <div className="Container Use-flex ">
                    <div className='loader' ></div>
                </div>
                ) : (
                <>
                    <div className='Container' >
                        <div className="main">
                            <h2>{name}, {country}</h2>
                            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                            {
                                toSwitch ? (
                                    <>
                                        <h2>{Math.floor(temp)} °C</h2>
                                        <p>{main}</p>
                                        <p>Feels like: {Math.floor(feels_like)} °C</p>
                                    </>
                                ) : (                        
                                    <>
                                        <h2>{Math.floor(temp)} °K</h2>
                                        <p>{main}</p>
                                        <p>Feels like: {Math.floor(feels_like)} °K</p>
                                    </>
                                )
                            }
                        </div>
                        <div className="datas">
                            <h2 className='item-1' >Today's forecast</h2>
                            <p className='item-2' >Humidity: {humidity}%</p>
                            <p className='item-3' >Pressure: {pressure}</p>
                            <p className='item-4' >Sunrise: {sunriseHM[0]}:{sunriseHM[1]}</p>
                            <p className='item-5' >Sunset: {sunsetHM[0]}:{sunsetHM[1]}</p>
                        </div>
                    </div>
                </>
                )
            }
        </>
    );
};

export default Card;