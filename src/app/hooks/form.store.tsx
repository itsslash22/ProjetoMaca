import create from "zustand";
import { combine } from "zustand/middleware";

export interface Fields {
  date: string;
  weight: number;
}

interface HistoricStoreState {
  historic: Fields[];
}

const initialState: HistoricStoreState = {
  historic: [],
};

export const useHistoricStore = create(
  combine(initialState, (set) => ({
    setHistoric: (newHistoric: Fields) =>
      set((state) => ({ historic: [...state.historic, newHistoric] })),
  }))
);
