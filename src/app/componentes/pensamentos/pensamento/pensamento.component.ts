import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  // precisa ser inicializado
  @Input() pensamento = {
    conteudo: "Chase a check, never chase a bitch",
    autoria: "Future",
    modelo: "modelo3"
  }

  tamanhoPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }


}
