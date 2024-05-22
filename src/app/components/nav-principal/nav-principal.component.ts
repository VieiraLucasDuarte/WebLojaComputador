import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.scss']
})
export class NavPrincipalComponent implements OnInit {

  categorias: Categoria[] = []

  constructor(
    private categoriaService: CategoriaService,
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

  getProdutoByFiltro() {
    ///repsensar legal

    //rever como passa imagem com h2
  }
}
