import { Component, OnInit, Input } from '@angular/core';

/**
 * Classe do component do menu
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /**
   * Propriedade screen
   */
  screen = true;
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
  }
}
