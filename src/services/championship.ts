import api from "../services/api"

export async function getChampions() {
    
    const result = await api.get("/campeonatos?limit=25&page=1")
        .then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log("Testes");
        });
}