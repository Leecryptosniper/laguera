<script>
	import Navbar from "../navbar.svelte";
  import About from '$lib/images/About.jpg'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<style>
  /* Apply CSS styles to the container that holds both Navbar and the image */
  .container {
    display: flex; /* Use flex layout to align Navbar and the image horizontally */
    flex-direction: column; /* Stack them vertically */
    justify-content: flex-start; /* Align them to the top of the container */
    align-items: center; /* Center them horizontally within the container */
    height: 100vh; /* Set the container height to the viewport height */
  }

  /* Apply CSS styles to the image container */
  .image-container {
    flex: 1; /* Allow the image container to take up remaining vertical space */
  }

  /* Apply CSS styles to the image itself */
  img {
    max-width: 100%; /* Ensure the image doesn't exceed its container width */
    max-height: 100%; /* Ensure the image doesn't exceed its container height */
    object-fit: contain; /* Maintain the aspect ratio and cover the container */
  }
</style>

<div class="container">
  
  <!-- Place the image within the image container -->
  <div class="image-container">
    <img src={About} alt="Unete!"/>
  </div>
</div>
