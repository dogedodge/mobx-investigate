# MobX Investigation

## Observation

### 1. Observer only tracks observable dependencies within the current component scope, without propagating to child components

**Explanation:**
When wrapping a component with MobX's `observer`, it creates a reactive context that automatically tracks observable property accesses **during the render phase** of that specific component. This tracking mechanism operates at component-level granularity:

- Child components maintain their own independent reactive contexts
- Parent component's observer won't automatically track observables used in child components
- To make child components reactive to observable changes, they need to be wrapped with `observer` individually

**Technical Mechanism:**
MobX uses a dependency tree structure where each observed component maintains its own reaction instance. The tracking occurs through property access interception using ES6 proxies (in modern implementations) or defineProperty (in legacy implementations).

### 2. Observer tracks synchronous function calls, including custom hooks, within components

**Explanation:**
The `observer` wrapper can detect observable dependencies in synchronous function calls during rendering:

- Applies to:
  - Regular functions called during render
  - Custom hooks invoked synchronously
  - Function components called directly in parent's render

**Why it works:**
MobX's reaction system tracks the executing context stack. When a function/hook is called **during the rendering phase**, any observable accessed within that function becomes part of the parent component's dependency list.

**Key limitations:**

- **Async functions:** Observables accessed in `setTimeout`/Promises won't be tracked
- **Indirect references:** Observable access through closure callbacks requires explicit observation

**Technical Insight:**
The tracking occurs through MobX's global `trackingDerivation` mechanism. When a reaction (observer component) starts tracking, it sets up a context that collects all observable accesses in the current execution stack.

---

This behavior shows how MobX balances automation with explicit control: automatic tracking within synchronous execution flows, while requiring explicit annotation (`observer`) for component boundaries. Understanding this helps optimize component updates and prevent unnecessary re-renders.
