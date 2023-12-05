import { writable } from 'svelte/store';
import pizzahawaii from '$lib/images/pizzahawaii.jpg';
import frijoles from '$lib/images/frijoles.jpg';

// Define the interface for a menu item
export interface MenuItem {
    id: number;
    title: string;
    price: number;
    picture: string;
    description: string;
    category: string;
}

// Use the interface to type the writable store
export const menuItems = writable<MenuItem[]>([
    {
        id: 12,
        title: "Pizza Hawaiiana",
        price: 45,
        picture: frijoles,
        description: "Una Pizza Hawaiiana",
        category: "Frijoles"
    },
    // ... other items
]);