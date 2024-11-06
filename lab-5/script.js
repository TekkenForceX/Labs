let actualTemp = Math.random();
let desiredTemp = Math.random();

if(actualTemp > desiredTemp) {
    console.log("Tempearture is above desired degrees, run A/C.");
} else if (actualTemp < desiredTemp) {
    console.log("Temperature is lower than desired degrees, turning on Heat.");
} else {
    console.log("Temperature is at the prefered degrees, no action needed.");
}

