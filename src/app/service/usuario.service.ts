import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { LoginDTO, Usuario } from "../model/usuario";
import { PessoaDTO } from "../model/dto/pessoa";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private apiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  loginUsuario(login: LoginDTO): Observable<any> {
    return this.http.post(this.apiURL + "pessoa/login", login);
  }

  createdPessoa(pessoa: PessoaDTO): Observable<any> {
    return this.http.post(this.apiURL + "pessoa/criar", pessoa)
  }
}