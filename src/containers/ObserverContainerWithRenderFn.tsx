import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useCounterStore } from "../stores/StoreContext";
import { renderCountView } from "../components/renderCountView";

export const ObserverContainerWithRenderFn = observer(() => {
  const counterStore = useCounterStore();
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div>
      <h1>Observer Container</h1>
      <p>Parent component has been rendered {renderCount.current} times.</p>
      {/* Render components that use MobX observables */}
      {renderCountView(counterStore)}
    </div>
  );
});
