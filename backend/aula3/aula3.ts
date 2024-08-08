class Pessoa {

    public nome: string;
    private _cpf: string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf ()  {
        return this._cpf;
    }

    set cpf(cpf:string)  {
        this._cpf = cpf;
    }
}    

const pessoa = new  Pessoa("Nicolas","000.000.000-00");
console.log(pessoa.cpf);
pessoa.cpf = "123.456.789-01";
console.log(pessoa.cpf);


//2



class ContaBancaria1 {

    private _saldo: number;

    constructor(saldo: number) {
        this._saldo = saldo
    }
    get saldo ()  {
        return this._saldo;
    }

    set saldo(saldo:number)  {
        this._saldo = saldo;

    }

    depositar(depositar: number): void{
        this.saldo = this.saldo + depositar
    }


    sacar(sacar: number): void{
        this.saldo = this.saldo - sacar;
    }

    
}



const contaBancaria = new ContaBancaria1(333.33)
console.log(`O saldo antes de sacar é de ${contaBancaria.saldo}`)
contaBancaria.depositar(32)
console.log(`O saldo após ganhar 32$ é de ${contaBancaria.saldo}`)
contaBancaria.sacar(1000)
console.log(`O saldo atual da conta é de ${contaBancaria.saldo}`)


// class ContaBancaria {


//     // Propriedade privada para armazenar o saldo
//     private _saldo: number;

//     // Construtor que inicializa o saldo com o valor passado como argumento
//     constructor(saldo: number) {
//         this._saldo = saldo;
//     }

//     // Getter para obter o saldo
//     get saldo() {
//         return this._saldo;
//     }

//     // Setter privado para definir o saldo
//     private set saldo(novoSaldo: number) {
//         this._saldo = novoSaldo;
//     }

//     // Método para realizar um depósito
//     realizarDeposito(valor: number): void {
//         if(valor < 0) {
//             console.log("Impossível sacar um valor negativo");
//         } else {
//             let saldoAtual = this.saldo + valor;
//             this.saldo = saldoAtual;
//         }

//         let saldoAtual = this.saldo + valor;
//         this.saldo = saldoAtual;
//     }

//     // Método para realizar um saque
//     realizarSaque(valor: number): void {
//         if (valor > this.saldo) {
//             console.log("Impossível sacar, você não tem saldo suficiente");
// class ContaBancaria {
//         }
//     }

//     transferencia(valor: number, recebedor: ContaBancaria): void {
//     // Método para realizar uma transferência para outra conta bancária
//     realizarTransferencia(valor: number, recebedor: ContaBancaria): void {
//         if (valor > this.saldo) {
//             console.log("Impossível transferir, você não tem saldo suficiente");
//         } else if(valor < 0) {
// class ContaBancaria {
//             let saldoAtual = this._saldo - valor;
//             this.saldo = saldoAtual;
//             recebedor.realizarDeposito(valor);
//             console.log('Transferência realizada com sucesso!');
//             console.log(`Transferência no valor de R$${valor.toFixed(2)} realizada com sucesso!`);
//         }        
//     }

//     // Método para exibir o saldo atual
//     exibirSaldo() {
//         console.log(`Seu saldo atual é de: R$${this.saldo}`);
//     }

// }

// // Criação de duas contas bancárias com saldos iniciais
// const conta1 =  new ContaBancaria(1000);
// const conta2 = new ContaBancaria(100);

// // Exibição dos saldos antes dos depósitos
// console.log("Saldo antes do depósito");
// conta1.exibirSaldo();
// console.log("---------");
// conta2.exibirSaldo();
// console.log("---------");
// conta1.realizarDeposito(100);
// conta1.exibirSaldo();
// conta1.realizarSaque(100);
// conta1.exibirSaldo();
// console.log("---------");
// console.log("-----------------------");

// // Realização dos depósitos
// conta1.realizarDeposito(1000);
// conta2.realizarDeposito(100);

// // Exibição dos saldos após os depósitos
// console.log("Saldo depois do depósito");
// conta1.exibirSaldo();
// conta2.exibirSaldo();
// conta2.realizarSaque(100);
// console.log("-----------------------");

// // Realização dos saques
// conta1.realizarSaque(500);
// conta2.realizarSaque(50);

// // Exibição dos saldos após os saques
// console.log("Saldo depois do saque");
// conta1.exibirSaldo();
// conta2.exibirSaldo();
// console.log("---------");
// console.log("-----------------------");

// // Realização das transferências
// conta1.realizarTransferencia(500, conta2);
// conta2.realizarTransferencia(50, conta1);

// conta1.transferencia(100, conta2);
// // Exibição dos saldos após as transferências
// console.log("Saldo depois da transferência");
// conta1.exibirSaldo();
// conta2.exibirSaldo();
// conta2.exibirSaldo();
// console.log("-----------------------");


class ContaBancaria {

    private _saldo: number ;

    constructor(saldo: number) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    private set saldo(valor: number) {
        this._saldo = valor;
    }

    realizarDeposito(valorDeposito: number) {
        if(valorDeposito > 0) {
            this.saldo += valorDeposito
        }
    }

    realizarSaque(valorSaque: number) {
        if(valorSaque < 0) {
            console.log(`O saque não pode ser realizado, pois o valor é negativo!`);
        }else if (valorSaque > this.saldo){
            console.log(`O saque não pode ser realizado, pois o valor é negativo!`);
        }else {
            this.saldo -= valorSaque;
        }
    }

    realizarTransferencia(valor: number, contaDestino: ContaBancaria) {
        this.realizarSaque(valor);
        if (valor > this.saldo) {
            console.log(`Impossível de realizar a transferencia`)
        }else {
            contaDestino.realizarDeposito(valor);
            console.log(`Transferencia realizada com sucesso, no valor de R$${valor.toFixed(2)}`)
        }
        
    }

    exibirSaldo() {
        console.log(`Saldo atual de R$${this.saldo.toFixed(2)}`)
    }
    // realizarTransferencia(valor: number, contaDestino: ContaBancaria) {
    //     if(valor < 0) {
    //         console.log(`A transferencia não pode ser realizada, pois o valor é negativo!`);
    //     }else if (valor > this.saldo){
    //         console.log(`A transferencia não pode ser realizada, pois o valor é negativo!`);
    //     }else {
    //         this.saldo -= valor;
    //         contaDestino.saldo += valor;
    //     }
    



}


const conta1 = new ContaBancaria(1000);
const conta2 = new ContaBancaria(100);

conta1.exibirSaldo();
conta2.exibirSaldo();

conta1.realizarTransferencia(10000, conta2);

conta1.exibirSaldo();
conta2.exibirSaldo();

conta2.realizarTransferencia(50, conta1);

conta1.exibirSaldo();
conta2.exibirSaldo();

