import { Cliente } from './7Cliente';

export class Projeto {
    private _titulo: string;
    private _descricao: string;
    private _cliente: Cliente;
    private _concluido: boolean;

    constructor(titulo: string, descricao: string, cliente: Cliente) {
        this._titulo = titulo;
        this._descricao = descricao;
        this._cliente = cliente;
        this._concluido = false;
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

    getCliente(): Cliente {
        return this._cliente;
    }

    marcarConcluido(): void {
        this._concluido = true;
    }

    isConcluido(): boolean {
        return this._concluido;
    }
}