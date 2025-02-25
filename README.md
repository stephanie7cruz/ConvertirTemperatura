Pseudocódigo
Inicio
   Definir celsius como número
   Hacer
      Mostrar "Ingrese la temperatura en grados Celsius:"
      Leer celsius
      Si celsius no es un número
         Mostrar "Error: Debe ingresar un número válido."
   Mientras celsius no sea un número

   kelvin ← celsius + 273.15
   fahrenheit ← (celsius × 9/5) + 32

   Mostrar "Grados Kelvin: ", kelvin
   Mostrar "Grados Fahrenheit: ", fahrenheit
Fin
