//var: global 

/* Expliação: Funciona globalmente, ou seja, eu posso declarar a variavel em qualquer parte do meu codigo*/ 

exemplo2 = 20

console.log(exemplo2)

var exemplo2

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/

//let 

/* Explicação: As variaveis let não podem ser usadas antes de serem declaradas, pois seu escopo não permite serem elevadas ao topo */

let exemplo3
exemplo3 = 15

console.log(exemplo3)

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/

//const 

/* Explicação: As declarações const não podem ser reatribuidas apois a atribuição inicial e deve ser inicializada na mesma linha que foi declarada */

const status = 'ALUNO APROVADO'

const nota1 = 7
const nota2 = 4

let aprovacao

if (status === 'ALUNO APROVADO' ) {
    
    aprovacao = nota1 + nota2
    console.log("Parabens voce foi aprovado")
}
