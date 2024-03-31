import { create } from "zustand";
import { Crypto } from "../hooks/use-socket";

export interface ICrypto {
  name: Crypto;
  lastPrice: number;
  priceChangePercent: number;
}

export interface IHistoricalTradeResponse {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

export interface IHistoricalTrade {
  price: number;
  time: string;
}

interface ICryptoState {
  cryptoData: ICrypto[];
  historicalTrade: IHistoricalTrade[];
  updateCryptoData: (newData: ICrypto) => void;
  updateHistoricalTrade: (newData: IHistoricalTrade[]) => void;
}

export const useStore = create<ICryptoState>((set) => ({
  cryptoData: [],
  historicalTrade: [],
  updateCryptoData: (newData: ICrypto) =>
    set((state: ICryptoState) => {
      if (!state.cryptoData.some((el) => el.name === newData.name)) {
        return {
          cryptoData: [...state.cryptoData, newData],
        };
      }

      return {
        cryptoData: state.cryptoData.map((el) => {
          if (el.name === newData.name) {
            return newData;
          }

          return el;
        }),
      };
    }),
  updateHistoricalTrade: (newData: IHistoricalTrade[]) =>
    set(() => ({
      historicalTrade: newData,
    })),
}));
