class Animal {

    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    dormir(){
        console.log(`${this.nome} está dormindo`);
    }

    mover() {
        console.log(`${this.nome} está se movendo`);
    }
}

class Gato extends Animal {

    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome,idade);
        this.raca = raca;
    }

    miar() {
        console.log(`${this.nome} está miando.`)
    }

}

class Peixe extends Animal {

    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    nadar() {
        console.log(`${this.nome} está nadando`)
    }
}



const gato = new Gato("Luke", 5, "Siamês");

gato.miar();
gato.mover();
gato.dormir();


const animal = new Animal("Rodolfo", 5);





//1


class Humano {

    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    apresentacao() {
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }


}

class Aluno extends Humano {

    curso: string

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    estuda() {
        console.log(`O ${this.nome} está estudando para o curso de ${this.curso} `)
    }
}

const aluno = new Aluno ("Nicolas", 16, "backend");

aluno.apresentacao();
aluno.estuda();


//2


class Veiculo {

    marca: string;
    ano: number;

    constructor(marca:string, ano: number) {
        this.marca = marca
        this.ano = ano
    }

    info() {
        console.log(`O veiculo ${this.marca} ${this.ano} está disponivel em nossa concessionária.`)
    }

}

class Carro1 extends Veiculo {

    modelo: string

    constructor(marca: string, ano: number, modelo: string) {
        super(marca, ano);
        this.modelo = modelo
    }

    detalhes() {
        console.log(`Em nossa concessionária temos um ${this.marca} ${this.modelo} ano ${this.ano}`)
    }
}

const carro1 = new Carro1 ("mitsubishi", 1998, "eclipse" )

carro1.info();
carro1.detalhes();


class Empregado {

    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }

    trabalhar() {
        console.log(`O ${this.nome} está trabalhando.`)
    }
}

class Gerente extends Empregado {

    departamento: string;


    constructor(nome: string, salario: number, departamento: string) {
        super(nome, salario);
        this.departamento = departamento
    }

    supervisionar() {
        console.log(`O gerente está supervisionando o departamento de ${this.departamento}`)
    }
    
    trabalhar(): void {
        console.log(`O ${this.nome} está trabalhando no departamento de ${this.departamento}`)
    }
}

const empregado = new Gerente("Nicolas", 3865, "contabilidade");

empregado.supervisionar();
empregado.trabalhar();