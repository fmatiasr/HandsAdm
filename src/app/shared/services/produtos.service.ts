import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduto } from '../model/produto.model';
/**
 * Classe dos servicos de Produtos
 */
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  /**
   * Url da API de produtos
   */
  // produtosUrl = 'assets/produtos.json';
  produtosUrl = 'http://localhost:53805/produto/';  
  /**
   * Construtor da classe de servicos de produtos
   * @param _http
   */
  constructor(private _http: HttpClient, private _router: Router) { }
  /**
   * Pega o produto.
   * @param id Id do produto
   */
  getProduct(id): Observable<IProduto> {
    return this._http.get<IProduto>(this.produtosUrl + 'obter/' + `/${id}`)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Pega lista de produtos.
   */
  getListProduct(): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(this.produtosUrl + 'listar/')
    .catch(this.handleError);
  }
  /**
   * Adiciona o produto.
   * @param produto Objeto do produto que e do tipo IProduto
   */
  addProduct(produtoOne: IProduto) {
    return this._http.post<IProduto>(this.produtosUrl + 'adicionar/', produtoOne)
    .subscribe((data) => {
      this._router.navigate(['/produtos']);
      console.log(data);
    });
  }
  /**
   * Atualiza o produto
   * @param produto Objeto do produto que e do tipo IProduto
   */
  updateProduct(produtoOne: IProduto): Observable<IProduto> {
    return this._http.put<IProduto>(this.produtosUrl + 'alterar/', produtoOne)
    .do(data => {console.log('All: ' + JSON.stringify(data))})
    .catch(this.handleError);
  }
  /**
   * Deleta o produto (delecao logica)
   * @param id Id do produto
   */
  deleteProduct(id: number) {
    return this._http.delete<IProduto>(this.produtosUrl + 'deletar/' + id)
    .do(data => {
      console.log('All: ' + JSON.stringify(data));
    })
    .catch(this.handleError);
  }
  /**
   * Tratamento de erro
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    debugger;
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
