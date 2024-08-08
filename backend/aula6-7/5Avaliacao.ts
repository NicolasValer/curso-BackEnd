import { IAvaliavel } from './4Avaliavel';
import { Freelancer } from './2Freelancer';
import { Projeto } from './3Projeto';

export class Avaliacao implements IAvaliavel {
    private freelancer: Freelancer;
    private projeto: Projeto;
    private nota: number

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        if (nota < 0 || nota > 10) {
            throw new Error("Nota precisa ser entre 0 e 10")
        } else {
            this.freelancer = freelancer;
            this.projeto = projeto;
            this.nota = nota;
        }

    }

    avaliar(): void {
        console.log(`Avaliação para o freelancer ${this.freelancer.getNome()}:`);
        console.log(`Projeto: ${this.projeto.getTitulo()}`);
        console.log(`Nota: ${this.nota}`);
    }
}

