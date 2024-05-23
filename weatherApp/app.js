const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const urlApi = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const appiKey = 'cdb22b689f4e415d99d2c2a03d95009b';

const imgWeather = document.querySelector('.imgWeather');

const weatherApp = async(city) =>{
    let response = await fetch(`${urlApi}${city}&appid=${appiKey}`)

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none';

    }else{
        let data = await response.json();

        let tempDeg = document.querySelector('.temp');
        tempDeg.innerHTML = Math.round(data.main.temp) + '°C';

        let nameDeg = document.querySelector('.city');
        nameDeg.innerHTML = data.name;

        let humidityDeg = document.querySelector('.humdityJs');
        humidityDeg.innerHTML = data.main.humidity;

        let windDeg = document.querySelector('.windJs');
        windDeg.innerHTML = data.wind.speed;

        if(data.weather[0].main == 'Haze'){
            imgWeather.src = './images/haze.png'
        }
        else if(data.weather[0].main == 'Clear'){
            imgWeather.src = './images/clear.png'
        }
        else if(data.weather[0].main == 'Clouds'){
            imgWeather.src = './images/clouds.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            imgWeather.src = './images/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            imgWeather.src = './images/mist.png'
        }
        else if(data.weather[0].main == 'Rain'){
            imgWeather.src = './images/rain.png'
        }
        else if(data.weather[0].main == 'Snow'){
            imgWeather.src = './images/snow.png'
        }


        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather').style.display = 'block';

    }
}

searchBtn.addEventListener('click', ()=>{
    weatherApp(searchBox.value);
})

