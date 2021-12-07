import AsyncStorage from '@react-native-async-storage/async-storage';
import { PartnerCardProps } from './../pages/Partners/components/PartnerCard';
import api from './api';

export async function getPartners(registerToken?:string): Promise<PartnerCardProps[]> {
    let array : PartnerCardProps[] = [];
    const token = await AsyncStorage.getItem('@token');
    const result  = await api
      .get("/parceiros", { headers: {'Authorization': 'Bearer '+  (!!registerToken ? registerToken: token)} })
      .then((res) => {
          
        console.log(res.data);
          res.data.forEach( (element:any) => {
            array.push({
                icon: element.logo,
                title: element.titulo,
                description: element.descricao,
            })
          });   
          return array;
      })
      .catch((err) => {
        throw new Error("Invalid token or path!");
        
      });
      return result;
  }