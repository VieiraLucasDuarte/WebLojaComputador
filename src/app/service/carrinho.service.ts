import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Produto } from "../model/produto";

@Injectable({
    providedIn: 'root'
})


export class CarrinhoService {
    private carrinhoItem = new BehaviorSubject<Produto | undefined>(undefined);

    
    setItem(produto: Produto) {
        this.carrinhoItem.next(produto);
    }

    getItemCarrinho() {
        return this.carrinhoItem.asObservable();
    }
}