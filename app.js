var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.times');
var value = document.querySelector('.value');
var content = document.querySelector('.content');
var shortDesc = document.querySelector('.short-desc');
var moreDesc = document.querySelector('.more-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var descWeather = document.querySelector('.desc-weather')
var body = document.querySelector('body')

async function changeWeatherUI(capitalSearch){
    let aptURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=ddbeb52f78b88a8a82bcc771dbd7cc37
    `
    let data = await fetch(aptURL).then(response => response.json());
    
    if(data.cod ==200){
        content.classList.remove('.hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        let temperature = Math.round(data.main.temp - 273,15)
        value.innerText = temperature
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : 'Unknown'
        descWeather.innerText =data.weather[0].description
        visibility.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        sun.innerText = data.main.humidity + '(%)'
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'hot')
        if(temperature<=27){
            body.setAttribute('class', 'warm')
        }
        if(temperature<=22){
            body.setAttribute('class', 'cool')
        }
        if(temperature<17){
            body.setAttribute('class', 'cold')
        }

    }
    else {
        content.classList.add('.hide')
    }
}


search.addEventListener('keypress', function(e){
    if (e.code == 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch);
    }
})

changeWeatherUI('ha noi')