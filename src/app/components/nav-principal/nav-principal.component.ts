import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nav-principal.component.scss']
})
export class NavPrincipalComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }


  ngOnInit() {
    this.mockTeste();
    // this.getCategoria();
  }

  private getCategoria() {
    this.categoriaService.getCategorias()
      .subscribe(item =>
        this.categorias = item,
      );
  }
  login() {
    this.router.navigate(['/login'])
  }

  carrinho() {
    this.router.navigate(['/carrinho'])
  }




  /////////////////////////////////////////////////////

  private mockTeste() {
    const categoria = [
      {
        id: 1,
        descricao: 'Computadores',
        ativo: true,
        subCategorias: [
          {
            id: 1,
            descricao: 'Pronta entrega',
            ativo: true
          },
          {
            id: 2,
            descricao: 'Monte seu PC',
            ativo: false
          }
        ]
      } as Categoria,
      {
        id: 2,
        descricao: 'Hardware',
        ativo: false,
        subCategorias: [
          {
            id: 3,
            descricao: 'Processadores',
            ativo: true
          },
          {
            id: 4,
            descricao: 'Memória Ram',
            ativo: true
          },
          {
            id: 4,
            descricao: 'Placa de Vídeo',
            ativo: true
          },
          {
            id: 4,
            descricao: 'Placa Mãe',
            ativo: true
          }
        ]
      } as Categoria,
      {
        id: 2,
        descricao: 'Periféricos',
        ativo: false,
        subCategorias: [
          {
            id: 3,
            descricao: 'Headset',
            ativo: true
          },
        ]
      } as Categoria,
    ]

    this.categorias = categoria
  }

  getProdutoByFiltroCategoria(idSub: number) {
    this.produtoService.findProdutosBySub(idSub).subscribe(x => {
      x
    })
  }
}
