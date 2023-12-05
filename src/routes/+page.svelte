<script>
	import Menu from './Menu.svelte';
	import Carousel from './Carousel.svelte';
	import Banner from './Banner.svelte';
	import Banner2 from './Banner2.svelte';
	import Navbar from './navbar.svelte';
	import TabbedMenu from './TabbedMenu.svelte';
</script>

<svelte:head>
	<title>La Guera</title>
	<meta name="description" content="AUTOMATIZA TU NEGOCIO HOY!!!" />
</svelte:head>

<section>

	<div>
		<TabbedMenu/>
	</div>

	<div>
		<Banner/>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/* Add margin to create divisions between components */
	section > div:not(:last-child) {
		margin-bottom: 20px; /* Adjust this value as needed */
	}
</style>
