import { observer } from "mobx-react-lite";
import { useGetCount } from "../hooks/useGetCount";
import { useCounterStore } from "../stores/StoreContext";

export const CountViewWithHook = observer(() => {
  const counterStore = useCounterStore();
  const count = useGetCount();
  return (
    <div className="counter-buttons">
      <button onClick={() => counterStore.decrement()}>-</button>
      <span>Count is {count}</span>
      <button onClick={() => counterStore.increment()}>+</button>
    </div>
  );
});
