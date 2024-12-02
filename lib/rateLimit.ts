import { RateLimiterMemory } from 'rate-limiter-flexible';

interface RateLimitConfig {
  points: number;
  duration: number;
  blockDuration: number;
}

const defaultConfig: RateLimitConfig = {
  points: 5,
  duration: 60,
  blockDuration: 60 * 2,
};

const rateLimiter = new RateLimiterMemory(defaultConfig);

export async function rateLimit(identifier: string) {
  try {
    const res = await rateLimiter.consume(identifier);
    return { 
      success: true,
      remaining: res.remainingPoints,
      resetAfter: Math.round(res.msBeforeNext / 1000)
    };
  } catch (error: unknown) {
    // Handle RateLimiterRes error specifically
    if (error && typeof error === 'object' && 'msBeforeNext' in error) {
      return { 
        success: false,
        resetAfter: Math.round((error as { msBeforeNext: number }).msBeforeNext / 1000)
      };
    }
    
    // Log unexpected errors but fail open
    console.error('Unexpected rate limit error:', error);
    return { success: true };
  }
}