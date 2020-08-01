// require('dotenv').config()
// make call to api once the button on the "where would you like to go?" loads
// document.getElementsByClassName()[0].addEventListener('click', (location) => {
//   callWeatherApi(location)
// })
callWeatherApi('252066')

function callWeatherApi(location) {

  let apiKey = 'Ya4thwap5qk4hSBHXJj5YDq0wJH5slJV'
  fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}.json?language=en&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      let parentDiv = document.getElementById("table")



      console.log(data);
      data.DailyForecasts.forEach(day => {
        let weatherDiv = document.createElement('div')
        parentDiv.appendChild(weatherDiv)
        let weatherDataDateTitle = document.createElement('h4')
        let weatherDataDate = document.createElement('p')

        weatherDataDateTitle.innerText = "Date"
        weatherDataDate.innerText = day.Date

        weatherDiv.appendChild(weatherDataDateTitle)
        weatherDiv.appendChild(weatherDataDate)

        let weatherDataMaxTemperatureTitle = document.createElement('h4')
        let weatherDataMaxTemperature = document.createElement('p')

        weatherDataMaxTemperatureTitle.innerText = "Maximum Temperature"
        weatherDataMaxTemperature.innerText = day.Temperature.Maximum.Value

        weatherDiv.appendChild(weatherDataMaxTemperatureTitle)
        weatherDiv.appendChild(weatherDataMaxTemperature)

        let weatherDataMinTemperatureTitle = document.createElement('h4')
        let weatherDataMinTemperature = document.createElement('p')

        weatherDataMinTemperatureTitle.innerText = "Minimum Temperature"
        weatherDataMinTemperature.innerText = day.Temperature.Minimum.Value

        weatherDiv.appendChild(weatherDataMinTemperatureTitle)
        weatherDiv.appendChild(weatherDataMinTemperature)

        let weatherDataDayTitle = document.createElement('h4')
        let weatherDataDay = document.createElement('p')

        weatherDataDayTitle.innerText = 'Weather Forecast'
        weatherDataDay.innerText = day.Day.IconPhrase

        weatherDiv.appendChild(weatherDataDayTitle)
        weatherDiv.appendChild(weatherDataDay)
      })
    })
}

// for later use
// document.getElementsbyClassName('')[0].addEventListener('click', () => {

// });


