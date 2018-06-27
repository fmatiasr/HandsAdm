import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CasesService } from '../shared/services/cases.service';
import { Case } from '../shared/model/caseModel.model';
/**
 * Classe do component cases add
 */
@Component({
  selector: 'app-cases-add',
  templateUrl: './cases-add.component.html',
  styleUrls: ['./cases-add.component.css']
})
export class CasesAddComponent implements OnInit {
  /**
   * Model do formulario do case
   */
  model = new Case();
  /**
   * Titulo da pagina
   */
  title = 'Cases';
  /**
   * Propriedade subtitle
   */
  subTitle: string;
  /**
   * Propriedade para verificar se e alterar ou inserir
   */
  alterar = false;
  /**
   * Construtor da classe do component cases add
   * @param _servico Servicos para case
   * @param _router Router do angular
   * @param _activeRouter ActiveRouter do angular
   */
  constructor(private _servico: CasesService, private _router: Router, private _activeRouter: ActivatedRoute) { }
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
    if(this._activeRouter.snapshot.paramMap.get('id') != null){
      this._servico.getCase(+this._activeRouter.snapshot.paramMap.get('id'))
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
   * Voltar para pagina de lista de cases
   */
  voltarCasePage() {
    this._router.navigate(['/cases']);
  }
  /**
   * Da submit no formulario
   * @param form
   */
  onSubit(form: NgForm) {
    if(this.alterar){
      this._servico.updateCase(this.model)
      .subscribe(res => {
        this._router.navigate(['/cases']);
        console.log(res);
      });
    }
    else{
      this._servico.addCase(this.model)
      .subscribe(res => {
        this._router.navigate(['/cases']);
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
