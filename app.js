function convertTemperature() {
    // Get the input values
    const temp = document.getElementById("temp").value;
    const unit = document.getElementById("unit").value;
    
    // Convert the temperature based on the selected unit
    let result;
    if (unit === 'C') {
      // Convert Celsius to Fahrenheit
      result = (temp * 9/5) + 32;
      result = `${temp} &#8451; = ${result.toFixed(2)} &#8457;`;
    } else if (unit === 'F') {
      // Convert Fahrenheit to Celsius
      result = (temp - 32) * 5/9;
      result = `${temp} &#8457; = ${result.toFixed(2)} &#8451;`;
    } else if (unit === 'K') {
      // Convert Kelvin to Celsius
      result = temp - 273.15;
      result = `${temp} K = ${result.toFixed(2)} &#8451;`;
    } else {
      // Invalid unit
      result = "Invalid unit";
    }
    
    // Display the result
    document.getElementById("result").innerHTML = result;
  }
  