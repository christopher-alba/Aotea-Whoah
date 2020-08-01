// make call to api once the button on the "where would you like to go?" loads
// document.getElementsByClassName()[0].addEventListener('click', (location) => {
//   callWeatherApi(location)
// })
callWeatherApi(location)

function callWeatherApi(location) {

  fetch('https://ghibliapi.herokuapp.com/films')
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


