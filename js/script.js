console.log("Olá mundo!")

//  //Declarar uma variável com a palavra reserva var.
//  var nr1 = 10;
//  var nr2 = 5;

//  //Vamos imprimir as variáveis com o objetivo console. 
//  console.log(nr1);
//  console.log(nr2);

//  //Realizando as operações básicas com estes valores
//  // +, -, * e /

//  // Adição
//  //REALIZE A CONCATENAÇÃO COM O TEXTO RESULTADO:
//  //ex: console.log(RESULTADO nr1 + nr2) 
//  console.log("RESULTADO:", + (nr1 + nr2));
//  console.log("RESULTADO: " + (parseInt(nr1) + parseInt(nr2)));
//  console.log(`RESULTADO : ${parseInt(nr1) + parseInt(nr2)}`);

//  //SUBTRAÇÃO
//  console.log(`RESULTADO SUBTRAÇÃO: ${parseInt(nr1) - parseInt(nr2)}`);

//  //MULTIPLICAÇÃO
//  console.log(`RESULTADO MULTIPLICAÇÃO: ${parseInt(nr1) * parseInt(nr2)}`);

//  //DIVISÃO
//  console.log(`RESULTADO SUBTRAÇÃO: ${parseInt(nr1) / parseInt(nr2)}`);

//  //OBTENHA O RESTO DA DIVISÃO
//  console.log(`RESULTADO DO RESTO DA DIVISÃO: ${parseInt(nr1) % parseInt(nr2)}`)

 //Descobrindo se um número é par ou ímpar 
 //Utilizando operador ternário ( ? )

//  var nr1 = "10"
//  var nr2 = "5"
//  var resultado; 

//  resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "ÍMPAR";
//  console.log(`O número é: ${resultado}`);

//Regras do const 
//Primeira regra = Incializar na declaração 
const nome3 = "Violante";

//Segunda regra = Não pode ser alterado durante o fluxo do programa 
// nome3 = "Jonathan";

//Diferença entre var, let, const
// var nome1 = "Beatriz";
// let nom2 = "Matheus";

// let nome = "Beatriz";

// if (nome == ""){
//     let nome = "Robson"
// }
// //Qual é o nome que será impresso no log? 
// console.log(nome);

//Array e seus métodos

let frutas = ["banana","morango","maçã","carambola","laranja","acerola"];

//Imprimindo o array 
console.log(frutas);
console.table(frutas);
console.log(frutas[4]);

//Adicionar um item ao final do array com método push(item)
frutas.push("melão");
console.log(frutas);

//Adicionar um item ao final do array com método push(item)
frutas.unshift("caju");
console.log(frutas);

//Remover um item do final do array com método pop()
frutas.pop();
console.log(frutas);

//Remover um item do início do array com método shift() 
frutas.shift();
console.log(frutas);

//Para localizar um item dentro do array, utilizamos o método indexOf(itemNome)
// let indice = frutas.indexOf("morango");
// console.log(frutas[indice]);

//Para localizar um item dentro do array, e apagar ele utilizamos o método splice(indice do item)
//e a quantidade de vezes que  indice será removido). 
//Obs: utilize o metodo indexOf(ItemNome) para obter o indice do item
let indice = frutas.indexOf("carambola");
console.log("Fruta que estava no indice antes da remoção: " +frutas[indice]);
frutas.splice(indice,1);
console.log("Fruta que ficou no indice após remoção: " + frutas[indice]);

frutas.forEach( (fruta)=>{
    console.log("olha ele: " + fruta);
} );




