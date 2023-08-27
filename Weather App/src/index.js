let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
  "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  };
  
    let weatherData = {
      "Paris": { temperature: "19°C (66°F)", humidity: "80%" },
      
    };

    function displayWeather(city) {
      if (weatherData.hasOwnProperty(city)) {
        let temperature = weatherData[city].temperature;
        let humidity = weatherData[city].humidity;
        alert(`It is currently ${temperature} in ${city} with a humidity of ${humidity}`);
      } else {
        let searchUrl = "https://www.google.com/search?q=weather+" + encodeURIComponent(city);
        alert(`Sorry, we don't know the weather for this city, try going to ${searchUrl}`);
      }
    }

    function getWeather() {
      let userInput = document.getElementById("cityInput").value;
      displayWeather(userInput);
    }