const request = require('request');

getWeatherFromGeocode = (latitude,longitude) =>{
    var encodedlatitude = encodeURIComponent(latitude);
    var encodedlongitude = encodeURIComponent(longitude);
    return new Promise((resolve,reject)=>{
        request({
            url:`https://api.darksky.net/forecast/4465d1d98daf3eec981591422b31c1bf/${encodedlatitude},${encodedlongitude}`,
            json:true,
        },(error,response,body) => {
            if(!error && response.statusCode === 200)
            {
                resolve({
                    temperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature
                });
            }
            else
            {
                reject(`Can't fetch weather`);
            }
        });
    });
};

module.exports = {
    getWeatherFromGeocode
}