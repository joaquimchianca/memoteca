import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/IPensamento';
import { PensamentoService } from '../pensamento/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ''
  }

  constructor(
    private router: Router,
    private service: PensamentoService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((p) => {
      this.pensamento = p
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }

  editarPensamento() {
    if (this.pensamento.id) {
      this.service.editar(this.pensamento.id, this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamentos'])
      })
    }
  }
}
