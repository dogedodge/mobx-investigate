import { createContext, useContext } from "react";
import RootStore from "./RootStore";

// Create the context
export const StoreContext = createContext<RootStore | null>(null);

// Custom hook to use the store context
export const useStores = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return context;
};

// Custom hook to use a specific store
export const useCounterStore = () => {
  const { counterStore } = useStores();
  return counterStore;
};
