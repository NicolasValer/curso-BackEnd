interface Animal1 {

    nome: string;
    mover(): void;
}

interface Felino {

    arranha(): void;
    miar(): void;

}

class Leao implements Animal1, Felino {

    nome: string 

    constructor(nome: string) {
        this.nome = nome;
    }
    

    mover(): void {
        console.log("Andando");
    }

    arranha(): void {
        console.log("arranhando");
    }


    miar(): string {
        return "Miau";
    }
}

const leao = new Leao("Alex");



//1




class Personagem {

    private _nome: string;
    private _vida: number;
    private _ataque: number;


    constructor(nome: string, vida: number, ataque: number) {
        this._nome = nome
        this._vida = vida
        this._ataque = ataque
    }

    get nome ()  {
        return this._nome;
    }

    set nome(nome:string)  {
        this._nome = nome
    }

    get vida ()  {
        return this._vida;
    }

    set vida(vida:number)  {
        this._vida = vida
    }

    get ataque ()  {
        return this._ataque;
    }

    set ataque(ataque:number)  {
        this._ataque = ataque
    }

    atacar(): void {
        console.log(`O ${this._nome} deu um ataque de ${this._ataque} de força!`)
    }

}

class Guerreiro extends Personagem {

    golpeDuplo(): void {

      console.log(`O ${this.nome} ultilizou o golpe duplo que causa ${this.ataque * 1,5} de dano!`)
    }
}

class Mago extends Personagem {

    bolaDeFogo(): void {

        console.log(`O ${this.nome} ultilizou o ataque Bola de Fogo que causa ${this.ataque} dano em área!`)
    }
}

class Arqueiro extends Personagem {

    ataquePreciso(): void {

        console.log(`O ${this.nome} ultilizou o Ataque Preciso que da um dano critico de ${this.ataque * 2}!`)
    }

}

const guerreiro = new Guerreiro("Guerreiro", 19, 5)

const mago = new Mago("Mago",13, 7)

const arqueiro = new Arqueiro("Arqueiro", 11, 9)

guerreiro.atacar();
mago.atacar();
arqueiro.atacar();

guerreiro.golpeDuplo();
mago.bolaDeFogo();
arqueiro.ataquePreciso();               
