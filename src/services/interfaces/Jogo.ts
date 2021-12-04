import Atletica from "./Atletica";

export default interface Jogo {
    id_time1: string,
    id_time2: string,
    time1: Atletica,
    time2: Atletica,
    data_jogo: string,
    hora_jogo: string,
    placar1: number,
    placar2: number,
    local: string,
    id_fase: string,
    id_campeonato: string
}
