import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarrinhoDTO } from "../model/dto/carrinho";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PedidoService {
    private apiURL = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    createdPedido(carrinho: CarrinhoDTO) : Observable<any> {
        return this.http.put(this.apiURL + `compra/create`, carrinho);
    }

    getPedido() : Observable<any> {
        return this.http.get(this.apiURL + `compra/pedido`)
    }

}