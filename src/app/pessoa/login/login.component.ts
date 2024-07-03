import { Component, OnInit } from '@angular/core';
import { LoginDTO, Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  nomeTxt: string = '';
  senhaTxt: string = '';

  UsuarioLogado!: Usuario;
  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private location: Location) {

  }
  ngOnInit(): void {
  }

  logar() {
    const login: LoginDTO = {
      login: this.nomeTxt,
      senha: this.senhaTxt
    }
    this.usuarioService.loginUsuario(login)
      .subscribe(x => {
        if (x != null) {
          this.loginService.logado(x);
          this.location.back();
        }

      })
  }



  mockUsuario() {

    const usuario: Usuario = {
      id: 1,
      nome: "lucas",
      senha: "123"
    }

    this.UsuarioLogado = usuario;
    //const produtosMock: Produto[] = [
  }
}

