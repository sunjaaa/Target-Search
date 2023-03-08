import { get } from "./network";

export const getInformations = (name: string): Promise<any> => {
  return get(name);
};
