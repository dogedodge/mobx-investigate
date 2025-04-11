import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    // This automatically makes all properties observable, 
    // all methods actions, and all getters computed
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }

  // Example of a computed value
  get doubleCount() {
    return this.count * 2;
  }
}

export default CounterStore;
