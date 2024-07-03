export interface Usuario {
    id: number,
    nome: string,
    senha: string,
}

export interface LoginDTO {
    login: string;
    senha: string;
}
