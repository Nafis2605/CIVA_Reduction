/**
 * Complete application configuration schema
 */

export interface DatasetConfig {
  basePath: string;
  defaultDatasetId: string;
  maxSizeMB: number;
  supportedFormats: string[];
}

export interface LODConfig {
  mediumThresholdM: number;
  lowThresholdM: number;
  maxDistanceM: number;
  minPointSizePx: number;
  maxPointSizePx: number;
}

export interface ROIConfig {
  minSizeM: number;
  maxSizeM: number;
  defaultShape: 'box' | 'sphere' | 'cylinder';
  defaultSizeM: number;
}

export interface RenderingConfig {
  defaultOpacity: number;
  sampleDistanceM: number;
  pointSizePx: number;
  backgroundColor: string;
  gridEnabled: boolean;
  gridCellSizeM: number;
  antialiasEnabled: boolean;
  targetFPS: number;
}

export interface XRConfig {
  enabled: boolean;
  supportedModes: ('immersive-vr' | 'immersive-ar' | 'inline')[];
  handTrackingEnabled: boolean;
  hapticFeedbackEnabled: boolean;
}

export interface LoggingConfig {
  enabled: boolean;
  level: 'debug' | 'info' | 'warn' | 'error';
  logPerformance: boolean;
  logInteractions: boolean;
  maxMessagesInMemory: number;
}

export interface PerformanceConfig {
  monitoringEnabled: boolean;
  fpsMonitorIntervalMs: number;
  memoryWarningThresholdMB: number;
  autoOptimizeEnabled: boolean;
  autoOptimizeFPSThreshold: number;
}

export interface AppConfig {
  appName: string;
  version: string;
  environment: string;
  dataset: DatasetConfig;
  lod: LODConfig;
  roi: ROIConfig;
  rendering: RenderingConfig;
  xr: XRConfig;
  logging: LoggingConfig;
  performance: PerformanceConfig;
}
