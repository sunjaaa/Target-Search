import { atom } from "recoil";
import { Data } from "../../../api/network";
import { key } from "../key";

const localStorageEffect =
  (key: any) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const atomHuman = atom<any>({
  key: key.human,
  default: [],
  effects: [localStorageEffect("info_human")],
});
