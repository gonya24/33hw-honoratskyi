function weather () {
    const params = {
        method: 'GET'
    }
    fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',params)
        .then(function(res){
            return res.json();
        })
        .then (function(res){
            console.log(res)
            getInfo('icon',null,`${res.weather[0].icon}`)
            getInfo('temp',`${res.main.temp.toFixed(1)}°C`)
            getInfo('city',`${res.name}`)
            getInfo('descr',`${res.weather[0].description}`)
            getInfo('pressure',`Pressure: ${res.main.pressure} hPa`)
            getInfo('speed',`Speed wind: ${res.wind.speed} m/s`)
            getInfo('deg',`Direction of the wind(in degrees): ${res.wind.deg}°`)
            getInfo('humidity',`Humidity: ${res.main.humidity}%`)
            console.log(res.weather[0].icon)
        })
}
function getInfo (elem,innerText,ico) {
   const parentEl = document.getElementById(elem);
   parentEl.innerHTML = innerText;
   if(ico) {
    parentEl.setAttribute('src',`http://openweathermap.org/img/w/${ico}.png`)
   }

}
weather()