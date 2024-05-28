import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

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
  ) { }


  ngOnInit() {
    this.getCategoria();

  }

  private getCategoria() {
    // this.mockTeste();
    // this.categoriaService.getCategorias()
    //   .subscribe(item =>
    //     this.categorias = item,
    //   );


  }

  // private mockTeste() {
  //   const categorias: Categoria[] = [
  //     {
  //         id: 1,
  //         descricao: 'Tecnologia',
  //         ativo: true
  //     },
  //     {
  //         id: 2,
  //         descricao: 'Educação',
  //         ativo: true
  //     },
  //     {
  //         id: 3,
  //         descricao: 'Saúde',
  //         ativo: false
  //     }
  // ];
  // this.categorias = categorias
  // }

  getProdutoByFiltro() {
    ///repsensar legal

    //rever como passa imagem com h2
  }
}
