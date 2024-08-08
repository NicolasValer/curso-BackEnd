import { Freelancer } from './2Freelancer';

export class Projeto {
    private _titulo: string;
    private _descricao: string;
    private _freelancer: Freelancer | null;

    constructor(titulo: string, descricao: string) {
        this._titulo = titulo;
        this._descricao = descricao;
        this._freelancer = null;
    }

    getTitulo(): string {
        return this._titulo;
    }

    setTitulo(titulo: string): void {
        this._titulo = titulo;
    }

    getDescricao(): string {
        return this._descricao;
    }

    setDescricao(descricao: string): void {
        this._descricao = descricao;
    }

    atribuirFreelancer(freelancer: Freelancer): void {
        this._freelancer = freelancer;
    }

    desatribuirFreelancer(): void {
        this._freelancer = null;
    }
}