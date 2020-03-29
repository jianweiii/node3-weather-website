const request = require('request')

const forecast = (lat, lng, callback) => {
    // // Darksky Weather API
    const key = "a99174c648b51cb0e0572045b79e1243"
    const queryAPI = "?units=si"
    const url = 'https://api.darksky.net/forecast/' + key + "/" + lat + "," + lng + queryAPI

    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find weather location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            // {
            //     summary: response.body.daily.data[0].summary,
            //     temperature: response.body.currently.temperature,
            //     precipProbability: response.body.currently.precipProbability
            // }
            // console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast