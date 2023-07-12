import { create } from "zustand";

interface IUseStoreAuth {
  username: null | string;
  email: null | string;
}

export const useAuthStore = create<IUseStoreAuth>((set) => ({
  username: "jono",
  email: "jono@gmail.com",
}));
