class pessoa  {
	nome;
	idade;                   // class
	
	apresentacao (){
		console.log(`meu nome é ${this.nome} e tenho ${this.idade} de idade`) //metodo
		}
}
		
		const bergh = new pessoa();
		bergh.nome = 'aldembergue a. freitas';
		bergh.idade = 30;                               //instancia
		
		
		const joao= new pessoa();
		joao.nome = 'joao a. freitas';                    //instancia
		joao.idade = 16; 
		
		const pedro = new pessoa();
		pedro.nome = 'pedro a. freitas';                   //instancia
		pedro.idade = 36; 
        
        bergh.apresentacao();
        joao.apresentacao();
        pedro.apresentacao();
        
        // mosta no console: meu nome é aldembergue a. freitas e tenho 30 de idade
        // mosta no console: meu nome é joao a. freitas e tenho 16 de idade
        // mosta no console: meu nome é pedro a. freitas e tenho 36 de idade