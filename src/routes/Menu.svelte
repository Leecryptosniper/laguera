<script lang="ts">
  import { menuItems } from './menuStore'; 
  import type { MenuItem } from './menuStore'; 
  import { addToCart } from './CartStore.ts';

  let items: MenuItem[] = [];
  menuItems.subscribe((value: MenuItem[]) => {
    items = value;
  });
</script>

<style>
  .menu-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .menu-image {
    width: 100%;
    height: auto; /* Ensure image scales properly */
    transition: filter 0.3s ease;
  }

  .menu-image img {
    max-width: 100%;
    display: block;
    transition: transform 0.9s ease;
  }

  .menu-item:hover .menu-image {
    filter: blur(5px);
  }

  .menu-item:hover .menu-info {
    opacity: 1;
    transform: translateY(0);
  }

  .menu-info {
    position: absolute;
    top: 25%;
    left: 0%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    text-align: center;
    width: 100%;
  }

  /* Adjust font sizes and button styles for mobile */
  @media (max-width: 768px) {
    .menu-info {
      font-size: 14px;
    }

    button {
      font-size: 14px;
      padding: 5px 10px;
    }
  }
</style>

{#each items as item (item.id)}
  <div class="menu-item">
    <div class="menu-image">
      <img src={item.picture} alt={item.title} />
    </div>
    <div class="menu-info">
      <h2>{item.title}</h2>
      <p>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p>{item.description}</p>
      <button on:click={() => addToCart({
        id: item.id.toString(),
        name: item.title,
        price: item.price,
        quantity: 1,
        description: ''
      })}>
        Pidelo!
      </button>    
    </div>
  </div>
{/each}