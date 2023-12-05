<script>
    import { page } from '$app/stores';
    import MenuIcon from '$lib/images/MenuIcon.png';
    
    let menuOpen = false; // Initialize the menu state
    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };

    // Function to close the menu when focus is lost
    const closeMenu = () => {
        menuOpen = false;
    };
</script>

<div
    class="menu-icon"
    on:mouseover={toggleMenu}
    on:focus={toggleMenu} 
    on:mouseleave={closeMenu} 
    tabindex="0"
    role="button"
    aria-label="Toggle Menu"
>        
    <!-- Replace 'menu-icon.png' with the path to your menu icon image -->
    <img src={MenuIcon} alt="Menu Icon" />
</div>

<ul class={menuOpen ? 'open' : ''}>
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Menu</a>
    </li>
    <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <a href="/about">Inscribete</a>
    </li>
</ul>

<style>
    /* Your existing styles */

    .menu-icon {
           /* Add icon styling here */
        font-size: 24px;
        background-color: hsla(0, 0%, 100%, 0.452);
        border-radius: 15%;
        position: fixed; /* Make the cart icon fixed */
        top: 55px; /* Adjust the top position as needed */
        left: 20px; /* Adjust the right position as needed */
        cursor: pointer;
        z-index: 1000; /* Ensure the icon is above other content */
        border-radius: 50%;
    }

    ul {
        position: fixed;
        top: 7%;
        left: 25px; /* Updated to left */
        background-color: #efd1d1e6; /* Slightly transparent background color */
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

    ul.open {
        display: flex;
        opacity: 1; /* Show the dropdown */
        pointer-events: auto; /* Enable mouse events */
        transform: scaleY(1); /* Scale the dropdown in the Y-axis for smooth appearance */
    }

    .menu-icon:hover + ul,
    ul.open {
        opacity: 1; /* Show the dropdown on hover */
        pointer-events: auto; /* Enable mouse events on visible dropdown */
        transform: scaleY(1); /* Scale the dropdown in the Y-axis for smooth appearance */
    }

    /* Rest of your existing styles */
</style>
