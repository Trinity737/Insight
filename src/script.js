function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = response.data.(dt*1000);

let apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
