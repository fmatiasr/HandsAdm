import { Routes } from '@angular/router';
import { ProdutosComponent } from "./produtos/produtos.component";
import { CasesComponent } from "./cases/cases.component";

export const appRoutes: Routes = [
    { path: 'produtos', component: ProdutosComponent},
    { path: 'cases', component: CasesComponent},
    { path: '', redirectTo: '/', pathMatch: 'full'}
]