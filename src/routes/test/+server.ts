import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            NODE_ENV: process.env.NODE_ENV || 'not set',
            PORT: process.env.PORT || 'not set',
            HOST: process.env.HOST || 'not set'
        }
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};