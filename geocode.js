const request = require('request');

getGeocodeFromAddress = (address) =>{
    var encodedAddress =encodeURIComponent(address);
    return new Promise((resolve,reject)=>{
        request({
            url:`https://api.geocod.io/v1.3/geocode?api_key=<YOUR API KEY HERE>&q=${encodedAddress}`,
            json:true,
        },(error,response,body) => {
            if(!error && typeof body.results !== 'undefined'){
                console.log(`Address: ${body.results[0].formatted_address}`);
                console.log(`latitude: ${body.results[0].location.lat}`);
                console.log(`longitude: ${body.results[0].location.lng}\n`);
                resolve({
                    latitude: body.results[0].location.lat,
                    longitude:body.results[0].location.lng
                });
            }
            else
            {
                reject("Can't fetch geocode");
            }
        });
    });
};

module.exports = {
    getGeocodeFromAddress
}