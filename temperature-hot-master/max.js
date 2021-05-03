let button = document.querySelector('#search-btn');
let inputValue = document.querySelector('#inputCityName');

button.addEventListener('click', function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+ inputValue.value+'&appid= e13fd062517dbf3bbab0d646eb6a805f')
.then(res => res.json())
.then(data => console.log(data))

.catch(error => alert('Rong city name'))
})