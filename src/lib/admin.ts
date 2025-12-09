// Admin configuration
export const ADMIN_CONFIG = {
  // Change this password in production!
  // Use a strong password with at least 12 characters, numbers, and symbols
  PASSWORD: 'admin123',
  
  // Session settings
  SESSION_DURATION: 24 * 60 * 60, // 24 hours in seconds
  COOKIE_NAME: 'admin_session'
};

// Helper function to validate password
export function validatePassword(password: string): boolean {
  return password === ADMIN_CONFIG.PASSWORD;
}
