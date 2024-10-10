// const endDate = "23 June 2024 06:33 PM";
const endDate = "10 Oct 2024 04:12 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");
const beepSound = document.getElementById("beep-sound");

let intervalID; // Declare intervalID here

function clock() {
    const end = new Date(endDate);
    
    // Check if end is a valid date
    if (isNaN(end.getTime())) {
        console.error("Invalid endDate:", endDate);
        clearInterval(intervalID); // Stop interval if endDate is invalid
        return;
    }

    const now = new Date();

    // Calculate the difference in seconds
    const diff = (end - now) / 1000;

    // Check if the countdown has reached zero or less
    if (diff <= 0) {
        clearInterval(intervalID);
        beepSound.play(); // Play the beep sound
        return;
    }

    // Update input fields with countdown values
    inputs[0].value = Math.floor(diff / (60 * 60 * 24)); // Days
    inputs[1].value = Math.floor(diff / 3600) % 24;      // Hours
    inputs[2].value = Math.floor(diff / 60) % 60;        // Minutes
    inputs[3].value = Math.floor(diff) % 60;             // Seconds
}

// Initial call to clock function
clock();

// Set interval to call clock function every second
intervalID = setInterval(clock, 1000);

