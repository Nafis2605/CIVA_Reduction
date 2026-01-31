/**
 * State Module
 *
 * Responsible for:
 * - Global application state management
 * - State mutations via actions/reducers
 * - State persistence (local storage if needed)
 * - State subscriptions and change notifications
 * - Derived state computation
 * - State validation
 *
 * State Domains:
 * - UI state (panels, modals, selections)
 * - Data state (loaded datasets, current view)
 * - Interaction state (active tool, hover targets)
 * - Camera state (position, rotation, zoom)
 * - Rendering state (shader parameters, visual settings)
 *
 * API Contract:
 * - Store: Central state container
 * - Actions: State mutation functions
 * - Selectors: State access functions
 * - subscribe(listener): Subscribe to state changes
 *
 * CONSTRAINTS:
 * - Single source of truth
 * - All mutations happen through actions
 * - No direct state manipulation
 * - Immutable state updates
 *
 * DO NOT:
 * - Handle rendering (belongs in renderer/)
 * - Process user input (belongs in interaction/)
 * - Load external data (belongs in data/)
 * - Track metrics (belongs in metrics/)
 */

// Export public API
export type { AppState, Action } from './types';
export { Store } from './store';
export { createActions } from './actions';
export { createSelectors } from './selectors';
