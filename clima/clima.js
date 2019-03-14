const axios= require('axios');
const getClima=async(lat, lon)=>{
const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb0b92b0cba2f4b0e86daf5eacc23fbb&units=metric`);
return resp.data.main.temp;
}
module.exports={
    getClima
}
