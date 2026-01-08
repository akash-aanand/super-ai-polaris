// Logging Utility
// Use this instead of console.log to allow for easier filtering or removal in production.

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  private log(level: LogLevel, message: string, data?: any) {
    if (this.isProduction && level === 'debug') return;

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    switch (level) {
      case 'info':
        console.log(`%c${prefix}`, 'color: #3B82F6', message, data || '');
        break;
      case 'warn':
        console.warn(`%c${prefix}`, 'color: #F59E0B', message, data || '');
        break;
      case 'error':
        console.error(`%c${prefix}`, 'color: #EF4444', message, data || '');
        break;
      case 'debug':
        console.debug(`%c${prefix}`, 'color: #10B981', message, data || '');
        break;
    }
  }

  info(message: string, data?: any) { this.log('info', message, data); }
  warn(message: string, data?: any) { this.log('warn', message, data); }
  error(message: string, data?: any) { this.log('error', message, data); }
  debug(message: string, data?: any) { this.log('debug', message, data); }
}

export const logger = new Logger();
