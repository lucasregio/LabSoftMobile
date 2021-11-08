import { Athletic } from './../components/AthleticSelectButton/index';
import axios from "axios";
import { useAuth } from '../contexts/auth';

interface athleticData{
  athletics?: Athletic[];
  error?: string;
}

export interface Response{
  data: athleticData;
  status: number;
}

export function validToken(): string{
    const { token } = useAuth();

    console.log("O valor do token que eu peguei é: ",token)
    if(!!token){
        return token;
    }

    return '';
}

export async function getAthletics(): Promise<Response> {
  const result = await axios
    .get("http://178.238.233.159:5555/atleticas", { headers: {'Authorization': 'Bearer ' + validToken() } })
    .then((res) => {
        return  {
            data: {
              athletics: res.data,
            },
            status: res.status,
        }
    })
    .catch((err) => {
      return {
        data: {
          error: "Invalid Email and/or password.",
        },
        status: 401,
      };
    });
  console.log("resultado getathletics: ", result.status);
  return result;
}
