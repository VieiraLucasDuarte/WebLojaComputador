import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  UsuarioLogado!: Usuario;
  constructor(private loginService: LoginService) {

  }

  logar() {
    this.mockUsuario()
    this.loginService.logado(this.UsuarioLogado)
  }



  mockUsuario () {

    const usuario: Usuario = {
      id: 1,
      nome: "lucas",
      senha: "123"
    } 

    this.UsuarioLogado = usuario;
    //const produtosMock: Produto[] = [
  }
}

