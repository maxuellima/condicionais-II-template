// // LABANK
// // Ifs aninhados
const labank = (idade) => {
idade = prompt("Qual a sua idade?")
    if (idade >= 13) {
        if (idade <= 17) {
            console.log(`A pessoa dependente já pode ter um cartão de crédito vinculado ao seu`);
        } else {
            console.log(`Consulte outras possibilidades do Labank`);
        }
    } else {
        console.log(`Consulte outras possibilidades do Labank`);
    }

    //If com operadores

    if (idade >= 13 && idade <= 17) {
        console.log(`A pessoa dependente já pode ter um cartão de crédito vinculado ao seu`);
    } else {
        console.log(`Consulte outras possibilidades do Labank`);
    }
}
labank(idade)

const contaLabank = confirm("Tem conta no Labank?")

contaLabank ?
    console.log("Boas-vindas ao Labank") :
    console.log("Faça sua conta!")

let cartao;
let seuCartao = Number(prompt(`Digite o número da opção do cartão que deseja: \n1 - Fácil \n2 - Black \n3 - Platinum \n4 - Master Gold`)
)

//SWITCH DO CARTÃO
switch (seuCartao) {
    case 1:
        cartao = "Fácil"
        console.log(`Você escolheu o cartão ${seuCartao}, do ramal ${cartao}`);
        break;
    case 2:
        cartao = "Black"
        console.log(`Você escolheu o cartão ${seuCartao}, do ramal ${cartao}`);
        break;
    case 3:
        cartao = "Platinum"
        console.log(`Você escolheu o cartão ${seuCartao}, do ramal ${cartao}`);
        break;
    case 4:
        cartao = "Master Gold"
        console.log(`Você escolheu o cartão ${seuCartao}, do ramal ${cartao}`);
        break;
    default:
        console.log(`Escolha uma das 4 opções disponíveis!`);
        break;
}
//DIVISÍVEL POR 2 E POR 3

const divisivel = Number(prompt("Insira um número: "))

if (divisivel % 2 === 0) {
    if (divisivel % 3 === 0) {
        console.log(`${divisivel} é divisível por 2 e por 3`)
    } else {
        console.log(`${divisivel} não é divisível por 2 e 3 simultaneamente.`)
    }
} else {
    console.log(`${divisivel} não é divisível por 2 e 3 simultaneamente.`)
}

// If com operadores
if (divisivel % 2 === 0 && divisivel % 3 === 0) {
    switch (divisivel) {
        case 6:
            console.log(`${divisivel} é divisível por 2 e 3.`);
            break;
        case 12:
            console.log(`${divisivel} é divisível por 2 e 3`);
            break;
        case 18:
            console.log(`${divisivel} é divisível por 2 e 3`);
            break;

        case 24:
            console.log(`${divisivel} é divisível por 2 e 3`);
            break;

        case 30:
            console.log(`${divisivel} é divisível por 2 e 3`)
            break;
        default:
            console.log(`O número ${divisivel} é maior que 30 ou menor que 6`)
    }
// IF ternário
    divisivel === 30 ?
    console.log("ufa, acertei!".toLocaleUpperCase()):
    console.log("Não foi dessa vez!")
    console.log(`${divisivel} é divisível por 2 e por 3`)
} else {
    console.log(`${divisivel} não é divisível por 2 e 3 simultaneamente. `)
}