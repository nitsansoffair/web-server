const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic29mZmFpciIsImEiOiJjazc2Z3Vhd3gwYWw0M21wYjF1ejJoMXV4In0.fVZYP09zRk3dgYMqwVHy7A&limit=1';

    request({url, json: true}, (err, res) => {
        if(err){
            callback('Unable to connect to location services!');
        }else if(!res.body.features || res.body.features.length === 0){
            callback('Unable to find location. Try another search.');
        }else{
            const { body: { features } } = res;

            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            });
        }
    });
};

module.exports = geocode;
