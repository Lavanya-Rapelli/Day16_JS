// Temperature Conversion

// Write two functions named celsiusToFahrenheit and fahrenheitToCelsius to convert between Celsius and Fahrenheit.

// Use the functions to convert a given temperature.

function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius);
}

celsiusToFahrenheit(25); 
fahrenheitToCelsius(77); 
