import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produtos-principal',
  templateUrl: './produtos-principal.component.html',
  styleUrls: ['./produtos-principal.component.scss']
})
export class ProdutosPrincipalComponent implements OnInit {

  produtos: Produto[] = []

  constructor(
    private produtoService: ProdutoService,
  ) { }

  
  ngOnInit(): void {
    this.consultaProduto();
  }

  private consultaProduto() {
    this.produtoService.getProdutos()
      .subscribe(result =>
        this.produtos = result,
      )
  }
}
