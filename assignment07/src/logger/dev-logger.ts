import winston from 'winston';
import { transports, format } from 'winston';

const { combine, timestamp, errors, colorize } = format;

export const buildDevLogger = () => {
	const logFormat = format.printf(({ level, message, stack, timestamp }) => {
		return `${timestamp} ${level}: ${stack || message}`;
	});

	return winston.createLogger({
		format: combine(
			colorize(),
			timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			errors({ stack: true }),
			logFormat
		),
		transports: [new transports.Console()],
	});
};
