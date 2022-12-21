/* Un maestro desea saber que porcentaje de hombres y 
el porcentaje de mujeres que hay en un grupo de estudiantes. */

//Entrada
let cant_mujeres;
let cant_hombres;
let porcentaje_hombres = 0;
let porcentaje_mujeres = 0;
let totalgrupo = 0;

cant_mujeres = Number(prompt("Ingrese la cantidad de mujeres que hay en el grupo"));
cant_hombres = Number(prompt("Ingrese la cantidad de hombres que hay en el grupo"));

//Proceso
totalgrupo = cant_mujeres + cant_hombres;
porcentaje_mujeres = ((cant_mujeres / totalgrupo) * 100);
porcentaje_hombres = ((cant_hombres / totalgrupo) * 100);

//Salida
console.log("El total del grupo" + totalgrupo);
console.log("El porcentaje de mujeres es: " +  Math.round(porcentaje_mujeres));
console.log("El porcentaje de hombres es: " +  Math.round(porcentaje_hombres));
