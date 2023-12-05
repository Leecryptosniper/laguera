<script lang="ts">
  import { menuItems } from './menuStore'; 
  import type { MenuItem } from './menuStore'; 
  import { addToCart } from './CartStore.ts';
  import { cartStore } from './CartStore.ts';

  let items: MenuItem[] = [];
  let currentIndex = 0;

  menuItems.subscribe((value: MenuItem[]) => {
      items = value;
  });

  function nextItem() {
      if (currentIndex < items.length - 1) {
          currentIndex++;
      }
  }

  function prevItem() {
      if (currentIndex > 0) {
          currentIndex--;
      }
  }

  function handleArrowKeyPress(event: KeyboardEvent, action: () => void) {
      if (event.key === 'Enter') {
          action();
      }
  }
  
  // Function to handle adding an item to the cart
  function addItemToCart() {
      if (items[currentIndex]) {
          const selectedItem = items[currentIndex];
          addToCart({
              id: selectedItem.id.toString(),
              name: selectedItem.title,
              price: selectedItem.price,
              quantity: 1,
              description: selectedItem.description
          });
      }
  }
</script>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    border: 4px solid #ddd;
  }

  .carousel-item {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    transition: transform 0.9s ease;
  }

  .carousel-image img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  .carousel-item:hover .carousel-image {
    transform: scale(1.1);
  }

  .carousel-item:hover .carousel-info {
    opacity: 1;
  }

  .carousel-info {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    text-align: center;
    width: 100%;
  }

  .arrow {
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer;
    padding: 5px;
    z-index: 10;
  }

  .arrow.left {
    left: 0;
  }

  .arrow.right {
    right: 0;
  }
</style>

<div class="carousel-container">
  <div class="carousel-item">
    <div class="carousel-image">
      <img src={items[currentIndex].picture} alt={items[currentIndex].title} />
    </div>
    <div class="carousel-info">
      <h2>{items[currentIndex].title}</h2>
      <p>${items[currentIndex].price}</p>
      <p>{items[currentIndex].description}</p>
      <button on:click={addItemToCart}>Pidelo</button>
    </div>
  </div>
</div>

<div 
  class="arrow left" 
  on:click={prevItem} 
  on:keydown={(e) => handleArrowKeyPress(e, prevItem)}
  tabindex="0" 
  role="button" 
  aria-label="Previous item">
  &lt;
</div>

<div 
  class="arrow right" 
  on:click={nextItem} 
  on:keydown={(e) => handleArrowKeyPress(e, nextItem)}
  tabindex="0" 
  role="button" 
  aria-label="Next item">
  &gt;
</div>
