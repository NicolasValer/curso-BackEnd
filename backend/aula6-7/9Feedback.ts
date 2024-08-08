import { Cliente } from './7Cliente';
import { Projeto } from './8Projeto';

export class Feedback {
    private _cliente: Cliente;
    private _projeto: Projeto;
    private _comentario: string;
    private _nota: number;

    constructor(cliente: Cliente, projeto: Projeto, comentario: string, nota: number) {
        this._cliente = cliente;
        this._projeto = projeto;
        this._comentario = comentario;
        this._nota = nota;
    }

    getCliente(): Cliente {
        return this._cliente;
    }

    getProjeto(): Projeto {
        return this._projeto;
    }

    getComentario(): string {
        return this._comentario;
    }

    setComentario(comentario: string): void {
        this._comentario = comentario;
    }

    getNota(): number {
        return this._nota;
    }

    setNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this._nota = nota;
        } else {
            throw new Error("A nota deve estar entre 0 e 10.");
        }
    }
}