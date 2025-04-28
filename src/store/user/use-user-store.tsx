import { create } from "zustand";
import { User } from "./types";

type Store = {
  user: User;
  setUser: (user: User) => void;
};

const defaultUser: User = {
  username: "",
  avatarUrl: "",
  email: "",
};

export const useUserStore = create<Store>()((set) => ({
  user: defaultUser,
  setUser: (user: User) => set(() => ({ user: user })),
}));
