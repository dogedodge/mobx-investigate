import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { observer } from 'mobx-react-lite'
import { useCounterStore } from './stores/StoreContext'

// Use the observer HOC to make the component reactive to changes in the observable state
const App = observer(() => {
  // Use our MobX store instead of local state
  const counterStore = useCounterStore();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + MobX</h1>
      <div className="card">
        <div className="counter-buttons">
          <button onClick={() => counterStore.decrement()}>-</button>
          <span>Count is {counterStore.count}</span>
          <button onClick={() => counterStore.increment()}>+</button>
        </div>
        <button onClick={() => counterStore.reset()}>Reset</button>
        <p>
          Double count: {counterStore.doubleCount} (computed value)
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
})

export default App
