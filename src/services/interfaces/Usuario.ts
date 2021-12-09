import Atletica from "./Atletica";

export interface Usuario {
    id: string,
    email: string,
    nome: string,
    instagram: string,
    foto: string,
    permissao: 'aluno' | 'atletica' | 'dce1' | 'dce2' | 'dce3',
    id_atletica: string,
    atletica: Atletica
}
