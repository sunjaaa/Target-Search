import { useRecoilState } from "recoil";
import { api } from "../api";
import { Data } from "../api/network";
import { app } from "../recoils";

// 바로 전에 불러온 정보값을 다시 가져오는 함수
export const useHuman = () => {
  const [human, setHuman] = useRecoilState(app.human.atomHuman);

  const getHuman = async (str: string): Promise<void> => {
    const response = await fetchHuman(str);
    console.log("useHuman.ts responese $$$", response);
    setHuman(response);
  };

  // const fetchHuman = async (str: string): Promise<any> => {
  //   const response = api.human.getInformations(str);
  //   return response;
  // };

  return [human, getHuman];
};

export const fetchHuman = async (str: any): Promise<any> => {
  const response = api.human.getInformations(str);
  return response;
};
