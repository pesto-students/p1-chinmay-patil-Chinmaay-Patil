//declaring required packages
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const axios = require('axios')


app.use(bodyParser.urlencoded({ extended: true }))

//sending html page for input 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
// getting the request from html page and returning the output
app.post('/', async (req, res) => {
    let APIkey = 'c819ebcd53f89df4b29eaf6ee24b54c9';
    let cityName = req.body.city;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
    //making GET call to fetch data from weather API
    let response = await axios.get(URL);
    let weatherData = response.data;
//creating object to store relevant data recevied from API app
    const out = {
        City : cityName,
        description: weatherData.weather[0].description,
        temperature: weatherData.main.temp + " &#8451",
        pressure: weatherData.main.pressure + " Pa",
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed +"m/s",
    }
    let myString = JSON.stringify(out);
 //sending response to browser
    res.end(`<h1> Weather - ${myString}</h1>`);



});
//declaring listner for server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));