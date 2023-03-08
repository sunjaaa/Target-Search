import axios from "axios";

export interface Data {
  id: number;
  name: string;
}

// const instance = axios.create({ baseURL: BASE_URL, headers: {} });

// 서버에서 제공하는 API 주소
const BASE_URL = "http://localhost:3001/api";

// 서버에서 유저 정보를 가져오는 API에 GET 요청을 보내는 함수
export const get = async (str: string): Promise<any> => {
  try {
    const response = await axios.get<Data[]>(`${BASE_URL}/search/target`, {
      params: {
        target: str,
      },
    });
    console.log("get response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
