const { question } = require("readline-sync");
var input = require("readline-sync");

//Coleção de objetos de salário e ano

var salario_minimo = [
    { ano: '2010', salario: 510, inflacao: 5.91 },

    { ano: '2011', salario: 545, inflacao: 6.50},

    { ano: '2012', salario: 622, inflacao: 5.84 },

    { ano: '2013', salario: 678, inflacao: 5.91 },

    { ano: '2014', salario: 724, inflacao: 6.41 },

    { ano: '2015', salario: 788, inflacao: 10.67 },

    { ano: '2016', salario: 880, inflacao: 6.29 },

    { ano: '2017', salario: 937, inflacao: 2.95 },

    { ano: '2018', salario: 954, inflacao: 3.75 },

    { ano: '2019', salario: 998, inflacao: 4.31 },

    { ano: '2020', salario: 1045, inflacao: 5.52 }
];


// Opção de escolha do cliente

let escolha = input.question(`Escolha uma das alternativas:

1 - Listar os salários minímos de 2010 á 2020
2 - Listar o índice IPCA de 2010 à 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA

Digite o número da sua escolha: `)


//Caso deseje a primeira opção

if (escolha == 1) {
    for (let dados of salario_minimo) {
        let ano = dados.ano;
        let salario = dados.salario;


        console.log(`Ano: ${ano.padStart(30, '.')}
Salário Mínimo R$: ${String(salario).padStart(15, '.')},00

`);
    };
}

//Caso deseje a segunda opção

else if (escolha == 2) {
    for(let dados of salario_minimo){
        let ano = dados.ano;
        let inflacao = String(dados.inflacao)
        
        inflacao = inflacao.replace(".", ",");
        

        console.log(`Ano:${ano.padStart(30, '.')}
Inflação IPCA:${inflacao.padStart(20, '.')}%

`)
    }
}

//Caso deseje a terceira opção

else if(escolha == 3){
    for(let contador = 0; contador < salario_minimo.length; contador++){

        let ano = salario_minimo[contador].ano;
        let salario = String(salario_minimo[contador].salario);
        let inflacao = String(salario_minimo[contador].inflacao);


        if(contador != 0){
            var diferenca = salario_minimo[contador].salario - salario_minimo[contador - 1].salario;
            var crescimento = ((diferenca / salario_minimo[contador - 1].salario) * 100).toFixed(2)
        }

        else{
            diferenca = 0
        }

        crescimento = String(crescimento).replace('.', ',');
        inflacao = inflacao.replace(".", ",");


        console.log(`Ano: ${ano.padStart(30 , '.')}
Salário Mínimo R$: ${salario.padStart(16 , '.')},00
Crescimento Salarial: ${(diferenca !=0) ? crescimento.padStart(13 , '.') : "-"}%
Inflação: ${inflacao.padStart(25, '.')}%

`)
    } 
}

//Caso tenha digitado um caracter fora das opções

else{
    console.log("Opção inválida!!!")
}