export default interface Postagem {
    id: string,
    titulo: string,
    tipo: string,
    imagem: string,
    descricao: string,
    data_evento: string,
    id_usuario: string,
    usuario: {
      nome: string,
      foto: string
    }
}
