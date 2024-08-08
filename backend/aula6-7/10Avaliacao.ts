import { IAvaliavel } from './4Avaliavel';
import { Freelancer } from './2Freelancer';
import { Projeto } from './8Projeto';
import { Feedback } from './9Feedback';

export class Avaliacao implements IAvaliavel {
    private _freelancer: Freelancer;
    private _projeto: Projeto;
    private _nota: number;
    private _feedback: Feedback | null;

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        this._freelancer = freelancer;
        this._projeto = projeto;
        this._nota = nota;
        this._feedback = null;
    }

    adicionarFeedback(comentario: string, nota: number): void {
        if (this._projeto.isConcluido()) {
            const cliente = this._projeto.getCliente();
            this._feedback = new Feedback(cliente, this._projeto, comentario, nota);
        } else {
            throw new Error("Não é possível adicionar feedback a um projeto não concluído.");
        }
    }

    avaliar(): void {
        if (this._projeto.isConcluido()) {
            console.log(`Avaliação para o freelancer ${this._freelancer.getNome()}:`);
            console.log(`Projeto: ${this._projeto.getTitulo()}`);
            console.log(`Nota: ${this._nota}`);
            if (this._feedback) {
                console.log(`Feedback do cliente ${this._feedback.getCliente().getNome()}:`);
                console.log(`Comentário: ${this._feedback.getComentario()}`);
                console.log(`Nota: ${this._feedback.getNota()}`);
            }
        } else {
            throw new Error("O projeto deve estar concluído para poder ser avaliado.");
        }
    }
}