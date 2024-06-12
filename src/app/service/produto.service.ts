import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

    getProduto(idProduto: number): Observable<any> {
        return this.http.get(this.apiURL + `produto/${idProduto}`);
    }
}