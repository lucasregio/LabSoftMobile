import Atletica from "./Atletica";
import Evento from "./Evento";
import Modalidade from "./Modalidade";

export default interface Campeonato {
    id: string,
    nome: string,
    ano: number,
    status: string,
    id_modalidade: string,
    modalidade: Modalidade,
    id_evento: string,
    evento: Evento,
    id_vencedor: string,
    vencedor: Atletica
}
