import { createApp } from 'vue';  // Import createApp instead of Vue
import App from './App.vue';
import router from './router'; // Import your router configuration

// Create the Vue app instance
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
