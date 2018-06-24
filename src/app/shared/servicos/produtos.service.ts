import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IProdutos } from '../model/produtos.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  objProdutos: IProdutos;
  produtosUrl = 'assets/produtos.json';

  constructor(private _http: HttpClient) { }
  /**
   * Pega o produto.
   */
  getProduct(): Observable<IProdutos> {
    return this._http.get<IProdutos>(this.produtosUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Pega lista de produtos.
   */
  getListProduct(): Observable<IProdutos[]> {
    return this._http.get<IProdutos[]>(this.produtosUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Adiciona o produto.
   */
  addProduct(): Observable<IProdutos> {
    return this._http.post<IProdutos>(this.produtosUrl, this.objProdutos)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Atualiza o produto
   */
  updateProduct(): Observable<IProdutos> {
    return this._http.put<IProdutos>(this.produtosUrl, this.objProdutos)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Deleta o produto (delecao logica)
   */
  deleteProduct() {
    return this._http.put<IProdutos>(this.produtosUrl, this.objProdutos)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Tratamento de erro
   * @param err 
   */
  private handleError(err: HttpErrorResponse){
    console.log();
    return Observable.throw(err.message);
  }
}
