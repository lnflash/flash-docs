import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(308, '/en/docs-home/');
}
