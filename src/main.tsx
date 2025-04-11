import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from './stores/StoreProvider.tsx'

// Configure MobX (optional, but recommended for better debugging)
import { configure } from 'mobx'

// Use strict mode for better debugging
configure({
  enforceActions: 'always', // Don't allow state changes outside actions
  computedRequiresReaction: true, // Computed values are not calculated unless actively observed
  reactionRequiresObservable: true, // Reactions should observe at least one observable
  observableRequiresReaction: true, // Observables should be accessed only inside reactions/computeds/actions
  disableErrorBoundaries: false, // Don't disable error boundaries in production
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
)
