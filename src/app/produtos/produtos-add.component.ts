import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/model/produtoModel.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produtos-add',
  templateUrl: './produtos-add.component.html',
  styleUrls: ['./produtos-add.component.css']
})
export class ProdutosAddComponent implements OnInit {

  model = new Produto();

  constructor(private _servico: ProdutosService, private _router: Router, private _activeRouter: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._activeRouter.snapshot.paramMap.get('id');
  }

  voltarProductPage(){
    this._router.navigate(['/produtos']);
  }

  onSubit(form: NgForm){
    this._servico.updateProduct(this.model);
  }

}
