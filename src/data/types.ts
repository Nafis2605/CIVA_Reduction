/**
 * Type definitions for data module
 */

export interface DataConfig {
  [key: string]: string; // Map of dataset names to paths/URLs
}

export interface LoadedData {
  name: string;
  data: unknown[];
  metadata: {
    loadedAt: number;
    rowCount: number;
    columnCount?: number;
  };
}

export interface DataPoint {
  [key: string]: number | string | boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}
