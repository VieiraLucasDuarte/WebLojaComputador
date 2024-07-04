import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaDTO } from 'src/app/model/dto/pessoa';
import { Produto } from 'src/app/model/produto';
import { Usuario } from 'src/app/model/usuario';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { CarrinhoDTO } from 'src/app/model/dto/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent  implements OnInit {

  Usuario!: Usuario
  Produto: Produto | undefined;
  pessoaForm: FormGroup;
  pessoaEnviar!: PessoaDTO

  constructor(
    private loginService: LoginService,
    private pedidoService: PedidoService,
    private usuService: UsuarioService,
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
    console.log('clik')
    this.criarPessoaDto();
    this.usuService.createdPessoa(this.pessoaEnviar)
    let carrinho = this.criarPedido();
    console.log(carrinho)
    if(carrinho != undefined)
      this.pedidoService.createdPedido(carrinho);
    
    this.router.navigate(['']);
    alert("Compra Efetuada");
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
    return verifica;
  }

  PreencheProduto() {
    this.carrinhoService.getItemCarrinho()
    .subscribe(x => {
      this.Produto = x
    })
  }

  criarPessoaDto() {
    const pessoa: PessoaDTO = {
      id: this.Usuario.id,
      nome: this.pessoaForm.value.nome,
      cpf: this.pessoaForm.value.cpf,
      celular: this.pessoaForm.value.celular,
      endereco: this.pessoaForm.value.endereco,
      bairro: this.pessoaForm.value.bairro,
      complemento: this.pessoaForm.value.complemento
    };
  this.pessoaEnviar = pessoa
  }

  criarPedido() {
    if(this.Produto == undefined) return;
    const carrinho: CarrinhoDTO = {
      idPessoa: this.Usuario.id,
      idProduto: this.Produto?.id,
      quantidade: this.Produto.quantidade,
      valor: this.Produto.valor
    } 
    return carrinho;
  }
}
