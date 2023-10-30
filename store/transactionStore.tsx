import { create } from "zustand";

export interface logo {
  uri: string | undefined;
  width: number | undefined;
  height: number | undefined;
}
export interface result {
  blockNumber: string | undefined;
  timeStamp: string | undefined;
  hash: string | undefined;
  nonce: string | undefined;
  blockHash: string | undefined;
  transactionIndex: string | undefined;
  from: string | undefined;
  to: string | undefined;
  value: string | undefined;
  gas: string | undefined;
  gasPrice: string | undefined;
  isError: string | undefined;
  txreceipt_status: string | undefined;
  input: string | undefined;
  contractAddress: string | undefined;
  cumulativeGasUsed: string | undefined;
  gasUsed: string | undefined;
  confirmations: string | undefined;
  methodId: string | undefined;
  functionName: string | undefined;
}
export interface Response {
  status: string | undefined;
  message: string | undefined;
  data: result[];
}
interface ITransactionStore {
  AllProfileTransactions: result[] | undefined;
  setAllProfileTransactions: (tokens: result[]) => void;
}

export const useTransactionStore = create<ITransactionStore>((set) => ({
  AllProfileTransactions: undefined,
  setAllProfileTransactions: (price) => {
    set({ AllProfileTransactions: price });
  },
}));
