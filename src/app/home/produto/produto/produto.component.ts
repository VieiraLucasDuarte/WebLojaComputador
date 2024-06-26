import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit{

  codProduto!: number;
  produto?: Produto;
  constructor(
    private route: ActivatedRoute,
    private prodRoute: ProdutoService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let numero = this.route.snapshot.paramMap.get('id');
    if(numero == undefined) return;
    this.codProduto = parseInt(numero);
    this.getProduto(this.codProduto)
  }


  getProduto(codProduto: number) {
    this.prodRoute.getProduto(codProduto)
    .subscribe(item => {
      console.log(item)
      this.produto = item
    })
  }

  Comprar(produtoSelect: Produto) {
    this.carrinhoService.setItem(produtoSelect)
    this.router.navigate(['/carrinho'])   
  }

}
