import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProdutosService } from '../shared/services/produtos.service';
import { Produto } from '../shared/models/produto.model';
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
   * Titulo da pagina
   */
  title = 'Produtos';
  /**
   * Propriedade subtitle
   */
  subTitle: string;
  /**
   * Propriedade para verificar se e alterar ou inserir
   */
  alterar = false;
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
    if(this._activeRouter.snapshot.paramMap.get('id') != null){
      this._servico.getProduct(+this._activeRouter.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.model = res;
        this.alterar = true;
        this.subTitle = 'Alterar';
      });
    }
    else{
      this.alterar = false;
      this.subTitle = 'Incluir';
    }
  }
  /**
   * Voltar para pagina de lista de produtos
   */
  voltarProductPage() {
    this._router.navigate(['/produtos']);
  }
  /**
   * Da submit no formulario para adiconar um produto
   * @param form
   */
  onSubit(form: NgForm) {
    if(this.alterar){
      this._servico.updateProduct(this.model)
      .subscribe(res => {
        this._router.navigate(['/produtos']);
        console.log(res);
      });
    }
    else{
      this._servico.addProduct(this.model)
      .subscribe(res => {
        this._router.navigate(['/produtos']);
        console.log(res);
      });
    }
  }
  /**
   * Iniciando tratamento de imagem para base64
   * @param $event pássando a imagem
   */
  changeListener($event): void {
    this.readThis($event.target);
  }
  /**
   * Lendo a imagem para passar para base64
   * @param inputValue valores da imagem
   */
  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.model.Imagem = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
}
