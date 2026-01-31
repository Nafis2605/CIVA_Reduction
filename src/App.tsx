import { useState } from 'react';
import './App.css';

/**
 * Root App Component
 *
 * This component is responsible for:
 * 1. Initializing core systems (renderer, state, input)
 * 2. Setting up the main layout
 * 3. Rendering UI from the ui/ module
 *
 * Business logic belongs in specific modules:
 * - UI components: ui/
 * - State management: state/
 * - 3D rendering: core/renderer/
 * - User input: interaction/
 *
 * This component should be mostly composition of other modules.
 */

function App(): JSX.Element {
  const [initialized, setInitialized] = useState(false);

  // Initialize systems on mount
  // TODO: Initialize from respective modules:
  // - Store from state/
  // - RendererManager from core/renderer/
  // - InputManager from interaction/
  // - DataLoader from data/

  const handleInit = (): void => {
    // Placeholder for initialization logic
    setInitialized(true);
  };

  return (
    <div className="app-container">
      <header>
        <h1>CIVA Reduction</h1>
        <p>Architecture-based development</p>
      </header>

      <main>
        {!initialized ? (
          <button onClick={handleInit}>Initialize Application</button>
        ) : (
          <p>Application initialized. Build UI components from ui/ module.</p>
        )}
      </main>

      <aside>
        <p>
          See{' '}
          <code>
            <a href="/docs/ARCHITECTURE.md">docs/ARCHITECTURE.md</a>
          </code>{' '}
          for module structure.
        </p>
      </aside>
    </div>
  );
}

export default App;
