import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Fields } from "../components/form";

interface IHistoricStoreFields {
  historic: Fields[];
}

interface IHistoricStore extends IHistoricStoreFields {
  setHistoric(isHandover: Fields): void;
}

const historicStore = createStore<IHistoricStore>()
  persist(
    immer<IHistoricStore>((set) => ({
      historic: [],
      setHistoric: (newHistoric) => {
        set(({ historic }) => {
          return {
            historic: [...historic, newHistoric],
          };
        });
      },
    })),
    {
      name: "historic",
    }
  )

  export default historicStore;

