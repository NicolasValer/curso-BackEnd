
import { Freelancer } from './2Freelancer';
import { Projeto } from './3Projeto';
import { Avaliacao } from './5Avaliacao';


let freelancer1 = new Freelancer("Nicolas", "Nicolas.p.valer@gmail.com", "Desenvolvimento");
let projeto1 = new Projeto("Sistema de Gestão", "Desenvolvimento de um sistema de gestão");

projeto1.atribuirFreelancer(freelancer1);

let avaliacao1 = new Avaliacao(freelancer1, projeto1, 8);
avaliacao1.avaliar();