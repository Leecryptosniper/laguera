import { writable } from 'svelte/store';
import pizzahawaii from '$lib/images/pizzahawaii.jpg';
import frijoles from '$lib/images/frijoles.jpg';
import puercos from '$lib/images/puercos.jpg'
import charros from '$lib/images/charros.jpg'

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
        title: "Frijoles",
        price: 45,
        picture: frijoles,
        description: "Frijoles hervidos",
        category: "Frijoles"
    },
    {
        id: 13,
        title: "Frijoles Puercos",
        price: 45,
        picture: puercos,
        description: "Frijoles Puercos con manteca natural",
        category: "Frijoles"
    },
    {
        id: 13,
        title: "Frijoles Charros",
        price: 45,
        picture: charros,
        description: "Frijoles Charros del Dia",
        category: "Frijoles"
    },
    // ... other items
]);