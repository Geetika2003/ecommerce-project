import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ContactPage from '../views/ContactPage.vue';
import OrderPage from '@/components/OrderPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/order/:id', name: 'order', component: OrderPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
