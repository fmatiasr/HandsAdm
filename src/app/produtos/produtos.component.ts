import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

import { ProdutosService } from '../shared/servicos/produtos.service';
import { IProdutos } from '../shared/model/produtos.model';
import { Observable } from 'rxjs/internal/Observable';

/**
 * Classe do componente de Produtos
 */
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //@Output() teste: EventEmitter<string> = new EventEmitter<string>();
  produtoForm: FormGroup;
  produtosList: IProdutos[];
  errorMessage: string = "Erro ao pegar o servico";

  /**
   * Construtor da classe produtos
   * @param fb injecao de dependencia do FormBuilder
   * @param _service injecao de dependencia de produtos services
   */
  constructor(private fb: FormBuilder, private _service:ProdutosService) { }

  ngOnInit() {
    this._service.getListProduct()
          .subscribe(
            produtos => {
              this.produtosList = produtos;
            },
            error => this.errorMessage = <any>error
          );
  }

}
