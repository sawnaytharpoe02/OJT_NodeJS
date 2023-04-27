import winston from 'winston';
import { transports, format } from 'winston';

const { combine, timestamp, json, errors } = format;

export const buildProductionLogger = () => {
	return winston.createLogger({
		format: combine(timestamp(), json(), errors({ stack: true })),
		defaultMeta: { service: 'user-service' },
		transports: [new transports.Console()],
	});
};
