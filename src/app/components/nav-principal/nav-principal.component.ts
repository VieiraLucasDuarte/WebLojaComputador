import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  panelColor = new FormControl('red');

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }


  ngOnInit() {
    this.getCategoria();

  }

  private getCategoria() {
    this.mockTeste();
    console.log(this.categorias)
    // this.categoriaService.getCategorias()
    //   .subscribe(item =>
    //     this.categorias = item,
    //   );


  }

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

  getProdutoByFiltroCategoria() {
    produtoService.
  }
}
