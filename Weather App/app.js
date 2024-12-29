const apiKey = "16cc85a421264781aaa24021242512";

const cityName = document.querySelector("#city-name");
const cityTemperatueC = document.querySelector("#temperatureC");
const cityTemperatueF = document.querySelector("#temperatureF");
const cityDesc = document.querySelector("#description");
const icon = document.querySelector(".current-weather img");

const inputSearch = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-btn");

const favBtn = document.querySelector("#favorite-btn");
const favList = document.querySelector("#fav-list");

searchButton.addEventListener("click", function () {
  let city = inputSearch.value.trim();
  inputSearch.value = "";
  recieve(city);

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = data.location.name;
      cityTemperatueC.textContent = `${data.current.temp_c} °C`;
      cityTemperatueF.textContent = `${data.current.temp_f} F°`;
      cityDesc.textContent = data.current.condition.text;

      const iconUrl = `https:${data.current.condition.icon}`;
      icon.src = iconUrl;
    })
    .catch((error) => console.log("Error fetching weather data:", error));

  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&hours=24`
  )
    .then((response) => response.json())
    .then((data) => {
      const hourlyForecast = document.querySelector("#hourly-forecast");
      data.forecast.forecastday[0].hour.forEach((hourData) => {
        const hourDiv = document.createElement("div");
        hourDiv.classList.add("hour-card");
        hourDiv.innerHTML = `
        <p>${hourData.time.split(" ")[1]}</p>
        <img src="https:${hourData.condition.icon}" alt="${
          hourData.condition.text
        }">
        <p>${hourData.temp_c}°C</p>
        <p>${hourData.condition.text}</p>
      `;
        hourlyForecast.appendChild(hourDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching hourly forecast:", error);
    });
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
  )
    .then((response) => response.json())
    .then((data) => {
      const weeklyForecast = document.querySelector("#weekly-forecast");
      data.forecast.forecastday.forEach((dayData) => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day-card");
        dayDiv.innerHTML = `
        <p>${new Date(dayData.date).toLocaleDateString()}</p>
        <img src="https:${dayData.day.condition.icon}" alt="${
          dayData.day.condition.text
        }">
        <p>${dayData.day.avgtemp_c}°C</p>
        <p>${dayData.day.condition.text}</p>
      `;
        weeklyForecast.appendChild(dayDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching weekly forecast:", error);
    });
});

window.addEventListener("DOMContentLoaded", function () {

  if (favList) {
    let hasFavorites = false;
    favList.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("city")) {
        hasFavorites = true; 

        const value = localStorage.getItem(key);

        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`
        )
          .then((response) => response.json())
          .then((data) => {
            const favCard = document.createElement("div");
            favCard.classList.add("fav-card");
            favCard.innerHTML = `
              <img src="${data.current.condition.icon}" alt="City Weather Icon">
              <h4>${data.location.name}</h4>
              <p>Temperature: ${data.current.temp_c}</p>
              <p>Description: ${data.current.condition.text}</p>
              <button class="remove-btn"><i class="bx bx-trash"></i> Remove</button>
            `;
            
            favList.appendChild(favCard);
          });
      }
    }

      if (!hasFavorites) {
      favList.innerHTML = "<p>No favorite locations added yet.</p>";
    }
  }
});

// remove fav list card

favList.addEventListener('click' , function(e){
  if(e.target.classList.contains("remove-btn")){
      
  }
})




function recieve(recivedCity) {
  favBtn.addEventListener("click", function () {
    let favCity = recivedCity;
    const key = `city${localStorage.length + 1}`;
    localStorage.setItem(key, favCity);
    location.reload();
  });
}
