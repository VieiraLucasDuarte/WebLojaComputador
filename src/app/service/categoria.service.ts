import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    
    private apiURL = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }


    getCategorias(): Observable<any> {
        return this.http.get(this.apiURL + 'categoria');
    }
}
