import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/models/produto.model';
/**
 * Classe do componente de Produtos
 */
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  /**
   * Propriedade de lista de IProduto
   */
  produtosList: Produto[];
  /**
   * Propriedade que seta a mensagem de erro
   */
  errorMessage = 'Erro ao chamar o servico';
  /**
   * Titulo da pagina
   */
  title = 'Produtos';
  /**
   * Construtor da classe produtos
   * @param fb injecao de dependencia do FormBuilder
   * @param _service injecao de dependencia de produtos services
   */
  constructor(private _service: ProdutosService, private _router: Router) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   * Carregando a lista de produtos
   */
  ngOnInit() {
    this._service.getListProduct()
    .subscribe(
      produtosOne => {
        this.produtosList = produtosOne;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
  /**
   * Abre a pagina de incluir um produto
   */
  openAddPage() {
    this._router.navigate(['/produtos-add']);
  }
  /**
   * Deleta um produto por id
   * @param id Id do produto a ser deletado
   */
  deleteProduct(id) {
    this._service.deleteProduct(id)
      .subscribe(res => {
        this.produtosList = this.produtosList.filter(item => item.Id !== id);
        console.log(res);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }
}
