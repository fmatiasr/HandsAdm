import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProdutosService } from '../shared/services/produtos.service';
import { IProduto } from '../shared/model/produto.model';

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
  produtosList: IProduto[];
  errorMessage: string = "Erro ao pegar o servico";

  /**
   * Construtor da classe produtos
   * @param fb injecao de dependencia do FormBuilder
   * @param _service injecao de dependencia de produtos services
   */
  constructor(private fb: FormBuilder, private _service:ProdutosService, private _router: Router) { }

  ngOnInit() {
    this._service.getListProduct()
          .subscribe(
            produtos => {
              this.produtosList = produtos;
            },
            error => this.errorMessage = <any>error
          );
  }

  openAddPage(){
    this._router.navigate(['/produtos-add']);
  }

  deleteProduct(id){
    this._service.deleteProduct(id)
          .subscribe(
            error => this.errorMessage = <any>error
          );
  }

}
