const nomes = ['Eduardo', 'Maria', 'Fernando', 'Joao', 'Frandcisco']

nomes.forEach((nome, indice) =>{
    console.log('Numero da execucao: ', indice + 1)
    console.log('Nome:', nome)
    
    if (nome == 'Maria'){
        console.log('Esse eh o nome procurado:')
        console.log('------------------------')
    } else {
        console.log('Esse nao eh o nome procurado:')
        console.log('------------------------')
    }
})