export interface Categoria {
    id: number;
    descricao: string;
    ativo: boolean;
    subCategorias: subCategorias[];
}

export interface subCategorias {
    id: number;
    descricao: string;
    ativo: boolean;
}