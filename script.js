let celciusInput = document.querySelector('.celsius > input')
let fahrenheitInput = document.querySelector('.fahrenheit > input')
let kelvinInput = document.querySelector('.kelvin > input')

let btn = document.querySelector('.button button')

console.log(celciusInput);

function roundNumber(number){
    return Math.round(number*100)/100;
}

/* Celsius to Kelvin and Farhenheit */
celciusInput.addEventListener('input',function()
{
    let cTemp = parseFloat(celciusInput.value)
    let kTemp = cTemp + 273.15
    let fTemp = (cTemp*(9/5)) + 32

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    // kelvinInput.value = null
})

/* Fahrenheit to Celsius and Kelvin */

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp*(9/5)) + 32
    let kTemp = fTemp + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/* Kelvin to Celsius and Farhenheit */

celciusInput.addEventListener('input', function(){
    let kTemp = parseFloat(celciusInput.value)
    let cTemp = (kTemp*(9/5)) + 32
    let fTemp = kTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)
})

// -----------------------------------------------------------------------------------------------------------------

