import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "../model/usuario";

@Injectable({
    providedIn: 'root',
})

export class LoginService {
    private usuario = new BehaviorSubject<Usuario | null>(null);

    logado(usuario: Usuario) {
        this.usuario.next(usuario);
    }

    getLogin() {
        return this.usuario.asObservable();
    }
}