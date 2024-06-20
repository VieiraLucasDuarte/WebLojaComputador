import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent  implements OnInit {

  Usuario!: Usuario
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    let verifica = this.verificarLogado();
    console.log(verifica, 'cima')
    if(verifica == false)
      this.router.navigate(['login']);
  }


  verificarLogado() {
    let verifica = true;
    this.loginService.getLogin().subscribe(x => {
      console.log('verificacao', x)
      if(x == null) 
        verifica = false;
      else
      {
        this.Usuario = x;
        verifica = true
      }
    })
    console.log('fim')
    return verifica;
  }
}
