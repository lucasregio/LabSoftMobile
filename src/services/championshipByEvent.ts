import api from "./api";
import {ModalityCardProps} from  "../pages/ModalityList/components/ModalityCard"
import {getAllJogos, ordenarJogosPorData} from "./modalityDetails"
import Jogo from "../services/interfaces/Jogo"


function findNextGame(jogos: Jogo[]): Jogo {
    let proximoJogo: Jogo;
    // como está ordenado decrescente esse é o jogo com a maior data 
    let objAuxiliar = {
        dataJogo:convertDate(jogos[0]),
        jogo: jogos[0]
    }; 
    let sysdate = new Date();

    jogos.forEach((jogo)=>{
        let data = convertDate(jogo)
        if( data >= sysdate){

            if(data <= objAuxiliar.dataJogo){
                objAuxiliar = {
                    dataJogo: data,
                    jogo: jogo

                }
            }
        }
    });
    proximoJogo = objAuxiliar.jogo
    return proximoJogo;
}

// Obs: o typscript ao trabalhar com data conta os meses do ano iniciando de 0.
export function convertDate(jogo: Jogo): Date{
    const data = jogo.data_jogo.split('/').map(x => parseInt(x));
    const hora = jogo.hora_jogo.split(':').map(x => parseInt(x));
    const dateTest = new Date(data[2], data[1]-1, data[0], hora[0], hora[1]);

    return dateTest;
}

async function getGames(idCampeonato:string){
    let ultimoJogo: { nextGame: number, lastGame: Jogo};
    let sysdate = new Date();
    let jogos: Jogo[];
    try {
        jogos = await getAllJogos(idCampeonato);
    } catch(error: any) {
        return Promise.reject(error.response);
    }

    if(jogos.length > 0)
        jogos.sort((a,b) => ordenarJogosPorData(a, b, 'desc'));

    if(jogos.length == 0){

        ultimoJogo = {
            nextGame: 0,
            lastGame: jogos[0]
        }
    }else{
        if(convertDate(jogos[0]) >= sysdate){
            ultimoJogo = {
                nextGame: 1,
                lastGame: findNextGame(jogos)
            }
        }else{ // não tem próximo jogo, apenas último jogo.
            ultimoJogo = {
                nextGame: 2,
                lastGame: jogos[0]
            }
        }
    }



    return ultimoJogo;
}


export async function getChampionsByEvent(idEvent:string): Promise<ModalityCardProps[]> {
    
    let array : ModalityCardProps[];
    array = [];
    const result = await api.get(`campeonatos?limit=25&page=1&id_evento=${idEvent}`)
        .then((response)=>{
            response.data.campeonatos.forEach( (campeonato: any) => {
                array.push({
                    icon: campeonato.modalidade.imagem,
                    iconTeam1: "time 01",
                    iconTeam2: "time 02",
                    title: campeonato.modalidade.nome,
                    nextDate: 'data',
                    idCampeonato: campeonato.id

                });
            });


        }).catch((error)=>{

            if (error.response) {

                console.log("Error ao buscar modalidades: ", error.response.data);
            }
            array = []
        });
        await Promise.all( array.map( async (campeonato: any)=>{
            let proximoJogo = await getGames(campeonato.idCampeonato);
            if(proximoJogo.nextGame !== 0){
                campeonato.iconTeam1 = proximoJogo.lastGame.time1.logo;
                campeonato.iconTeam2 = proximoJogo.lastGame.time2.logo;
                campeonato.nextGame = proximoJogo.nextGame;
                campeonato.nextDate = proximoJogo.lastGame.data_jogo +" "+ proximoJogo.lastGame.hora_jogo
            }else{
                campeonato.iconTeam1 = "-";
                campeonato.iconTeam2 = "-";
                campeonato.nextGame = proximoJogo.nextGame;
                campeonato.nextDate= "Não possui."
            }

        })) 

    return array;
}