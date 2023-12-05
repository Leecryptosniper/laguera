import { writable } from 'svelte/store';

export type CartItem = {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
};

const initialCart = {
    items: [] as CartItem[],
    total: 0
};

let initialCartState = initialCart; // Default initial state

// Check if localStorage is available (in a browser environment)
if (typeof window !== 'undefined' && window.localStorage) {
    // Load the cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            initialCartState = JSON.parse(savedCart);
        } catch (error) {
            console.error('Error parsing saved cart:', error);
        }
    }
}

// Export the cartStore instance
export const cartStore = writable(initialCartState);

// Function to update the cart and save it to localStorage
const updateCart = (cart: typeof initialCart) => {
    // Check if localStorage is available (in a browser environment)
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
};


export const addToCart = (item: CartItem) => {
    cartStore.update((cart: typeof initialCart) => {
        const existingItem = cart.items.find((i: CartItem) => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({ ...item, quantity: 1 });
        }
        cart.total += item.price;
        return updateCart(cart);
    });
};

export const removeOneFromCart = (itemId: string) => {
    cartStore.update((cart: typeof initialCart) => {
        const itemIndex = cart.items.findIndex((i: CartItem) => i.id === itemId);
        if (itemIndex !== -1) {
            if (cart.items[itemIndex].quantity > 1) {
                cart.items[itemIndex].quantity -= 1;
                cart.total -= cart.items[itemIndex].price; // Deduct the item's price
            } else {
                cart.total -= cart.items[itemIndex].price; // Deduct the item's price
                cart.items.splice(itemIndex, 1);
            }
        }
        return updateCart(cart);
    });
};

// ... Rest of the code remains the same

const DESTINATION_NUMBER = "527421172698";  // Replace with your actual number

export const generateWhatsAppMessage = (deliveryOption: string, instructions: string) => {
    let message = "🛒 *Mi Orden:* \n\n";

    cartStore.subscribe(cart => {
        cart.items.forEach(item => {
            message += `*${item.name}* - $${item.price.toFixed(2)} x ${item.quantity} \n`;
        });
        message += `\n💰 *Total:* $${cart.total.toFixed(2)} \n\n`;

        // Add delivery option and instructions
        message += `🚚 *A domicilio?*: ${deliveryOption === 'yes' ? 'Sí' : 'No'} \n`;
        if (deliveryOption === 'yes' && instructions) {
            message += `📝 *Instrucciones*: ${instructions} \n`;
        }

        message += "🙏 Por Favor Confirmar Pedido.";
    });

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    const DESTINATION_NUMBER = "527421172698";  // Replace with your actual number
    const whatsappURL = `whatsapp://send?phone=${DESTINATION_NUMBER}&text=${encodedMessage}`;

    return whatsappURL;
};