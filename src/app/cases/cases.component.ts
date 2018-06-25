import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CasesService } from '../shared/services/cases.service';
import { ICase } from '../shared/model/case.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  caseForm: FormGroup;
  casesList: ICase[];
  errorMessage: string = "Erro ao pegar o servico";

  constructor(private fb: FormBuilder, private _service: CasesService, private _router: Router) { }

  ngOnInit() {
    this._service.getListCases()
          .subscribe(
            cases => {
              this.casesList = cases;
            },
            error => this.errorMessage = <any>error
          );
  }

  openAddPage(){
    this._router.navigate(['/cases-add']);
  }

  deleteProduct(id){
    this._service.deleteCase(id)
          .subscribe(
            error => this.errorMessage = <any>error
          );
  }

}
