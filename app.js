const apiKey = "6db15ec0a951761219e7f5269edb0569";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function cityTemperature(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (response.status == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".hidden-details").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherIcon = document.querySelector(".weather-icon");

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/heavy-rain.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".hidden-details").style.display = "block";
  }
}

const searchInput = document.querySelector(".input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
  cityTemperature(searchInput.value);
});
