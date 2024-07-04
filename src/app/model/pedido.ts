export interface Compra {
    pessoa: Pessoa;
    produto: Produto;
    id: number;
    valor: number;
    quantidade: number;
    idProduto: number;
    idPessoa: number;
  }

export interface Produto {
    id: number;
    descricaoCurta: string;
    descricaoLonga: string;
    valor: number;
    promocao: boolean;
    quantidade: number;
    imagem: string;
    nome: string;
}

export interface Pessoa {
    id: number;
    login: string;
    senha: string;
    cpf: string;
    celular: string;
    bairro: string;
    nome: string;
    endereco: string;
    complemento: string;
}
