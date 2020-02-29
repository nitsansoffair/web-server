const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d2012a87c94fd258e379d463958402b/' + latitude + ',' + longitude;

    request({ url, json: true }, (err, res) => {
        if(err){
            callback('Unable to connect to weather service!');
        }else if(res.body.error){
            callback('Unable to find location');
        } else {
            const { body: { daily, currently: { temperature, precipProbability } } } = res;

            callback(undefined, `${daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;
