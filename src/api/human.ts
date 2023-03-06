import { get } from "./network";

export const getInformations = (name: any): Promise<any> => {
  return get(name);
};
