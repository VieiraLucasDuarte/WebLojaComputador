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
    this.mockProduto()
    console.log('to aq')
    // let numero = this.route.snapshot.paramMap.get('id');
    // if(numero == undefined) return;
    // this.codProduto = parseInt(numero);
    // this.getProduto(this.codProduto)
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
    console.log(produtoSelect)
    this.router.navigate(['/carrinho'])   
  }

  mockProduto() {
    const produtosMock: Produto =  {
        id: 1,
        nome: "Smartphone XYZ",
        descricaoCurta: "Smartphone com tela de 6.5 polegadas",
        descricaoLonga: "O Smartphone XYZ possui uma tela de 6.5 polegadas, câmera de 48MP, 128GB de armazenamento interno e bateria de 4000mAh.",
        valor: 1999.99,
        promocao: true,
        quantidade: 50,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      }

      this.produto = produtosMock
  }
}
