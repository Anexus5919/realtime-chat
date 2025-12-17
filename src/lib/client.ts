import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

const domain = typeof window !== 'undefined' ? window.location.host : 'localhost:3000'

export const client = treaty<App>(domain).api
