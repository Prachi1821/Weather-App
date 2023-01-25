const apiKey = "84ae55b873fe4f7096d110551231901";
function storeLocation() {
    let locationName = document.getElementById("inputValue").value; 
    return locationName;
}

function getWeatherDetails(storelocation){
    let locationName = storelocation();
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
        document.getElementById("name").innerHTML = ` Location: ${data.location.name}`;
        document.getElementById("temp").innerHTML = ` Temprature: ${data.current.temp_c} °C`;
        document.getElementById("icon").src =  `${data.current.condition.icon}`;
        document.getElementById("text").innerHTML = ` ${data.current.condition.text}`;
        document.getElementById("wind").innerHTML = ` Wind-Direction: ${data.current.wind_dir}`;
        document.getElementById("humidity").innerHTML = ` Humidity: ${data.current.humidity} %`;
        document.getElementById("lat").innerHTML = `Latitude:  ${data.location.lat}`;
        document.getElementById("error").innerHTML = " ";
    })
    .catch((err)=>{
        document.getElementById("error").innerHTML = err.message;
        document.getElementById("name").innerHTML = " ";
        document.getElementById("temp").innerHTML = " ";
        document.getElementById("icon").src =  " ";
        document.getElementById("text").innerHTML = " ";
        document.getElementById("humidity").innerHTML = " ";
        document.getElementById("wind").innerHTML = " ";
        document.getElementById("lat").innerHTML = " ";
    })
 }

 function getCurrentDateTime(storelocation){
    let locationName = storelocation();
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("localtime").innerHTML = `Local-Time: ${data.location.localtime}`;
    })
    .catch((err)=>{
        document.getElementById("error").innerHTML = err.message;
        document.getElementById("localtime").innerHTML = " ";
    })
 }