/**
 * Type definitions for webxr module
 */

export interface XRSessionConfig {
  mode: 'immersive-vr' | 'immersive-ar' | 'inline';
  features?: string[];
}

export interface InputSourceEvent {
  type: 'select' | 'squeeze' | 'move';
  source: XRInputSource;
  frame: XRFrame;
}

export interface XRCapabilities {
  supportsAR: boolean;
  supportsVR: boolean;
  supportsHandTracking: boolean;
}
