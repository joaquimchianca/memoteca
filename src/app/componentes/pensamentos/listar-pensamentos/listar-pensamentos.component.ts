import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/IPensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  constructor(private service: PensamentoService) {

  }

  ngOnInit(): void {
    this.service.listar().subscribe( (lista) => {
      this.listaPensamentos = lista;
    })
  }

  listaPensamentos: Pensamento[] = [];

}
