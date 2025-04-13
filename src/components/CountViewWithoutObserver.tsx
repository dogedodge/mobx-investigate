import { useCounterStore } from "../stores/StoreContext";

export const CountViewWithoutObserver = () => {
  const counterStore = useCounterStore();
  return (
    <div className="counter-buttons">
      <button onClick={() => counterStore.decrement()}>-</button>
      <span>Count is {counterStore.count}</span>
      <button onClick={() => counterStore.increment()}>+</button>
    </div>
  );
};
