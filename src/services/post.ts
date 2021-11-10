import api from './api';
import {AxiosResponse} from 'axios';

export async function getAll() : Promise<Postagem[]> {
    return await api.get("/postagens?limit=25&page=1&type=NOTICIAS")
        .then((response: AxiosResponse) => {
            return response.data.posts as Postagem[];
        })
        .catch((error: AxiosResponse) => {
            console.log(error);
            throw new Error("");
        });
}

export async function get(id: string) : Promise<Postagem> {

    let postResponse = await api.get(`/postagens/${id}`);

    let postagem = postResponse.data as Postagem;
    
    try {
        let usuarioResponse = await api.get(`/usuarios/${postagem.id_usuario}`);

        const usuario = usuarioResponse.data as Usuario;

        if (usuario.id_atletica === null || usuario.id_atletica === undefined) {
            postagem.imagem_autor = usuario.foto;
            postagem.nome_autor = usuario.nome;
            
        } else {
            let atleticaResponse = await api.get(`/atleticas/${usuario.id_atletica}`)
            const atletica = atleticaResponse.data as Atletica;

            postagem.imagem_autor = atletica.logo;
            postagem.nome_autor = atletica.nome;
        }

        return await postagem;
    } catch(e) {
        console.log(e);
    } finally {
        return postagem;
    }
}

export interface Postagem {
    id: string
    titulo: string
    tipo: string
    imagem: string
    descricao: string
    data_evento: string
    id_usuario: string
    created_at: string
    updated_at: string
    imagem_autor: string
    nome_autor: string
}

export interface Usuario {
  id: string,
  email: string,
  nome: string,
  instagram: string,
  foto: string,
  permissao: 'aluno' | 'atletica' | 'dce1' | 'dce2' | 'dce3',
  id_atletica: string,
  created_at: string,
  updated_at: string
}

export interface Atletica {
    id: string,
    nome: string,
    logo: string,
    ativo: boolean,
    data_criacao: string,
    created_at: string,
    updated_at: string
}
