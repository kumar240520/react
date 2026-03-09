import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";
import { CityApi } from "./CityApi";
import TiltedCard from "./card.jsx";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SearchBox() {

    let [city, setCity] = useState("");
    let cityname = city;

    let [weather, setWeather] = useState({
        temp: "",
        mintemp: "",
        maxtemp: "",
        condition: "",
        humidity: "",
        pressure: "",
        wind: ""
    });

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        let data = await CityApi(city);

        console.log(data);


        setWeather(data);

        setCity("");

    };

    return (
        <div className="searchbox">

            <h2>Search For the City Weather</h2>

            <form onSubmit={onSubmit}>

                <TextField
                    label="Enter the City"
                    variant="outlined"
                    size="small"
                    value={city}
                    required
                    onChange={handleChange}
                />

                &nbsp;

                <Button type="submit" variant="outlined">
                    Search
                </Button>

            </form>
            {weather.cityname === "Not Found" ? (
                <Alert severity="error">
                    City not found.
                </Alert>
            ) : null}

            <br />

            <TiltedCard
                imageSrc="./Gemini_Generated_Image_7ymdnx7ymdnx7ymd.png"
                altText="weather"
                captionText="Weather Card"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                    <>
                        <span className="tilted-card-demo-text">

                            <h2 className="names">{weather.cityname && weather.cityname.toUpperCase()}</h2>

                            <h3>{weather.temp} °C</h3>

                            <h3 className="cond"> {weather.condition}</h3>

                            <span className="sub"><p>Pressure: <b>{weather.pressure}%</b> &nbsp; &nbsp;Humidity: <b>{weather.humidity}%</b></p></span>


                            <p className="subs">Wind: <b>{weather.wind} km/h</b></p>

                            <span className="sub"><p>Min: <b>{weather.mintemp}°C</b> &nbsp; &nbsp;Max: <b>{weather.maxtemp}°C</b></p></span>

                        </span>
                    </>
                }
            />

        </div>
    );
}