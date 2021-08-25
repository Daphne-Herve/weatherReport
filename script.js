const meteo = document.getElementById('meteo');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');
const localisation = document.getElementById('localisation');
// const dateDuJour = document.getElementById('dateDuJour');
const nomVille = document.querySelector('input');

function showTown() {
  const nomVille = document.querySelector('input');
  ville = nomVille.value;
  fetch(
    'http://api.weatherapi.com/v1/forecast.json?key=b4f611ad49734ca8ae360038202111&q=' +
      ville +
      '&days=2&lang=fr'
  )
    .then((res) => res.json())
    .then(
      (res) => (
        (meteo.innerHTML = `Le temps est ${res.forecast.forecastday[0].hour[0].condition.text}`),
        (maxTemp.innerHTML = `Maxi : ${res.forecast.forecastday[0].day.maxtemp_c}°C`),
        (minTemp.innerHTML = `Mini : ${res.forecast.forecastday[0].day.mintemp_c}°C`),
        (localisation.innerHTML = `${res.location.name}, ${res.location.region}`)
        // (dateDuJour.innerHTML = `${res.location.localtime}`)
      )
    )
    .catch((error) => console.log(error.message));
}
