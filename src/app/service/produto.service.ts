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


    getProdutos(): Observable<any> {
        return this.http.get(this.apiURL + 'produto');
    }

    // getProdutosBySub(subCategoria: number): Observable<Produto> {
    //     return this.http.get(this.apiURL + `produto/${subCategoria}`)
    // }

}