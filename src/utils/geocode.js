const request = require('request')

const geocode = (address, callback) => {
    const mapKey = "pk.eyJ1IjoiamlhbndlaWlpIiwiYSI6ImNrNGpkd2xvYjFud2ozZXJ2Y2Jnd3ZhOXkifQ.UrrZ8h0t2Z_zHVfR3w1GPA"
    const limit = "1"
    const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + mapKey + "&limit=" + limit

    request({ url:mapURL, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = {
                location: body.features[0].place_name,
                lat: body.features[0].center[1].toString(),
                lng: body.features[0].center[0].toString()
            }
            callback(undefined, data)
        }
    })
}


module.exports = geocode