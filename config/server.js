import { NODE_ENV } from './env'

export const CORS_OPTIONS = {
  origin: new RegExp(process.env.CORS_ORIGIN) || '*'
}

export const SERVER_PORT = NODE_ENV === 'production' ? 80 : 3003
