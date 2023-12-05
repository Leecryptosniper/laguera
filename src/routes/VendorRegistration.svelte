<!-- VendorRegistration.svelte -->
<script lang='ts'>
    import firebase from 'firebase/app';
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
  
    let email = '';
    let password = '';
    let businessName = '';
    let contactInfo = '';
    let error: string | null = null;
  
    async function registerVendor() {
      try {
        const auth = getAuth();
        const response = await createUserWithEmailAndPassword(auth, email, password);
  
        const firestore = getFirestore();
        await setDoc(doc(firestore, 'vendors', response.user.uid), {
          businessName,
          contactInfo,
        });
  
        email = '';
        password = '';
        businessName = '';
        contactInfo = '';
      } catch (err: any) {
        error = err.message;
      }
    }
  
    // Add a submit event listener
    function handleSubmit(event: Event) {
      event.preventDefault(); // Prevent the default form submission behavior
      registerVendor(); // Call the registerVendor function
    }
  </script>
  
  <h2>Vendor Registration</h2>
  
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  
  <form on:submit={handleSubmit}>
    <label>
      Email:
      <input type="email" bind:value={email} required>
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} required>
    </label>
    <label>
      Business Name:
      <input type="text" bind:value={businessName} required>
    </label>
    <label>
      Contact Info:
      <input type="text" bind:value={contactInfo} required>
    </label>
    <button type="submit">Register</button>
  </form>
