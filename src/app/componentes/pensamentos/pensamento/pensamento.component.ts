import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  pensamento = {
    conteudo: "Chase a check, never chase a bitch",
    autoria: "Future",
    modelo: "modelo3"
  }

}
