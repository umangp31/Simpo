import { create } from "zustand";

interface Token {
  code: number | undefined ;
  message: string | undefined ;
  data: {
    contract_address: string | undefined ;
    decimals: number | undefined;
    name: string | undefined;
    symbol: string | undefined;
    total_supply?: string | undefined;
    logos: [
      {
        uri: string | undefined;
        width: number | undefined;
        height: number | undefined;
      }
    ];
    url: [
      {
        name: string | undefined;
        url: string | undefined;
      }
    ];
    current_usd_price?:number | undefined,
    balance:string | undefined,
  };
  next_page?:number | undefined,
  count?:number | undefined,
}
interface ITokenStore {
  userTokenBalance: undefined | string;
  tokenPrice: undefined | string;
  userAllTokens:Token[];
  setUserTokenBalance: (price: string) => void;
  setTokenPrice: (price: string) => void;
  setUserAllTokens: (tokens: Token[]) => void;
}

export const useTokenStore = create<ITokenStore>((set) => ({
  userTokenBalance: undefined,
  tokenPrice: undefined,
  userAllTokens: [],
  setUserTokenBalance: (price) => {
    set({ userTokenBalance: price });
  },
  setTokenPrice: (price) => {
    set({ tokenPrice: price });
  },
  setUserAllTokens: (tokens) => {
    set({ userAllTokens: tokens });
  },

}));
