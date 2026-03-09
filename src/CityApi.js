async function CityApi(city){

    try{

    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e999d8316abf62130b863ea52fc7db9c&units=metric`
    );

    let data = await response.json();

    return {
        cityname: data.name,
        temp: data.main.temp,
        mintemp: data.main.temp_min,
        maxtemp: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        condition: data.weather[0].description,
        wind: data.wind.speed,
        
    };}

    catch(err){

        return{
            cityname:"Not Found"
        }
    }
}

export { CityApi };