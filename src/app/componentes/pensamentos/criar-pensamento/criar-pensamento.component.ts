import { Component } from '@angular/core';
import { Pensamento } from '../IPensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(private service: PensamentoService) {  }

  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe()
  }

  cancelar() {
    alert("Pensamento cancelado")
  }

}
