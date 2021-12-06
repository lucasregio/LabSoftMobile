import api from "../services/api"
import Jogo from "./interfaces/Jogo";

export async function getAllJogos(idCampeonato: string): Promise<Jogo[]> {
    let jogos: Jogo[];
    try {
        const result = await api.get('jogos');
        jogos = result.data;

        // NOTE(Alejandro): Como a exibição dos jogos no mobile é dado atravez de um campeonato, é preiso fazer o filtro dos jogos.
        jogos = jogos.filter(jogo => jogo.id_campeonato === idCampeonato);
        
        // NOTE(Alejandro): Fazer o fetch dos dados que faltam.
        // O correto seria a api enviar esses dados, para impedir que o app faça multiplas requests para a api.
        await Promise.all(jogos.map(async jogo => {
            jogo.time1 = (await api.get(`atleticas/${jogo.id_time1}`)).data;
            jogo.time2 = (await api.get(`atleticas/${jogo.id_time2}`)).data;
        }))

    } catch (error: any) {
        return Promise.reject(error.response);
    }
    
    return jogos;
}

export async function getAllJogosFinalizados(idCampeonato: string): Promise<Jogo[]> {
    function jogoFinalizado(jogo: Jogo) {
        return jogo.placar1 !== 0 || jogo.placar2 !== 0;
    }

    let jogos: Jogo[];
    try {
        jogos = await getAllJogos(idCampeonato);
    } catch(error: any) {
        return Promise.reject(error.response);
    }

    jogos = jogos.filter(jogoFinalizado);
    jogos.sort((a,b) => ordenarJogosPorData(a, b, 'desc'));
    
    return jogos;
}

export async function getAllJogosEmAndamento(idCampeonato: string): Promise<Jogo[]> {
    function jogoEmAndamento(jogo: Jogo) {
        return jogo.placar1 <= 0 && jogo.placar2 <= 0;
    }

    let jogos: Jogo[];
    try {
        jogos = await getAllJogos(idCampeonato);
    } catch(error: any) {
        return Promise.reject(error.response);
    }

    jogos = jogos.filter(jogoEmAndamento);
    jogos.sort((a,b) => ordenarJogosPorData(a, b, 'asc'));
    
    return jogos;
}

function ordenarJogosPorData(a: Jogo, b: Jogo, ordem: 'asc' | 'desc') {
    const dataA = a.data_jogo.split('/').map(x => parseInt(x));
    const horaA = a.hora_jogo.split(':').map(x => parseInt(x));

    const dataB = b.data_jogo.split('/').map(x => parseInt(x));
    const horaB = b.hora_jogo.split(':').map(x => parseInt(x));

    const dateA = new Date(dataA[2], dataA[1], dataA[0], horaA[0], horaA[1]);
    const dateB = new Date(dataB[2], dataB[1], dataB[0], horaB[0], horaB[1]);

    if (ordem === 'desc')
        return dateB.getTime() - dateA.getTime();
    else
        return dateA.getTime() - dateB.getTime();
}
