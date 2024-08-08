import { Pessoa } from './1Pessoa';
import { Projeto } from './3Projeto';

export class Freelancer extends Pessoa {
    private _areaDeEspecializacao: string;
    private _projetos: Projeto[];

    constructor(nome: string, email: string, areaDeEspecializacao: string) {
        super(nome, email);
        this._areaDeEspecializacao = areaDeEspecializacao;
        this._projetos = [];
    }

    getAreaEsoecializacao(): string {
        return this._areaDeEspecializacao;
    }
    
    setAreaEsoecializacao(areaDeEspecializacao: string): void {
        this._areaDeEspecializacao = areaDeEspecializacao
    }
    
    adicionarProjeto(projeto: Projeto): void {
        this._projetos.push(projeto);
    }

    removerProjeto(projeto: Projeto): void {
        let index = this._projetos.indexOf(projeto);
        this._projetos.splice(index, 1);
    }

    getProjetos(): void {
        this._projetos.forEach(p => console.log(p.getTitulo()));
    }

    obterTipo(): string {
        return "Freelancer";
    }
}
