const yargs = require('yargs');
const geocode = require('./geocode.js');
const weather = require('./weather.js');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'address of place whose to display weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.getGeocodeFromAddress(argv.a).then((locationObj)=>{
    return weather.getWeatherFromGeocode(locationObj.latitude,locationObj.longitude);
}).then((weatherObj)=>{
    console.log(`Temperature is ${weatherObj.temperature} degree. But it feels like ${weatherObj.apparentTemperature} degree.`);
}).catch((errMsg)=>{
    console.log(errMsg);
});