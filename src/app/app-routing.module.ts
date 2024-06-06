import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProdutoComponent } from './home/produto/produto/produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
