<script>
    import { cartStore, generateWhatsAppMessage, removeOneFromCart } from './CartStore';
    import Cart from '$lib/images/cart.png'
    let showCart = false; // Initially, cart dropdown is hidden

    const toggleCart = () => {
        showCart = !showCart;
    };

    let deliveryOption = 'yes'; // Initialize with a default value
    let instructions = '';

</script>

<style>
       .cart-icon {
        /* Add icon styling here */
        font-size: 24px;
        background-color: hsla(0, 0%, 100%, 0.452);
        border-radius: 15%;
        position: fixed; /* Make the cart icon fixed */
        top: 55px; /* Adjust the top position as needed */
        right: 20px; /* Adjust the right position as needed */
        cursor: pointer;
        z-index: 1000; /* Ensure the icon is above other content */
        border-radius: 50%;
    }

    .cart-dropdown {
        position: fixed;
        top: 10%;
        right: 35px; /* Updated to left */
        background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent background color */
        border: 1px solid #ddd; /* Add a border with a light gray color */
        border-radius: 10px; /* Add rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow */
        padding: 10px;
        min-width: 200px;
        z-index: 100;
        opacity: 0; /* Initially hide the dropdown */
        pointer-events: none; /* Disable mouse events on hidden dropdown */
        transition: opacity 0.2s ease, transform 0.2s ease; /* Add smooth transitions for opacity and transform */
        transform-origin: top center; /* Set the transform origin to appear below the cart icon */
    }

    .cart-icon:hover + .cart-dropdown,
    .cart-dropdown:hover {
        opacity: 1; /* Show the dropdown on hover */
        pointer-events: auto; /* Enable mouse events on visible dropdown */
        transform: scaleY(1); /* Scale the dropdown in the Y-axis for smooth appearance */
    }

    /* Existing code */


    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .cart-item p {
        margin: 0;
    }

    .cart-item button {
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 5px 10px;
        cursor: pointer;
    }

    .total {
        margin-top: 10px;
        text-align: right;
        font-weight: bold;
    }

    /* Existing code */

    .order-now {
        display: block;
        margin-top: 10px;
        text-align: center;
        background-color: rgba(0, 128, 0, 0.6); /* Semi-transparent green background */
        color: white; /* Text color */
        padding: 10px; /* Add padding for better appearance */
        border: none; /* Remove border */
        border-radius: 20px; /* Add rounded corners */
        cursor: pointer; /* Change cursor on hover */
        transition: background-color 0.2s ease; /* Add a smooth transition for background color */
    }

    .order-now:hover {
        background-color: rgba(0, 128, 0, 0.8); /* Darker green on hover */
    }


    .remove-icon {
        background-color: transparent;
        border: none;
        padding: 0;
        font-size: 16px;
        line-height: 1;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
    /* Styles for mobile screens */
    .cart-dropdown {
        position: fixed;
        top: 14%;
        left: 5px; /* Adjust the left position for mobile */
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 10px;
        min-width: 200px;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
        transform-origin: top center;
    }
}
</style>

<div
    class="cart-icon"
    on:click={toggleCart}
    on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleCart();
        }
    }}
    tabindex="0"
    role="button"
    aria-label="Toggle Cart"
>
    <!-- Use the Cart image directly -->
    <img src={Cart} alt="Cart" />
</div>

<!-- Existing code -->

{#if showCart}
    <div class="cart-dropdown">
        <h2>Tu Orden</h2>
        {#each $cartStore.items as item (item.id)}
        <div class="cart-item">
            <p><strong>{item.name}</strong></p>
            <p>${item.price.toFixed(2)}</p>
            <button class="remove-icon" on:click={() => removeOneFromCart(item.id)}>❌</button> <!-- Use "❌" as the tiny "x" icon -->
        </div>
        {/each}
        <hr /> <!-- Add a horizontal line beneath the items -->

        <p class="total">Total: ${$cartStore.total.toFixed(2)}</p>
        <hr /> <!-- Add a horizontal line beneath the total -->

        <div class="delivery-option">
            <label for="delivery-dropdown">A domicilio?</label>
            <select id="delivery-dropdown" bind:value={deliveryOption}>
                <option value="yes">Si</option>
                <option value="no">No</option>
            </select>
        </div>
        
        <div class="delivery-instructions">
            <label for="delivery-instructions">Domicilio:</label>
            <textarea id="delivery-instructions" rows="3" bind:value={instructions}></textarea>
        </div>        

        <!-- Convert the "Ordena" link into a button -->
        <button class="order-now" on:click={() => window.location.href = generateWhatsAppMessage(deliveryOption, instructions)}>Ordena</button>
    </div>
{/if}