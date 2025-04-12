import CounterStore from "../stores/CounterStore";

export function renderCountView(counterStore: CounterStore) {
  return (
    <div className="counter-buttons">
      <button onClick={() => counterStore.decrement()}>-</button>
      <span>Count is {counterStore.count}</span>
      <button onClick={() => counterStore.increment()}>+</button>
    </div>
  );
}
