import { create } from "zustand";

interface IAuthStore {
  publicKey: undefined | string;
  privateKey: undefined | string;
  setpublicKey: (profile: string) => void;
  setprivateKey: (profile: string) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  publicKey: undefined,
  privateKey: undefined,
  setpublicKey: (profile) => {
    set({ publicKey: profile });
  },
  setprivateKey: (profile) => {
    set({ privateKey: profile });
  },
}));
