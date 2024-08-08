class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá! sou o ${this.nome} e tenho ${this.idade} anos`);
    }

    trabalhar(){
        console.log(`Estou trabalhando de ${this.cargo}`);
    }

}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`Estou gerenciando o departamento de ${this.departamento}`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`Estou programando em ${this.linguagem}`);
    }

}
// sda
var d1 = new Desenvolvedor("Matheus",22, "Desenvolvedor", "Java");
var g1 = new Gerente("Carlos",18,"Gerente","Vendas");
console.log(d1,g1);

d1.seApresentar();
d1.trabalhar();
d1.programar();

g1.seApresentar();
g1.trabalhar();
g1.gerenciar();