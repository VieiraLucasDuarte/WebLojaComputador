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
    this.getCategoria();
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
    this.router.navigate(['/pedido'])
  }


  redirecionar() {
    this.router.navigate(['/'])
  }



  /////////////////////////////////////////////////////

  private mockTeste() {
    const categoria = [
      {
        id: 1,
        descricao: 'Categoria 1',
        ativo: true,
        subCategorias: [
          {
            id: 1,
            descricao: 'Subcategoria 1',
            ativo: true
          },
          {
            id: 2,
            descricao: 'Subcategoria 2',
            ativo: false
          }
        ]
      } as Categoria,
      {
        id: 2,
        descricao: 'Categoria 2',
        ativo: false,
        subCategorias: [
          {
            id: 3,
            descricao: 'Subcategoria 3',
            ativo: true
          },
          {
            id: 4,
            descricao: 'Subcategoria 4',
            ativo: true
          }
        ]
      } as Categoria
    ]

    this.categorias = categoria
  }

  getProdutoByFiltroCategoria(idSub: number) {
    this.produtoService.findProdutosBySub(idSub).subscribe(x => {
      x
    })
  }
}
