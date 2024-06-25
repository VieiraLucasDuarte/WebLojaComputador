import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaDTO } from 'src/app/model/dto/pessoa';
import { Produto } from 'src/app/model/produto';
import { Usuario } from 'src/app/model/usuario';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent  implements OnInit {

  Usuario!: Usuario
  Produto: Produto | undefined;
  pessoaForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      celular: ['', Validators.required],
      endereco: [''],
      bairro: [''],
      complemento: ['']
    })
  }
  ngOnInit(): void {
    let verifica = this.verificarLogado();
    console.log("aqui ")
    if(verifica == false)
      this.router.navigate(['login']);

    this.PreencheProduto();
      
  }
  
  finalizar() {
    console.log(this.pessoaForm.value)
    // const pessoa: PessoaDTO

  }

  verificarLogado() {
    let verifica = true;
    this.loginService.getLogin().subscribe(x => {
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

  PreencheProduto() {
    this.carrinhoService.getItemCarrinho()
    .subscribe(x => {
      console.log(x)
      this.Produto = x
    })
  }
}
