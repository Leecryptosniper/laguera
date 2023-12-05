import { writable } from 'svelte/store';
import taco1 from '$lib/images/taco1.jpg';
import taco2 from '$lib/images/taco2.jpg';
import dessert1 from '$lib/images/dessert1.jpg';
import dessert2 from '$lib/images/dessert2.jpg';
import dessert3 from '$lib/images/dessert3.jpg';
import cafe from '$lib/images/cafe.jpg';
import malteada from '$lib/images/malteada.jpg';
import malteada2 from '$lib/images/malteada2.jpg';
import pizzahawaii from '$lib/images/pizzahawaii.jpg';
import pizzapepp from '$lib/images/pizzapepp.jpg';

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
        picture: pizzahawaii,
        description: "Una Pizza Hawaiiana",
        category: "Pizza"
    },

    {
        id: 1,
        title: "Pastor",
        price: 35,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Pastor",
        category: "Tacos"
    },
    {
        id: 6,
        title: "Cafe",
        price: 35,
        picture: cafe,
        description: "Una Cafe",
        category: "Postres"
    },
    {
        id: 2,
        title: "Zincronizada",
        price: 35,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    {
        id: 7,
        title: "Malteada",
        price: 35,
        picture: malteada,
        description: "Una Malteada",
        category: "Postres"
    },
    {
        id: 3,
        title: "Pastor",
        price: 35,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Pastor",
        category: "Tacos"
    },
    {
        id: 9,
        title: "Pastel De Oreo",
        price: 35,
        picture: dessert1,
        description: "Una pastel de oreo",
        category: "Postres"
    },
    {
        id: 4,
        title: "Zincronizada",
        price: 35,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    {
        id: 11,
        title: "Cocktel De fruta loco",
        price: 35,
        picture: dessert3,
        description: "Una Cocktel De fruta loco",
        category: "Postres"
    },
    {
        id: 5,
        title: "Pastor",
        price: 35,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Pastor",
        category: "Tacos"
    },           
    {
        id: 8,
        title: "Malteada",
        price: 35,
        picture: malteada2,
        description: "Una Malteada",
        category: "Postres"
    },
    {
        id: 13,
        title: "Pizza De Peperoni",
        price: 45,
        picture: pizzapepp,
        description: "Una Pizza De Peperoni",
        category: "Pizza"
    },
    {
        id: 14,
        title: "Zincronizada",
        price: 45,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    {
        id: 15,
        title: "Pastor",
        price: 45,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Cecina",
        category: "Tacos"
    },
    {
        id: 16,
        title: "Zincronizada",
        price: 45,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    {
        id: 17,
        title: "Cecina",
        price: 45,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Cecina",
        category: "Tacos"
    },
    {
        id: 18,
        title: "Zincronizada",
        price: 45,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    {
        id: 19,
        title: "Pastor",
        price: 45,
        picture: taco1,
        description: "Una orden(3x) de Tacos de Cecina",
        category: "Tacos"
    },
    {
        id: 20,
        title: "Zincronizada",
        price: 45,
        picture: taco2,
        description: "Una orden(1x) Zincronizada",
        category: "Zincronizada"
    },
    // ... other items
]);