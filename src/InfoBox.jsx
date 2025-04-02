import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function  InfoBox({info}) {
    const INIT_URL="https://media.istockphoto.com/id/1198726170/photo/haboob-dust-storm-in-the-desert.jpg?s=2048x2048&w=is&k=20&c=Qyrp1LbmRTvBSsOsWL5wnyOe9CJsnDvY-UFCr31tq-U="
    const RAIN_URL="https://tse4.mm.bing.net/th?id=OIP.Mm-oDruzPWaSttukqfBZywHaEh&pid=Api&P=0&h=180";
    const HOT_URL="https://tse3.mm.bing.net/th?id=OIP.F8Leo-HNKLSUoxx014ikvAHaE9&pid=Api&P=0&h=180";
    const COLD_URL="https://tse2.mm.bing.net/th?id=OIP.ar5_MolM2YaKkm0dclAjrAHaEK&pid=Api&P=0&h=180";
    return (
    <div className='InfoBox'>
        
        <div className='cardContainer'><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?RAIN_URL :(info.temp>20?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}%</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather} feels like ={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card></div>
    </div>)
}