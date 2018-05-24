export const corsOptions = {
  origin: new RegExp(process.env.CORS_ORIGIN) || '*'
}
