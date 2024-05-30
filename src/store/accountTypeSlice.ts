import { create } from "zustand";

type Store = {
  isUser: boolean;
};

type Actions = {
  setIsUser: (isUser: boolean) => void;
};

export const useAccountTypeSlice = create<Store & Actions>((set) => ({
  isUser: true,
  setIsUser: (isUser) => set({ isUser }),
}));
