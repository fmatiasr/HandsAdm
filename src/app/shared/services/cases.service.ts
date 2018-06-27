import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ICase } from '../interfaces/case.interface';
/**
 * Classe dos servicos do Cases
 */
@Injectable({
  providedIn: 'root'
})
export class CasesService {
  /**
   * Url da API de produtos
   */
  caseUrl = 'http://localhost:53805/case/';
  /**
   * Construtor da classe de servicos de cases
   * @param _http
   */
  constructor(private _http: HttpClient) { }
  /**
   * Pega o Case
   * @param id Id do case
   */
  getCase(id: number): Observable<ICase> {
    return this._http.get<ICase>(this.caseUrl + 'obter/' + id)
    .catch(this.handleError);
  }
  /**
   * Pega lista de Cases
   */
  getListCases(): Observable<ICase[]> {
    return this._http.get<ICase[]>(this.caseUrl + 'listar/')
    .catch(this.handleError);
  }
  /**
   * Adiciona o case
   * @param caseSingle Objeto do case que e do tipo ICase
   */
  addCase(caseOne: ICase) {
    return this._http.post<ICase>(this.caseUrl + 'adicionar/', caseOne)
    .catch(this.handleError);
  }
  /**
   * Atualiza o case
   * @param case Objeto do case que e do tipo ICase
   */
  updateCase(caseOne: ICase): Observable<ICase> {
    return this._http.put<ICase>(this.caseUrl + 'alterar/', caseOne)
    .catch(this.handleError);
  }
  /**
   * Deleta o case (delecao logica)
   * @param id Id do case
   */
  deleteCase(id: number){
    return this._http.delete<ICase>(this.caseUrl + 'deletar/' + id)
    .catch(this.handleError);
  }
  /**
   * Tratamento de erro
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}
