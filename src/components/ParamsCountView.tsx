import { useCounterStore } from "../stores/StoreContext";

export const ParamsCountView = ({ count }: { count: number }) => {
  const counterStore = useCounterStore();
  return (
    <div className="counter-buttons">
      <button onClick={() => counterStore.decrement()}>-</button>
      <span>Count is {count}</span>
      <button onClick={() => counterStore.increment()}>+</button>
    </div>
  );
};
