import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProdutoComponent } from './home/produto/produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho/carrinho.component';
import { LoginComponent } from './pessoa/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
