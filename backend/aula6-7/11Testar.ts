import { Cliente } from './7Cliente';
import { Freelancer } from './2Freelancer';
import { Projeto } from './8Projeto';
import { Avaliacao } from './10Avaliacao';

let cliente1 = new Cliente("Maria", "maria@email.com");
let freelancer1 = new Freelancer("Nicolas", "Nicolas.p.valer@gmail.com", "Desenvolvimento");
let projeto1 = new Projeto("Sistema de Gestão", "Desenvolvimento de um sistema de gestão", cliente1);

projeto1.marcarConcluido();

let avaliacao1 = new Avaliacao(freelancer1, projeto1, 9);
avaliacao1.avaliar();

avaliacao1.adicionarFeedback("Brabo de mais cpx, ótimo trabalho!", 6);
avaliacao1.avaliar();