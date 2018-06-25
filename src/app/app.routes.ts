import { Routes } from '@angular/router';
import { ProdutosComponent } from "./produtos/produtos.component";
import { ProdutosAddComponent } from "./produtos/produtos-add.component";
import { CasesComponent } from "./cases/cases.component";
import { CasesAddComponent } from "./cases/cases-add.component";

/**
 * Propriedade que comporta todas as rotas da aplicacao
 */
export const appRoutes: Routes = [
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produtos-add', component: ProdutosAddComponent },
    { path: 'produtos-add/:id', component: ProdutosAddComponent },
    { path: 'cases', component: CasesComponent },
    { path: 'cases-add', component: CasesAddComponent },
    { path: 'cases-add/:id', component: CasesAddComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
]