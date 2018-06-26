import { Component, OnInit } from '@angular/core';

/**
 * Classe do component da home
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * Titulo da pagina
   */
  title = 'Home';
  /**
   * ngInit que ocorre antes do carregamento do component
   */
  ngOnInit() {
  }
}
