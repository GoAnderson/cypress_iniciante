// exercico 1, Estrutura de repeticao

// percorrer uma lista de nomes:
// Eduardo, Maria, Fernando, joao e Francisco

const nomes = ['Eduardo', 'Maria', 'Fernando', 'Joao', 'Frandcisco']

// for(let indice = 0; indice < nomes.length; indice++){
//     console.log('Execucao: ' + [indice + 1])
//     console.log(nomes[indice])
//     console.log('--------------------')
// }

nomes.forEach((nome, indice) => {
    console.log('Execute: ' + [indice + 1])
    console.log('Nome: ' + nome)
})
