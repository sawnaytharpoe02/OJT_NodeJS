import { buildDevLogger } from './dev-logger';
import { buildProductionLogger } from './prod-logger';

let logger: any = null;
if (process.env.NODE_ENV !== 'production') {
	logger = buildDevLogger();
} else {
	logger = buildProductionLogger();
}

export { logger };
