import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){
    let [city,setCity] =useState("");
    let [Error,setError] =useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e5e10b389fb5e09d21cd5dd3894449db"
    let getWeatherInfo = async () =>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description

        }
        console.log(result);
        return result;
        }
        catch(err){
            throw(err);
        }
    }

    let handleChange =(event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (evt) =>{
       try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
       }
       catch(err){
        setError(true);
       }
    }

    return (
        <div className='SearchBox' >
        <form action="" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Enter City" variant="outlined"  required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant='contained' type='submit' >Search</Button>
        </form>
        {Error && <p style={{color:"red"}} >No such place found</p> }
        </div>
    )
}