import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ICase } from '../model/case.model'

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
  caseUrl = 'assets/cases.json';
  /**
   * Construtor da classe de servicos de cases
   * @param _http 
   */
  constructor(private _http: HttpClient) { }
  /**
   * Pega o Case
   * @param id Id do case
   */
  getCase(id): Observable<ICase> {
    return this._http.get<ICase>(this.caseUrl + `/${id}`)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Pega lista de Cases
   */
  getListCases(): Observable<ICase[]> {
    return this._http.get<ICase[]>(this.caseUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Adiciona o case
   * @param caseSingle Objeto do case que e do tipo ICase
   */
  addCase(caseSingle: ICase): Observable<ICase> {
    return this._http.post<ICase>(this.caseUrl, caseSingle)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Atualiza o case
   * @param caseSingle Objeto do case que e do tipo ICase
   */
  updateCase(caseSingle: ICase): Observable<ICase> {
    return this._http.put<ICase>(this.caseUrl, caseSingle)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Deleta o case (delecao logica)
   * @param id Id do case
   */
  deleteCase(id): Observable<ICase> {
    return this._http.put<ICase>(this.caseUrl, id)
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
