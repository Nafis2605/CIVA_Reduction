/**
 * Data Module
 *
 * Responsible for:
 * - Data loading from files/APIs
 * - Data parsing (CSV, JSON, Binary)
 * - Data validation and normalization
 * - Caching strategies
 * - Data transformation pipelines
 * - No hardcoded paths (use environment variables or config)
 *
 * API Contract:
 * - DataLoader: Load data from various sources
 * - DataValidator: Validate data structure and schema
 * - DataTransformer: Transform/normalize data formats
 * - CacheManager: Cache frequently accessed data
 *
 * CONSTRAINTS:
 * - All data paths must come from config or environment variables
 * - No hardcoded file paths
 * - Async operations only (no sync file reads in browser)
 * - Error handling with descriptive messages
 *
 * DO NOT:
 * - Render data (belongs in ui/)
 * - Manage state (belongs in state/)
 * - Handle user input (belongs in interaction/)
 */

// Export public API
export type { DataConfig, LoadedData } from './types';
export { DataLoader, DataValidator } from './data-loader';
