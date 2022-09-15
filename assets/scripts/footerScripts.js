//realtime clock
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);

//get location via lat & lon
$(function () {
    const button = document.getElementById("geoLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your browser not support";
    }

    function onSuccess(position) {
        button.innerText = "Detecting your location...";
        let { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f7473864d3c34b499d1bd69b635decd5`)
            .then(response => response.json()).then(response => {
                let allDetails = response.results[0].components;
                console.table(allDetails);
                let { county, postcode, country } = allDetails;
                button.innerText = `${country}`;
            }).catch(() => {
                button.innerText = "Something went wrong";
            });
    }

    function onError(error) {
        if (error.code == 1) {
            button.innerText = "You denied the request";
        } else if (error.code == 2) {
            button.innerText = "Location is unavailable";
        } else {
            button.innerText = "Something went wrong";
        }

        button.setAttribute("disabled", "true");
    }
});

//visiter counter
var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = '';

for (var i of nums) {
    document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}