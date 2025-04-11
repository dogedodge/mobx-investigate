import { ReactNode } from "react";
import RootStore from "./RootStore";
import { StoreContext } from "./StoreContext";

// Create a provider component
interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  // Create the store only once (singleton pattern)
  const root = new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};
