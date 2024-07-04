import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit{

  compras: Compra[] =[];

  constructor(
    private route: ActivatedRoute,
    private carrinhoService: PedidoService
  ) {
    
  }

  ngOnInit(): void {
    this.consultaPedido();
  }

  consultaPedido() {
    this.carrinhoService.getPedido()
    .subscribe(x => {
      this.compras = x
    })
  }
}
