import React, { useEffect, useState } from 'react';
import './Weather.css'
const Weather = () => {
    const [inputCity, setInputCity] = useState(null);
    const [searchCity, setSearchCity] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=e1e97cabc5955974d12a8030b6377597`;
            const response = await fetch(url);
            const responseJson = await response.json();
            setInputCity(responseJson.main);
        };

        fetchApi();
    }, [searchCity])

    return(
        <>
            <div className="box">
                <div className="input">
                            <input
                                type="search"
                                value={searchCity}
                                className="input-data"
                                onChange={(event) => { setSearchCity(event.target.value) }}
                            />
                </div>
                <br/>
                <hr/>
            {!inputCity ?
                (<p>Data Not Found</p>)
            :
                (
                    <div>
                        <div className="city-name">{searchCity}</div>
                        <div className="weather-result">{inputCity.temp}°C</div>
                        <div className="min-max-weather">MIN : {inputCity.temp_min}°C | MAX : {inputCity.temp_max}°C</div>
                    </div>
                )
            }
            </div>
        </>
    );
}

export default Weather;