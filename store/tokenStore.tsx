import { create } from "zustand";
import { token } from "../types/Uniswap";
import { tokens } from "../Constants/swap";

export interface logo {
  uri: string | undefined;
  width: number | undefined;
  height: number | undefined;
}
export interface Token {
  contract_address: string | undefined;
  decimals: number | undefined;
  name: string | undefined;
  symbol: string | undefined;
  total_supply?: string | undefined;
  logos: logo[];
  url: [
    {
      name: string | undefined;
      url: string | undefined;
    }
  ];
  current_usd_price?: number | undefined;
  balance: string | undefined;
}
export interface Response {
  code: number | undefined;
  message: string | undefined;
  data: Token[];
  next_page?: number | undefined;
  count?: number | undefined;
}
interface ITokenStore {
  userBalance: string;
  userTokenBalance: undefined | string;
  tokenPrice: undefined | string;
  userAllTokens: Token[] | undefined;
  currentTokenRate: string | undefined;
  previousTokenRate: string | undefined;
  sendSwapToken: token | undefined;
  receiveSwapToken: token | undefined;
  setUserTokenBalance: (price: string) => void;
  setTokenPrice: (price: string) => void;
  setUserAllTokens: (tokens: Token[]) => void;
  setUserBalance: (balance: string) => void;
  setCurrentTokenRate: (rate: string) => void;
  setPreviousTokenRate: (rate: string) => void;
  setSendSwapToken: (token: token) => void;
  setReceiveSwapToken: (token: token) => void;
}

export const useTokenStore = create<ITokenStore>((set) => ({
  userTokenBalance: undefined,
  tokenPrice: undefined,
  userBalance: "",
  userAllTokens: undefined,
  currentTokenRate: undefined,
  previousTokenRate: undefined,
  sendSwapToken: tokens[0],
  receiveSwapToken: tokens[1],
  setSendSwapToken: (token) => {
    set({ sendSwapToken: token });
  },
  setReceiveSwapToken: (token) => {
    set({ receiveSwapToken: token });
  },
  setUserTokenBalance: (price) => {
    set({ userTokenBalance: price });
  },
  setTokenPrice: (price) => {
    set({ tokenPrice: price });
  },
  setUserAllTokens: (tokens) => {
    set({ userAllTokens: tokens });
  },
  setUserBalance: (balance) => {
    set({ userBalance: balance });
  },
  setCurrentTokenRate: (rate) => {
    set({ currentTokenRate: rate });
  },
  setPreviousTokenRate: (rate) => {
    set({ previousTokenRate: rate });
  },
}));
