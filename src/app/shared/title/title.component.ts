import { Component, OnInit, Input } from '@angular/core';

/**
 * Classe do component do title
 */
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  /**
   * Propriedade que determina qual pagina se esta
   */
  @Input() title: string;
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
  }

}
