class Carro {

    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao(): void{
        console.log(`Carro modelo ${this.modelo}, marca ${this.marca} e ano ${this.ano}.`);
    }

}

const carro = new Carro("Ford","ka",2019);
carro.descricao();




//2






class Retangulo {

    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea(): number {
        let area = this.largura * this.altura;
        return area;
    }

    resultado(): void {
        console.log(`A área do retãngulo é de ${this.calculaArea()}m²`)
    }
}

const retangulo = new Retangulo(2,5);
retangulo.resultado();





//3





class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
    

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
         
    }

    AumentoSalario(porcentual: number): void{
       this.salario += this.salario * (porcentual / 100);
    }
 } 

const funcionario = new Funcionario("Victor", "Desenvolvedor", 4500);
console.log(`Salario antes do aumento R$ ${funcionario.salario}`);
funcionario.AumentoSalario(10);
console.log(`Salario após o aumento de 10%: R$ ${funcionario.salario}`);