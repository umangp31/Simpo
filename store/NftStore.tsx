import { create } from "zustand";

export interface NftMetaData {
  data: {
    blockchain: string | undefined;
    contract_address: string | undefined;
    token_id: string | undefined;
    erc_type: string | undefined;
    name: string | undefined;
    owner: string | undefined;
    symbol: string | undefined;
    image_uri: string | undefined;
    mint_time: number | undefined;
    mint_transaction_hash: string | undefined;
  };
}

export interface floorPrices {
  value: string | undefined;
  symbol: string | undefined;
  address: string | undefined;
}

export interface INftData {
  contract_address: string | undefined;
  erc_type: string | undefined;
  metadata: {} | undefined;
  mint_time: string | undefined;
  mint_transaction_hash: string | undefined;
  name: string | undefined;
  owner: string | undefined;
  symbol: string | undefined;
  token_id: string | undefined;
  token_uri: string | undefined;
  image_uri: string | undefined;
  total: number | undefined;
  total_string: string | undefined;
  traits: string | undefined;
  rarity_score: number | undefined;
  rarity_rank: number | undefined;
  floor_prices: floorPrices[];
  next_page: number | undefined;
  count: number | undefined;
}

export interface IUserNFT {
  code: number | undefined;
  message: string | undefined;
  data: INftData[];
}
export interface IProfileNft {
  AccountNft: INftData[] | undefined;
  setAccountNft: (item: INftData[]) => void;
}

export const useNftStore = create<IProfileNft>((set) => ({
  AccountNft: undefined,
  setAccountNft: (item) => {
    set({ AccountNft: item });
  },
}));
