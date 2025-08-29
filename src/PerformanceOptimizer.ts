/**
 * Performance optimization utilities for the Snowflake SQL Validator
 */
export class PerformanceOptimizer {
  // LRU Cache implementation for better memory management
  private static lruCache = new Map<string, any>();
  private static readonly MAX_CACHE_SIZE = 500;
  private static readonly CACHE_ACCESS_COUNT = new Map<string, number>();

  /**
   * Get cached value with LRU eviction
   */
  static getCached<T>(key: string): T | undefined {
    if (this.lruCache.has(key)) {
      // Update access count
      const count = this.CACHE_ACCESS_COUNT.get(key) || 0;
      this.CACHE_ACCESS_COUNT.set(key, count + 1);
      return this.lruCache.get(key);
    }
    return undefined;
  }

  /**
   * Set cached value with LRU eviction
   */
  static setCached<T>(key: string, value: T): void {
    // Evict least recently used items if cache is full
    if (this.lruCache.size >= this.MAX_CACHE_SIZE) {
      this.evictLRU();
    }

    this.lruCache.set(key, value);
    this.CACHE_ACCESS_COUNT.set(key, 1);
  }

  /**
   * Evict least recently used items from cache
   */
  private static evictLRU(): void {
    let minKey = '';
    let minCount = Infinity;

    for (const [key, count] of this.CACHE_ACCESS_COUNT.entries()) {
      if (count < minCount) {
        minCount = count;
        minKey = key;
      }
    }

    if (minKey) {
      this.lruCache.delete(minKey);
      this.CACHE_ACCESS_COUNT.delete(minKey);
    }
  }

  /**
   * Clear all caches
   */
  static clearAllCaches(): void {
    this.lruCache.clear();
    this.CACHE_ACCESS_COUNT.clear();
  }

  /**
   * Get cache statistics
   */
  static getCacheStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.lruCache.size,
      maxSize: this.MAX_CACHE_SIZE,
      hitRate: 0 // TODO: Implement hit rate calculation
    };
  }

  /**
   * Debounce function calls for performance
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Throttle function calls for performance
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Batch multiple operations for better performance
   */
  static batch<T>(items: T[], batchSize: number, processor: (batch: T[]) => void): void {
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      processor(batch);
    }
  }

  /**
   * Measure execution time of a function
   */
  static measureTime<T>(fn: () => T, label: string): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label} took ${end - start}ms`);
    return result;
  }
}
