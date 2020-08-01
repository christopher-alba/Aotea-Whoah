// make call to api once the page loads
document.onload(() => {
  let conditions = callApi(location)
  document.getElementsbyClassName('')[0].text = conditions
})

function callApi(location) {
  var request = new XMLHttpRequest()

  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    
    if (request.status >= 200 && request.status < 400) {
      data.forEach((movie) => {
        console.log(movie.title)
      })
    } else {
      console.log('error')
    }
  }

  request.send()

}

// for later use
document.getElementsbyClassName('')[0].addEventListener('click', () => {

});


