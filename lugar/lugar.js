const axios= require('axios');

const getlugar= async(dir) =>{
    const encodeURL = encodeURI(dir);
    console.log(encodeURL);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        //timeout: 1000,
        headers: {'X-RapidAPI-Key': '380ecc9784mshe86c22b8777e745p1ce1f7jsnae0696e1777e'}
      });
      const resp= await instance.get();
     if(resp.data.Results.length===0){
         throw new ERROR(`No hay resultado para la direccion ${encodeURL}`);
     }
        const data = resp.data.Results[0];
        const direccion= data.name;
        const latitude= data.lat;
        const longitude= data.lon;
      return{
          direccion,
          latitude,
          longitude
      }
}
module.exports ={
    getlugar
}