import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../model/produto";

@Injectable({
    providedIn: 'root'
})



export class ProdutoService {

    private apiURL = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }


    findProdutos(): Observable<any> {
        return this.http.get(this.apiURL + 'produto');
    }

    findProdutosBySub(idSub: number): Observable<any> {
        return this.http.get(this.apiURL + `produto/subcategoria/${idSub}`);
    }

}