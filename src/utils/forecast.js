const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=80bbb571c5a3c76957938a7fe296e65b&query=' 
    + latitude + ',' + longitude + '&units=f'
     
    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature 
            + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    })

}

module.exports = forecast

// London Weather Request
// const url = 'http://api.weatherstack.com/current?access_key=80bbb571c5a3c76957938a7fe296e65b&query=51.5072,-0.1275&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else{
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature 
//      + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
    
// })