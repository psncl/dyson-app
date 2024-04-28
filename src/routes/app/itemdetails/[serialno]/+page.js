import { items } from '../data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const item = items.find((it) => it.serialno === params.serialno);

    if (!item) throw error(404);
    
    return {
        item
    };
}