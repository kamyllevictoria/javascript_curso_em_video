let pessoa = {name: 'Ana',
sexo: 'Feminino',
peso: 85.4,
engordar(p=0){
    if (p > 5){
        console.log('Engordou')
    }

    this.peso += p
}
}
pessoa.engordar(6)
console.log(`Minha amiga ${pessoa.name} possui ${pessoa.peso} kg`)