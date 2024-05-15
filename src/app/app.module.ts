import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavPrincipalComponent } from './components/nav-principal/nav-principal.component';
import { ProdutosPrincipalComponent } from './components/produtos-principal/produtos-principal.component';
import { MenuLateralPrincipal } from './components/menu-lateral-principal/menu-lateral-principal';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavPrincipalComponent,
    ProdutosPrincipalComponent,
    MenuLateralPrincipal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
