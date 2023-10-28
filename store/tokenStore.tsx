import { create } from "zustand";

interface ITokenStore {
  userTokenBalance: undefined | string;
  tokenPrice: undefined | string;
  allUserTokens:string[] | [] ;
  setUserTokenBalance: (price: string) => void;
  setTokenPrice: (price: string) => void;
  setAllUserTokens?:(token:string)=>void;
}

export const useTokenStore = create<ITokenStore>((set) => ({
  userTokenBalance: undefined,
  tokenPrice: undefined,
  allUserTokens: [],
  setUserTokenBalance: (price) => {
    set({ userTokenBalance: price });
  },
  setTokenPrice: (price) => {
    set({ tokenPrice: price });
  },

}));
