import CounterStore from './CounterStore';

// RootStore holds all stores in the application
class RootStore {
  counterStore: CounterStore;

  constructor() {
    // Initialize all stores
    this.counterStore = new CounterStore();
  }
}

export default RootStore;
