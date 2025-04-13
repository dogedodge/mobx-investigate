import { observer } from "mobx-react-lite";
import { useRef } from "react";

export const ObserverContainer = observer(
  ({ children }: { children: React.ReactNode }) => {
    const renderCount = useRef(0);
    renderCount.current++;

    return (
      <div>
        <h1>Observer Container</h1>
        <p>Parent component has been rendered {renderCount.current} times.</p>
        {/* Render components that use MobX observables */}
        {children}
      </div>
    );
  }
);
