import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: "Remember feeling broke as fuck?",
      autoria: "Nav",
      modelo: "modelo1"
    },
    {
      conteudo: "I pass the ball, I don't layup",
      autoria: "Lil Baby",
      modelo: "modelo2"
    }
  ];

}
