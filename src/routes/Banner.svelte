<script>
    import { onMount } from 'svelte';

    let bannerWidth = 0;

    onMount(() => {
        const bannerElement = document.getElementById('promo-banner');
        if (bannerElement) {
            bannerWidth = bannerElement.offsetWidth;
            bannerElement.style.setProperty('--banner-width', `${bannerWidth}px`);
        }
    });
</script>

<div class="page-container">
    <div class="banner-container">
        <div id="promo-banner" class="promo-banner">
            Anuncia tu Comida Hoy!!!
        </div>
    </div>

    <div class="content-container">
        <!-- Your content goes here -->
    </div>
</div>

<style>
    .page-container {
        position: relative;
        width: 100%;
        overflow: hidden; /* Hide overflow to prevent text from overflowing */
        border: 2px solid #39FF14;
        border-radius: 10px;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .banner-container {
        position: relative;
        top: 0;
        left: 0;
        background-color: transparent;
        color: rgb(255, 255, 255);
        font-size: 24px;
        text-shadow: 0px 0px 10px #39FF14;
        white-space: nowrap;
        padding: 10px 0px;
        animation: scrollBanner 6s linear infinite;
        width: 100%; /* Ensure the banner spans the full width */
        overflow: hidden; /* Hide overflow to prevent text from overflowing */
    }

    .content-container {
        flex: 1; /* Take up remaining vertical space */
        width: 100%;
    }

    @keyframes scrollBanner {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .promo-banner {
            font-size: 18px;
            padding: 5px 75px;
        }
    }
</style>
