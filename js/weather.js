const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const appid = '59f4bd23fcf43a0f883bdebcbbd922f5';
let lon, lat;

function success(position){
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const coordObj = {
        lon, lat
    };
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function getTemperature(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`)
    .then(response => response.json())
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}˚C/${place}`;
    });
}

function failed(){
    console.error("Can't get local information!");
}
function init(){
    const coords = localStorage.getItem(COORDS);
    if(coords !== null){
        const parsedCoords = JSON.parse(coords);
        lon = parsedCoords.lon;
        lat = parsedCoords.lat;
    }else{
        console.log('hi');
        navigator.geolocation.getCurrentPosition(success, failed);
    }
    getTemperature();
}

init();