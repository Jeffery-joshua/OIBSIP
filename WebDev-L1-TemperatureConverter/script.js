function convertTemp() {

    let temp = parseFloat(document.getElementById("temperature").value);

    let from = document.getElementById("fromUnit").value;

    let to = document.getElementById("toUnit").value;

    let output = document.getElementById("output");

    // Input Validation
    if (isNaN(temp)) {

        output.innerHTML = "⚠ Please enter a valid temperature.";

        return;

    }

    // Absolute Zero Validation
    if ((from === "C" && temp < -273.15) ||
        (from === "F" && temp < -459.67) ||
        (from === "K" && temp < 0)) {

        output.innerHTML = "❌ Temperature cannot be below absolute zero.";

        return;

    }

    let result;

    // Same Unit
    if (from === to) {

        result = temp;

    }

    // Celsius
    else if (from === "C") {

        if (to === "F") {

            result = (temp * 9 / 5) + 32;

        }

        else {

            result = temp + 273.15;

        }

    }

    // Fahrenheit
    else if (from === "F") {

        if (to === "C") {

            result = (temp - 32) * 5 / 9;

        }

        else {

            result = ((temp - 32) * 5 / 9) + 273.15;

        }

    }

    // Kelvin
    else if (from === "K") {

        if (to === "C") {

            result = temp - 273.15;

        }

        else {

            result = ((temp - 273.15) * 9 / 5) + 32;

        }

    }

    output.innerHTML = result.toFixed(2) + " °" + to;

}

function resetFields() {

    document.getElementById("temperature").value = "";

    document.getElementById("fromUnit").selectedIndex = 0;

    document.getElementById("toUnit").selectedIndex = 0;

    document.getElementById("output").innerHTML = "--";

}