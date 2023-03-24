const { default: test } = require('node:test')
const maskify = require('./exercicio1/exercicio1.ts')
const updateData = require('./exercicio2/exercicio2.ts')
const getRickAndMortyCharacters = require('./exercicio3/exercicio3.ts')
const checkIfTheFirstLetterIsUppercase = require('./exercicio4/exercicio4.ts')

const testSampleMaskify = [
    "123",
    "1234",
    "2134213443219999",
    "abcdefgh",
    "abc",
    ""
]
console.log("MASKIFY\n")
testSampleMaskify.forEach((input) => {
    console.log(input + ": " + maskify(input))
})

const testSampleUpdateData = [
    // Objeto 2 não possui campos do objeto 1
    [
        { name: "Marcos", country: "Brasil", age: 22 },
        { price: 89.9, amount: 15, description: "camiseta 100% algodão" }
    ],

    // Objeto 2 é vazio 
    [
        { name: "Marcos", country: "Brasil", age: 22 },
        {}
    ],

    // Objeto 2 possui alguns campos do objeto 1
    [
        { name: "Marcos", country: "Brasil", age: 22 },
        { name: "Bonaparte" }
    ],

    // Objeto 2 possui todos campos do objeto 1
    [
        { name: "Marcos", country: "Brasil", age: 22 },
        { name: "Bonaparte", country: "França", age: 40 }
    ],
]

console.log("UPDATEDATA\n")
testSampleUpdateData.forEach((pair) => {
    console.log(updateData(pair[0], pair[1]));
})

    ; (async () => {
        console.log("RICKANDMORTYAPI\n");
        const personagens = await getRickAndMortyCharacters();
        console.log(personagens);

    })()

 const testSampleUpperCase = ["", "É maiuscula","Maiúscula","minúscula","não é maiúscula", undefined, null]

console.log("ISUPPERCASE\n");
testSampleUpperCase.forEach((input) => {
    console.log(input + ": " +checkIfTheFirstLetterIsUppercase(input))
})

