import { create } from "zustand";

type Store = {
  username: string;
};

type Actions = {
  setName: (username: string) => void;
};

export const useNameSlice = create<Store & Actions>((set) => ({
  username: "LinThitHtwe",
  setName: (username) => set({ username }),
}));
