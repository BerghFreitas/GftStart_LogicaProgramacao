// Classe que representa um herói
class Heroi {
constructor(nome, idade, tipo) {
	this.nome = nome;
	this.idade = idade;
	this.tipo = tipo;
}

// Método para o ataque
atacar() {
	let ataque; // Usando var para simplicidade

	// Decisão simples para determinar o ataque
	if (this.tipo === 'mago') {
	ataque = 'usou magia';
	} else if (this.tipo === 'guerreiro') {
	ataque = 'usou espada';
	} else if (this.tipo === 'monge') {
	ataque = 'usou artes marciais';
	} else if (this.tipo === 'ninja') {
	ataque = 'usou shuriken';
	} else {
	ataque = 'usou um ataque desconhecido';
	}

	// Exibe a mensagem de ataque
	console.log('O '+ this.nome +" "+ this.tipo + ' atacou usando ' + ataque);
}
}

// Criando heróis
let mago = new Heroi('Gandalf', 150, 'mago');
let guerreiro = new Heroi('Conan', 35, 'guerreiro');
let monge = new Heroi('Bruce Lee', 32, 'monge');
let ninja = new Heroi('Ryu Hayabusa', 29, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
