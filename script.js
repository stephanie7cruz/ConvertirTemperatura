function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;

    // Convertir a número
    celsius = Number(celsius);

    // Validar si es un número
    if (isNaN(celsius)) {
        alert("Error: Debe ingresar un número válido.");
        return;
    }

    // Realizar conversiones
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    // Mostrar resultados en el DOM
    document.getElementById("resultado").innerHTML = 
        `Grados Kelvin: ${kelvin.toFixed(2)}<br>Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
