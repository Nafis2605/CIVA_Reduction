/**
 * Metrics Module
 *
 * Responsible for:
 * - Performance monitoring (FPS, memory, rendering time)
 * - User analytics and event tracking
 * - Data visualization metrics
 * - Performance profiling
 * - Telemetry collection
 * - Metrics aggregation and reporting
 *
 * API Contract:
 * - MetricsCollector: Collect performance and custom metrics
 * - PerformanceMonitor: Track FPS, frame time, memory
 * - AnalyticsTracker: Track user interactions
 * - MetricsReporter: Export/report collected data
 *
 * CONSTRAINTS:
 * - Non-blocking collection (async where possible)
 * - No impact on application performance
 * - Graceful degradation if unavailable
 *
 * DO NOT:
 * - Mutate application state (belongs in state/)
 * - Handle rendering (belongs in renderer/)
 * - Process user input (belongs in interaction/)
 * - Load data (belongs in data/)
 */

// Export public API
export type { MetricPoint, PerformanceMetrics } from './types';
export { MetricsCollector, PerformanceMonitor } from './metrics-collector';
