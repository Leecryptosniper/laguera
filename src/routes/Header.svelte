<script>
    import CartIcon from './CartIcon.svelte';
    import Logo from '$lib/images/logo.png';
    import Navbar from './navbar.svelte';
</script>

<style>
    /* Your existing styles... */

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #22222200;
        color: rgb(0, 0, 0);
        padding: 0px 0px;
        position: inherit; /* Make the header fixed */
        top: 0%;
        width: 100%;
        z-index: 1000;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; /* Center both vertically and horizontally */
    }

    .column-side {
        flex: 15%;
        justify-content: flex-start;
        left: 20px;
        position: fixed; /* Make side columns fixed */
        top: 75px; /* Adjust the top position as needed */
        bottom: 0; /* Adjust the bottom position as needed */
		background-color: #ffffff9e;
		height: 32px;
		border-radius: 50%;
    }

    .column-middle {
        flex: 100%;
        justify-content: center;
        margin-right: 0px; /* Add space between middle and right columns */
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f000;
        padding: 0px;
        height: 100%;
    }

    .logo-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .column img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
		
    }
</style>

<header class="header-container">
    <div class="column column-side">
        <Navbar />
    </div>

    <div class="column column-middle">
        <div class="logo-container">
            <img src={Logo} alt="Logo" />
        </div>
    </div>

    <div class="column">
        <CartIcon />
    </div>
</header>


