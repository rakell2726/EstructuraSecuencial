/* Un estudiante desea saber cual será su calificación final en la materia de Algoritmos. 
Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final  */


//Entrada

let nota1,nota2,nota3;
let nota_exf;
let nota_wf;
let calificacion_final = 0;
let promedio = 0;

nota1 = Number(prompt("Ingrese nota uno"));
nota2 = Number(prompt("Ingrese nota 2"));
nota3 = Number(prompt("Ingrese nota 3"));
nota_exf = Number(prompt("Ingrese nota del examen final"));
nota_wf = Number(prompt("Ingrese nota del trabajo final"));

//Proceso
promedio = (nota1+nota2+nota3)/3;
calificacion_final = ((promedio*0.55)+(nota_exf*0.30)+(nota_wf*0.15)) 


//Salida
console.log(" la calificación final en la materia de Algoritmos es:" + calificacion_final);