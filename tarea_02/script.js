/* Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
Para cada pedido tiene que proporcionar las medidas de la tela en pulgadas, pero ella 
generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, 
determinando cuántas pulgadas debe pedir con base en los metros que requiere.
 (1 pulgada = 0.0254 m).  */


//Entrada

let medida_metro;
let medida_pulgada = 0;
let pulgada= 0.0254;

medida_metro = Number(prompt("Ingrese la cantidad de metros de tela que requiere"));

//Proceso
medida_pulgada = (medida_metro *1)/pulgada;


//Salida
console.log("Debes pedir en pulgadas:" + medida_pulgada);
