import api from './api';

export async function getAll() : Promise<Postagem[]> {

    let postagens: Postagem[];

    try {
        postagens = (await api.get("/postagens?limit=25&page=1&type=NOTICIAS")).data.posts;
        
        await Promise.all(postagens.map(async postagem => {
            postagem.usuario = (await api.get(`/usuarios/${postagem.id_usuario}`)).data;

            if (postagem.usuario.id_atletica === null || postagem.usuario.id_atletica === undefined) {
                postagem.imagem_autor = postagem.usuario.foto;
                postagem.nome_autor = postagem.usuario.nome;
                
            } else {
                let atleticaResponse = await api.get(`/atleticas/${postagem.usuario.id_atletica}`)
                const atletica = atleticaResponse.data as Atletica;

                postagem.imagem_autor = atletica.logo;
                postagem.nome_autor = atletica.nome;
            }
        }))
    } catch(error) {
        console.log(error);
        return Promise.reject(error);
    }

    return postagens;
}

export async function get(id: string) : Promise<Postagem> {

    let postResponse = await api.get(`/postagens/${id}`);

    let postagem = postResponse.data as Postagem;
    
    try {
        let usuarioResponse = await api.get(`/usuarios/${postagem.id_usuario}`);

        const usuario = usuarioResponse.data as Usuario;
        
        postagem.usuario = usuario;

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

export async function getAllPostagensAtletica(idAtletica: string) {
    let postagens: Postagem[];
    try {
        postagens = await getAll();
    } catch (error) {
        return Promise.reject(error);
    }
    
    postagens = postagens.filter(p => p.usuario?.id_atletica === idAtletica);

    return postagens;
}

export interface Postagem {
    id: string
    titulo: string
    tipo: string
    imagem: string
    descricao: string
    data_evento: string
    id_usuario: string
    usuario: Usuario
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
