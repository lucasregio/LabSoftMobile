import AsyncStorage from '@react-native-async-storage/async-storage';
import { Athletic } from './../components/AthleticSelectButton/index';
import api from './api';
import Atletica from './interfaces/Atletica';

export async function getAthletics(registerToken?:string): Promise<Athletic[]> {
  let array : Athletic[] = [];
  const token = await AsyncStorage.getItem('@token');
  const result  = await api
    .get("/atleticas", { headers: {'Authorization': 'Bearer '+  (!!registerToken ? registerToken: token)} })
    .then((res) => {
        
        res.data.forEach( (element:any) => {
          array.push({
            id: element.id,
            //image: 'http://'+element.logo,
            image: element.logo,
            name: element.nome,
          })
        });
        return array;
    })
    .catch((err) => {
      // return {
      //   data: {
      //     error: "Invalid Email and/or password.",
      //   },
      //   status: 401,
      // };
      throw new Error("Invalid token or path!");
      
    });
    return result;
}

export async function get(idAtletica: string) {
  let atletica: Atletica;
  try {
    atletica = (await api.get(`atleticas/${idAtletica}`)).data;
  } catch(error) {
    return Promise.reject(error);
  }

  return atletica;
}