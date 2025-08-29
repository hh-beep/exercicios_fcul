// -- Exercicio 1 --
const infosCarro = {
 marca: "Renaut",
 modelo: "Kwid",
 ano: 2007,
}

console.log(infosCarro) //                              Console do objeto
console.log(Object.values(infosCarro)); //              Console do Obj sendo array
//                                                      o Object.values transforma o Objeto {} em um Array [] 
//                                                      contendo somente os valores das propiedades





// -- Exercicio 2 --
infosCarro.cor = "Kwid no asfalto antena pro alto"; //  Ao colocar o .novaPropiedade, vc ja, automaticamente, 
//                                                      aloca uma nova propiedade ao objeto

delete infosCarro.ano; //                               a funcao delete deleta uma propiedade do objeto

console.log(infosCarro);





// -- Exercicio 3 --
const pessoa = {
 nome: "Daniela",
 idade: 19,
};

const apresentar = (name, age) => {
 return console.log(`Olá, meu nome é ${name} e tenho ${age} anos.`)
}

apresentar(pessoa.nome, pessoa.idade);





// -- Exercicio 4 --
const alunos = [
 { nome: "Daniela", idade: 19, curso: "ADS" },
 { nome: "Christina", idade: 19, curso: "ENG" },
 { nome: "Lucas", idade: 18, curso: "ENG" }
]

console.log( alunos[0].nome, alunos[2].curso );





// -- Exercicio 5 --
const produto = {
    nome: "Pao de Batata",
    preco: 9.99,
    estoque: 99,
}

const alterations = () => {
    console.log("Preco original", produto.preco);
    console.log("Mudando...");

    produto.preco -= 8.99;
    produto.estoque--;

    console.log("Novo preco", produto.preco);
    console.log("Novo estoque", produto.estoque);


    return console.log("Bruh")
}

alterations();