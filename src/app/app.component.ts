import { Component } from '@angular/core';

/**
 * Classe do component do app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  /**
   * Propriedade de titulo da home
   */
  title:string = "Home";
}
