import { create } from "zustand";
import { combine } from "zustand/middleware";
import { persist } from "zustand/middleware";

export interface Fields {
  id: string;
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
  persist(
    combine(initialState, (set) => ({
      setHistoric: (newHistoric: Fields) =>
        set((state) => ({ historic: [...state.historic, newHistoric] })),
      removeHistoric: (id: string) =>
        set((state) => ({
          historic: state.historic.filter((item) => item.id !== id),
        })),
    })),
    {
      name: "historic", 
    }
  )
);
