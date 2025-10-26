const apiKey = "ff914a69a85590c75c56cb9985ec876c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const weatherIcon = document.querySelector('.js-weather-icon');

async function checkWeather(city) {


  const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (data.cod === "404") {
    alert("City not found!");
    display.style.display = "none";
    return;
  }

  console.log(data);

  document.querySelector(".city").innerHTML = data.name ;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ' °C';
  document.querySelector(".Humidity-info").innerHTML = data.main.humidity + ' %';
  document.querySelector(".js-wind").innerHTML = 'Wind: ' +  data.wind.speed  + ' km/hr';
  document.querySelector(".conditions").innerHTML = data.weather[0].main
  document.querySelector(".feels").innerHTML = 'feels like : ' + Math.round(data.main.feels_like) + ' °C' ;
  document.querySelector(".max").innerHTML = ' Temp max : ' + data.main.temp_max + ' °C'  ;
  document.querySelector(".min").innerHTML = ' Temp min : ' + data.main.temp_min + ' °C'  ;
  document.querySelector(".pressure-info").innerHTML = 'Pressure:' + data.main.pressure + 'hpa'  ;
  document.querySelector(".sealevel-info").innerHTML = 'Sealevel: ' + data.main.sea_level + 'hpa'  ;
  document.querySelector(".description").innerHTML = data.weather[0].description ;


  if(data.weather[0].main === "Clouds"){
    weatherIcon.src = "Images/clouds.png";
  }
  else if (data.weather[0].main === "Clear"){
    weatherIcon.src = "Images/clearSky.png";
  }
  else if (data.weather[0].main === "Rain"){
    weatherIcon.src = "Images/rainy.png";
  }
  else if (data.weather[0].main === "Drizzle"){
    weatherIcon.src = "Images/drizzle.png";
  }
  else if (data.weather[0].main === "Mist"){
    weatherIcon.src = "Images/mist.png";
  }

}

searchIcon.addEventListener('click' ,() => {
  checkWeather(searchBox.value);
})
