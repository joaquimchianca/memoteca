import { Component } from '@angular/core';
import { Pensamento } from '../IPensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 9,
    conteudo: "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.",
    autoria: "Miyamoto Musashi",
    modelo: ""
  }

  criarPensamento() {
    alert("Pensamento criado!")
  }

  cancelar() {
    alert("Pensamento cancelado")
  }

}
