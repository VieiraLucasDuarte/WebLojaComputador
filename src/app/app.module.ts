import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavPrincipalComponent } from './components/nav-principal/nav-principal.component';
import { ProdutosPrincipalComponent } from './components/produtos-principal/produtos-principal.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoComponent } from './home/produto/produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho/carrinho.component';
import { LoginComponent } from './pessoa/login/login.component';
import { LoginService } from './service/login.service';
import { CarrinhoService } from './service/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavPrincipalComponent,
    ProdutosPrincipalComponent,
    ProdutoComponent,
    CarrinhoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
