import axios from "axios";

export const postData = async () => {
  try {
    //응답 성공
    const response = await axios.post("http://localhost:3001/api/users", {
      //보내고자 하는 데이터
      // username: "유재석",
    });
    console.log("response", response);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
};

export {};

interface User {
  id: number;
  name: string;
}

// 서버에서 제공하는 API 주소
const API_URL = "http://localhost:3001/api";

// 서버에서 유저 정보를 가져오는 API에 GET 요청을 보내는 함수
export const getUsers = async (str: string): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}/users/user`, {
      params: {
        name: str,
      },
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTarget = async (str: string): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}/search/target`, {
      params: {
        target: str,
      },
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
