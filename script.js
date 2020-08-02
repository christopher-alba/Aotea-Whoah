// require('dotenv').config()
// make call to api once the button on the "where would you like to go?" loads
// document.getElementsByClassName()[0].addEventListener('click', (location) => {
//   callWeatherApi(location)
// })
let locationCode
//var locationCode = 252066;

let locations = document.getElementsByClassName("locationButton")
console.log(locations);

function clearPreviousWeather() {
  let days = document.getElementsByClassName("day")
  for (let i = 0; i < days.length; i++) {
    days[i].remove()
  }
}
for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
  locations[i].addEventListener('click', (event) => {
    console.log(event.target.id);
    if (event.target.id === 'auckland') {
      document.getElementById("chosenCity").innerText = "Auckland"
      locationCode = 252066
      on();
      callWeatherApi(locationCode)
    } else if (event.target.id === 'wellington') {
      document.getElementById("chosenCity").innerText = "Wellington"
      locationCode = 250938
      on();
      callWeatherApi(locationCode)
    } else if (event.target.id === 'christchurch') {
      locationCode = 252473
      document.getElementById("chosenCity").innerText = "Christchurch"
      on();
      callWeatherApi(locationCode)
      
    } else {
      document.getElementById("chosenCity").innerText = "Hamilton"
      locationCode = 256405
      on();
      callWeatherApi(locationCode)
    }
  })

}

if (locationCode) {
  callWeatherApi(locationCode)
}


function callWeatherApi (location) {
  clearPreviousWeather()
  let apiKey = 'RI9GIdT7uLmMcaoIvqmASFW8e2RwPGVB'

  const myHeaders = new Headers()

  // const myRequest = new Request(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}.json?language=en&apikey=${apiKey}`, {
  //   method: 'GET',
  //   headers: myHeaders,
  //   mode: 'no-cors',
  //   cache: 'default',
  //   origin: '*'
  // })

  var t = 'ZZZ';
  var i = 1;

  fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}.json?language=en&apikey=${apiKey}`)
  // fetch(myRequest)
    .then(response => response.json())
    .then(data => {
      let parentDiv = document.getElementById("table")
      console.log(data);
      data.DailyForecasts.forEach(day => {

        //var test1 = document.getElementById("xxx");
        //test1.innerText = t+i;

        var para1 = document.getElementById("p"+i);
        para1.innerText = "Date : " + day.Date;
        i++;

        var para2 = document.getElementById("p"+i);
        para2.innerText = "Maximum Temperature : " + day.Temperature.Maximum.Value;
        i++;

        var para3 = document.getElementById("p"+i);
        para3.innerText = "Minimum Temperature : " + day.Temperature.Minimum.Value;        
        i++;

        var para4 = document.getElementById("p"+i);
        para4.innerText = "Condition : " + day.Day.IconPhrase;
        
        i++;

        // let weatherDiv = document.createElement('div')
        // parentDiv.appendChild(weatherDiv)
        // weatherDiv.classList.add("day")
        // let weatherDataDateTitle = document.createElement('h4')
        // let weatherDataDate = document.createElement('p')

        // weatherDataDateTitle.innerText = "Date"
        // weatherDataDate.innerText = day.Date

        // weatherDiv.appendChild(weatherDataDateTitle)
        // weatherDiv.appendChild(weatherDataDate)

        // let weatherDataMaxTemperatureTitle = document.createElement('h4')
        // let weatherDataMaxTemperature = document.createElement('p')

        // weatherDataMaxTemperatureTitle.innerText = "Maximum Temperature"
        // weatherDataMaxTemperature.innerText = day.Temperature.Maximum.Value

        // weatherDiv.appendChild(weatherDataMaxTemperatureTitle)
        // weatherDiv.appendChild(weatherDataMaxTemperature)

        // let weatherDataMinTemperatureTitle = document.createElement('h4')
        // let weatherDataMinTemperature = document.createElement('p')

        // weatherDataMinTemperatureTitle.innerText = "Minimum Temperature"
        // weatherDataMinTemperature.innerText = day.Temperature.Minimum.Value

        // weatherDiv.appendChild(weatherDataMinTemperatureTitle)
        // weatherDiv.appendChild(weatherDataMinTemperature)

        // let weatherDataDayTitle = document.createElement('h4')
        // let weatherDataDay = document.createElement('p')

        // weatherDataDayTitle.innerText = 'Weather Forecast'
        // weatherDataDay.innerText = day.Day.IconPhrase

        // weatherDiv.appendChild(weatherDataDayTitle)
        // weatherDiv.appendChild(weatherDataDay)
      })
    })
}


function off() {
  var x = document.getElementById("table");
    x.style.display = "none";
  }

function on() {
  var x = document.getElementById("table");
    x.style.display = "block";
  }  
// for later use
// document.getElementsbyClassName('')[0].addEventListener('click', () => {

// });


// //JS for activities
// let currWeather = "";

// function showActivity(){
//   if (currentWeather != )
// }

// window.onload = function() {
//   showActivity();
// }
