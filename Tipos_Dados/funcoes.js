// //funções declaradas 

// //sem parametros
// function macaco() {
    
//     console.log("Aprendendo funcoes!");
// }

// macaco();

// //com parametros
// function nome(texto) {
    
//     console.log(`OLA MEU NOME É ${texto}`);
// }

// nome('bruno')

// //função com mais de um parametro
// function somar(num1, num2) {
    
//    return num1 + num2
// }

// somar(10,10)

// //usando funçoes como parametro
// function multiplicar(num1, num2) {
    
//     return num1 * num2
// }

// console.log(multiplicar(somar(3,3), somar(7,5)));

// // função com retorno 
// function subtrair() {
    
//     const subtracao = 10 - 3

//     return subtracao
// }

// console.log(subtrair());

// // explicando a posiçao dos parametros
// function info(nome, idade) {
    
//     return `Meu nome é ${nome}` + ` minha idade é ${idade}`
// }

// //posição correta
// console.log(info("Bruno Gomes", 40));

// //posição errada
// console.log(info(40, "Bruno Gomes", ));

// /*---------------------------------------------------------------------------------------------------------------------------------------------------*/

// //Expressão de função


// const soamndo = function(numero1, numero2){ return numero1 + numero2}

// console.log(soamndo(5,2));

// //Arrow function

// // com parametro
// const funcaoSeta = nome => `Ola meu nome é ${nome}`

// console.log(funcaoSeta());

// //com mais de um parametro
// const outraSoma = soma => (num1, num2) => {num1 + num2}

// console.log(outraSoma(4,3));


//crie uma função usando arrow fuction que compara dois parametros, se o primeiro parametro for maior que 15 ou o segundo tambem tbm for maior que 15 
//a função devera retornar o valor e a seguinte mensagem "somentes numeros de 1 a 14" quanso isso nao seja verdadeiro  some os dois parametros 

const somarMensagem = (param1, param2) => {
    if (param1 > 15 || param2 > 15) {
      return `${param1} e ${param2} - somente números de 1 a 14`;
    } else {
      return param1 + param2;
    }
  };
  
  console.log(somarMensagem(10, 5));  
console.log(somarMensagem(20, 10)); 
