import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CasesService } from '../shared/servicos/cases.service';
import { ICases } from '../shared/model/cases.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  caseForm: FormGroup;
  casesList: ICases[];
  errorMessage: string = "Erro ao pegar o servico";

  constructor(private fb: FormBuilder, private _service: CasesService) { }

  ngOnInit() {
    this._service.getListCases()
          .subscribe(
            cases => {
              this.casesList = cases;
            },
            error => this.errorMessage = <any>error
          );
  }

}
