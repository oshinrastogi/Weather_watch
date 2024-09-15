import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"

export default function InfoBox({info}){
    let ini_img="https://images.unsplash.com/photo-1710755069527-88bf188e1c5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVza3klMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <>
        <div className='contain'> 
        <div className="InfoBox" >
            <h1>WeatherInfo</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={ini_img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Feels Like:{info.feels_like}</p>
          <p>Temp: {info.temp}</p>
          <p>Max Temp: {info.temp_max}</p>
          <p>Min Temp: {info.temp_min}</p>
          <p>Weather: {info.weather}</p>
          <p>Humidity: {info.humidity}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
        </>
    )
}