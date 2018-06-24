import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICases } from '../model/cases.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  objCases: ICases;
  caseUrl = 'assets/cases.json';

  constructor(private _http: HttpClient) { }
  /**
   * Pega o Case
   */
  getCase(): Observable<ICases> {
    return this._http.get<ICases>(this.caseUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Pega lista de Cases
   */
  getListCases(): Observable<ICases[]> {
    return this._http.get<ICases[]>(this.caseUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Adiciona o case
   */
  addCase(): Observable<ICases> {
    return this._http.post<ICases>(this.caseUrl, this.objCases)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Atualiza o case
   */
  updateCase(): Observable<ICases> {
    return this._http.put<ICases>(this.caseUrl, this.objCases)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  /**
   * Deleta o case (delecao logica)
   */
  deleteCase(): Observable<ICases> {
    return this._http.put<ICases>(this.caseUrl, this.objCases)
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
