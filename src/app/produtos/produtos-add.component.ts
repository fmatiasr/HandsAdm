import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/model/produtoModel.model';
/**
 * Classe do component produtos add
 */
@Component({
  selector: 'app-produtos-add',
  templateUrl: './produtos-add.component.html',
  styleUrls: ['./produtos-add.component.css']
})
export class ProdutosAddComponent implements OnInit {
  /**
   * Model do formulario do produto
   */
  model = new Produto();
  /**
   * Construtor da classe do component produtos add
   * @param _servico Servicos para produto
   * @param _router Router do angular
   * @param _activeRouter ActiveRouter do angular
   */
  constructor(private _servico: ProdutosService, private _router: Router, private _activeRouter: ActivatedRoute) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    let id = +this._activeRouter.snapshot.paramMap.get('id');
  }
  /**
   * Voltar para pagina de lista de produtos
   */
  voltarProductPage(){
    this._router.navigate(['/produtos']);
  }
  /**
   * Da submit no formulario
   * @param form 
   */
  onSubit(form: NgForm){
    this._servico.updateProduct(this.model);
  }
  /**
   * Iniciando tratamento de imagem para base64
   * @param $event pássando a imagem
   */
  changeListener($event) : void {
    this.readThis($event.target);
  }
  /**
   * Lendo a imagem para passar para base64
   * @param inputValue valores da imagem
   */
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();  
    myReader.onloadend = (e) => {
      this.model.url = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
