import api from "./api";
import {ModalityCardProps} from  "../pages/ModalityList/components/ModalityCard"

async function getNextGameByChampion(idChampion:string){

    //const result = await api.get();

}

export async function getChampionsByEvent(idEvent:string): Promise<ModalityCardProps[]> {
    
    let array : ModalityCardProps[];
    array = [];
    const result = await api.get(`campeonatos?limit=25&page=1&id_evento=${idEvent}`)
        .then((response)=>{
            console.log("teste53!");
            console.log(response.data);
            response.data.campeonatos.forEach( (campeonato: any) => {
                console.log("Campeonato: ", campeonato.modalidade.nome);
                console.log("Campeonato imagem: ", campeonato.modalidade.imagem);
                console.log("Campeonato id: ", campeonato.id);

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

    return array;
}