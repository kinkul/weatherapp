
const lugar= require('./lugar/lugar')
const clima= require('./clima/clima')
const {argv}= require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});
// lugar.getlugar(argv.direccion)
// .then( console.log);
// clima.getClima(40.75, -74)
// .then (console.log)
// .catch(console.log) 

const getInfo = async( direccion ) => {


    try {
        const coords = await lugar.getlugar( direccion );
        
        const temp   = await clima.getClima( coords.latitude, coords.longitude );
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}



getInfo(encodeURI(argv.direccion) )
    .then( console.log )
    .catch( console.log );