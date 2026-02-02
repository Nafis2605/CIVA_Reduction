/**
 * Type definitions for state module
 */

export interface UIState {
  activePanel: string | null;
  selectedDataset: string | null;
  isLoading: boolean;
}

export interface DataState {
  loadedDatasets: Map<string, unknown[]>;
  currentView: 'scatter' | 'timeline' | 'table';
}

export interface InteractionState {
  activeTool: 'select' | 'pan' | 'zoom' | 'measure';
  hoverTarget: string | null;
}

export interface CameraState {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number; w: number };
  zoom: number;
}

export interface AppState {
  ui: UIState;
  data: DataState;
  interaction: InteractionState;
  camera: CameraState;
}

export type Action = {
  type: string;
  payload?: unknown;
};

export type Listener = (state: AppState) => void;
