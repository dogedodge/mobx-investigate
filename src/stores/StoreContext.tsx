import { createContext, useContext, ReactNode } from 'react';
import RootStore from './RootStore';

// Create the context
const StoreContext = createContext<RootStore | null>(null);

// Create a provider component
interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  // Create the store only once (singleton pattern)
  const root = new RootStore();
  
  return (
    <StoreContext.Provider value={root}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the store context
export const useStores = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error('useStores must be used within a StoreProvider');
  }
  return context;
};

// Custom hook to use a specific store
export const useCounterStore = () => {
  const { counterStore } = useStores();
  return counterStore;
};
