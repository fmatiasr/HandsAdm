import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CasesService } from '../shared/services/cases.service';
import { ICase } from '../shared/model/case.model';
/**
 * Classe do component cases
 */
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  /**
   * Propriedade de lista de ICase
   */
  casesList: ICase[];
  /**
   * Titulo da pagina
   */
  title = 'Cases';
  /**
   * Propriedade que seta a mensagem de erro
   */
  errorMessage = 'Erro ao chamar o servico';
  /**
   * Construtor da classe do component cases
   * @param _service Servicos para case
   * @param _router Router do angular
   */
  constructor(private _service: CasesService, private _router: Router) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    this._service.getListCases()
          .subscribe(
            cases => {
              this.casesList = cases;
            },
            error => this.errorMessage = <any>error
          );
  }
  /**
   * Abre a pagina de incluir um case
   */
  openAddPage() {
    this._router.navigate(['/cases-add']);
  }
  /**
   * Deleta um case por id
   * @param id Id do case a ser deletado
   */
  deleteProduct(id) {
    this._service.deleteCase(id)
          .subscribe(
            error => this.errorMessage = <any>error
          );
  }
}
