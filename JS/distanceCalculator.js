const distance = document.querySelector("#distance");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
var days = 0;
var travelledDistance = 0;


function distanceCalculator() {
    var newdistance = distance.value;
    console.log(newdistance);
    // for(var i=o; i<= distance; i+7)
    // {

    // }
    // if(travelledDistance < distance.value)
    // {
    //     travelledDistance = travelledDistance+7;
    //     days = days+1;
    //     output.innerHTML = days;
    // }
    // else {

    // }
}

submit.addEventListener("click", distanceCalculator)
