export abstract class Pessoa {
    private _nome: string;
    private _email: string;

    constructor(nome: string, email: string) {
        this._nome = nome;
        this._email = email;
    }

    getNome(): string {
        return this._nome;  
    }

    setNome(nome: string): void {
        this._nome = nome;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(email: string): void {
        this._email = email;
    }

    abstract obterTipo(): string;
}
