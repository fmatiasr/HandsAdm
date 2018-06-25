import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Case } from '../shared/model/caseModel.model';

@Component({
  selector: 'app-cases-add',
  templateUrl: './cases-add.component.html',
  styleUrls: ['./cases-add.component.css']
})
export class CasesAddComponent implements OnInit {

  model = new Case();

  constructor(private _router: Router, private _activeRouter: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._activeRouter.snapshot.paramMap.get('id');
    //alert(id);
  }

  voltarProductPage(){
    this._router.navigate(['/cases']);
  }

  onSubit(){
    debugger;
  }

}
