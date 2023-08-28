import { Component, Input } from '@angular/core';
import { Pensamento } from '../IPensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  // precisa ser inicializado
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  tamanhoPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
