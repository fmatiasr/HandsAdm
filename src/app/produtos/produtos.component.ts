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
  /**
   * Propriedade de lista de IProduto
   */
  produtosList: IProduto[];
  /**
   * Propriedade que seta a mensagem de erro
   */
  errorMessage: string = "Erro ao chamar o servico";
  /**
   * Construtor da classe produtos
   * @param fb injecao de dependencia do FormBuilder
   * @param _service injecao de dependencia de produtos services
   */
  constructor(private fb: FormBuilder, private _service:ProdutosService, private _router: Router) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    this._service.getListProduct()
          .subscribe(
            produtos => {
              this.produtosList = produtos;
            },
            error => this.errorMessage = <any>error
          );
  }
  /**
   * Abre a pagina de incluir um produto
   */
  openAddPage(){
    this._router.navigate(['/produtos-add']);
  }
  /**
   * Deleta um produto por id
   * @param id Id do produto a ser deletado
   */
  deleteProduct(id){
    this._service.deleteProduct(id)
          .subscribe(
            error => this.errorMessage = <any>error
          );
  }
}
