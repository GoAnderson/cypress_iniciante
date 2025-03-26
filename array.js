const paises = ['Brasil','Holanda']

console.log('Acessando o pais: ' + paises[1])

console.log(paises.length) // tamanho do array

// Operacoes com array

paises.push('México') // adiciona no final array
paises.pop() // remove último elemento
paises.unshift('México')
paises.shift()

console.log(paises)