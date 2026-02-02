/**
 * Type definitions for renderer module
 */

export interface RendererConfig {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  pixelRatio?: number;
  antialias?: boolean;
}

export interface SceneConfig {
  background?: number;
  fog?: boolean;
  fogColor?: number;
  fogNear?: number;
  fogFar?: number;
}

export interface CameraConfig {
  type: 'perspective' | 'orthographic';
  fov?: number;
  near?: number;
  far?: number;
}
