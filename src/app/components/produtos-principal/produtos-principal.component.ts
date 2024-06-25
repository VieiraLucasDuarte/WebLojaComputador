import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
    private router: Router,
  ) { }


  ngOnInit(): void {
    // this.mockTeste();
    this.consultaProduto();
  }

  private consultaProduto() {
    this.produtoService.findProdutos()
      .subscribe(result =>
        this.produtos = result,
      )
  }

  produtoGeral(id: number) {
    this.router.navigate(['/produto', id])    
  }

  private mockTeste() {
    const produtosMock: Produto[] = [
      {
        id: 1,
        nome: "Smartphone XYZ",
        descricaoCurta: "Smartphone com tela de 6.5 polegadas",
        descricaoLonga: "O Smartphone XYZ possui uma tela de 6.5 polegadas, câmera de 48MP, 128GB de armazenamento interno e bateria de 4000mAh.",
        valor: 1999.99,
        promocao: true,
        quantidade: 50,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 2,
        nome: "Notebook ABC",
        descricaoCurta: "Notebook leve e potente",
        descricaoLonga: "O Notebook ABC vem com processador Intel i7, 16GB de RAM, 512GB SSD e uma tela Full HD de 15.6 polegadas. Ideal para trabalho e entretenimento.",
        valor: 4999.99,
        promocao: false,
        quantidade: 30,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 3,
        nome: "Fone de Ouvido Bluetooth",
        descricaoCurta: "Fone de ouvido sem fio com alta qualidade de som",
        descricaoLonga: "Fone de ouvido Bluetooth com cancelamento de ruído ativo, autonomia de 20 horas e som de alta definição. Confortável para uso prolongado.",
        valor: 299.99,
        promocao: true,
        quantidade: 100,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 4,
        nome: "TV 4K Ultra HD",
        descricaoCurta: "Televisão 4K de 55 polegadas",
        descricaoLonga: "A TV 4K Ultra HD de 55 polegadas oferece uma experiência de visualização imersiva com cores vibrantes, HDR10+ e som Dolby Atmos. Conectividade Smart TV integrada.",
        valor: 3499.99,
        promocao: false,
        quantidade: 20,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 5,
        nome: "Console de Videogame",
        descricaoCurta: "Console de última geração",
        descricaoLonga: "Console de videogame com suporte para jogos em 4K, 1TB de armazenamento interno, e um catálogo extenso de jogos exclusivos. Inclui um controle sem fio.",
        valor: 2999.99,
        promocao: true,
        quantidade: 25,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 6,
        nome: "Smartphone XYZ",
        descricaoCurta: "Smartphone com tela de 6.5 polegadas",
        descricaoLonga: "O Smartphone XYZ possui uma tela de 6.5 polegadas, câmera de 48MP, 128GB de armazenamento interno e bateria de 4000mAh.",
        valor: 1999.99,
        promocao: true,
        quantidade: 50,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 7,
        nome: "Smartphone XYZ",
        descricaoCurta: "Smartphone com tela de 6.5 polegadas",
        descricaoLonga: "O Smartphone XYZ possui uma tela de 6.5 polegadas, câmera de 48MP, 128GB de armazenamento interno e bateria de 4000mAh.",
        valor: 1999.99,
        promocao: true,
        quantidade: 50,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
      {
        id: 8,
        nome: "Smartphone XYZ",
        descricaoCurta: "Smartphone com tela de 6.5 polegadas",
        descricaoLonga: "O Smartphone XYZ possui uma tela de 6.5 polegadas, câmera de 48MP, 128GB de armazenamento interno e bateria de 4000mAh.",
        valor: 1999.99,
        promocao: true,
        quantidade: 50,
        imagem: "../../../assets/imgProduct/pcCompleto.jpg"
      },
    ];
    this.produtos = produtosMock
  }
}


