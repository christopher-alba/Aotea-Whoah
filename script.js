// require('dotenv').config()
// make call to api once the button on the "where would you like to go?" loads
// document.getElementsByClassName()[0].addEventListener('click', (location) => {
//   callWeatherApi(location)
// })
callWeatherApi('252066')

function callWeatherApi (location)  {

  let apiKey = 'hoArfRosT1215'
  fetch(`http://apidev.accuweather.com/currentconditions/v1/${location}.json?language=en&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      let weatherDiv = document.createElement('div')
      data.forEach(day => {
        for (let i = 0; i < Object.keys(day).length; i++) {
          let weatherDataTitle = document.createElement('h4')
          let weatherData = document.createElement('p')
          weatherDataTitle.innerText = Object.keys(day)[i]
          weatherData.innerText = Object.values(day)[i]
          // console.log(weatherData);
          weatherDiv.appendChild(weatherDataTitle)
          weatherDiv.appendChild(weatherData)
        }
        document.getElementById('myList').appendChild(weatherDiv)
      })
    })
}

// for later use
// document.getElementsbyClassName('')[0].addEventListener('click', () => {

// });


