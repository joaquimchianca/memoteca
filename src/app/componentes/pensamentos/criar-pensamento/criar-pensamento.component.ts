import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/IPensamento';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router) {  }

  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }

}
