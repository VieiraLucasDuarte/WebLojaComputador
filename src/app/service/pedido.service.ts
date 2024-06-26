import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarrinhoDTO } from "../model/dto/carrinho";

@Injectable({
    providedIn: 'root'
})

export class PedidoService {
    private apiURL = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    createdPedido(carrinho: CarrinhoDTO) {
        return this.http.post(this.apiURL + "compra", carrinho);
    }

}