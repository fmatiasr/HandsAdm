import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosAddComponent } from './produtos/produtos-add.component';
import { CasesComponent } from './cases/cases.component';
import { MenuComponent } from './shared/menu/menu.component';
import { appRoutes } from './app.routes';

import { CasesService } from './shared/services/cases.service';
import { ProdutosService } from './shared/services/produtos.service';
import { CasesAddComponent } from './cases/cases-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CasesComponent,
    MenuComponent,
    ProdutosAddComponent,
    CasesAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProdutosService,
    CasesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
