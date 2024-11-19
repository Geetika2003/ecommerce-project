<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <div class="logo">LIVING LUXE</div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/products" class="nav-link" exact-active-class="active">Products</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>
      </nav>
    </header>

    <!-- Product List -->
    <div>
      <br>
      <div class="product-container">
        <div
          v-for="product in products"
          :key="product.id"
          class="product-card animated-card"
        >
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <router-link :to="`/order/${product.id}`">Order Now</router-link>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Living Luxe. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
      { id: 1, name: 'Elegant Festive Décor Set', description: 'Elevate your festive celebrations with this vibrant and elegant home décor set, blending tradition and modern charm.', image: 'https://shoppersstores.com/wp-content/uploads/2020/10/Best-Home-Decor-Items-for-Indian-Festival.jpg' },
        { id: 2, name: 'Berber Diamond Rug', description: 'A handcrafted Moroccan Berber rug featuring a timeless diamond pattern, blending elegance with cozy charm.', image: 'https://www.therugseller.co.uk/blogwp/wp-content/uploads/2016/10/il_fullxfull_410842925_1qu2.jpg' },
        { id: 3, name: 'Product 3', description: 'Description 3', image: 'https://tse3.mm.bing.net/th?id=OIP.P1rZUjXkMT9zLrOibg9e4wHaD4&pid=Api&P=0&h=180' },
        { id: 4, name: 'Product 4', description: 'Description 4', image: 'https://tse1.mm.bing.net/th?id=OIP.5__D4KnW7kA_17KglDAtEAHaE8&pid=Api&P=0&h=180' },
        { id: 5, name: 'Product 5', description: 'Description 5', image: 'https://tse3.mm.bing.net/th?id=OIP.bxLdLiM4KVodhxSunU_CsAHaGa&pid=Api&P=0&h=180' },
        { id: 6, name: 'Product 6', description: 'Description 6', image: 'https://tse1.mm.bing.net/th?id=OIP.Il1mssngEdVTJwS9vUqviwAAAA&pid=Api&P=0&h=180' },
        { id: 7, name: 'Product 7', description: 'Description 7', image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https:%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F2%2F2016%2F07%2F4723bcf799e249fcc17892691bed33d368b73e4f.jpeg' },
        { id: 8, name: 'Product 8', description: 'Description 8', image: 'https://m.media-amazon.com/images/I/61YrS69FB9L._AC_UL320_.jpg' },
        { id: 9, name: 'Product 9', description: 'Description 9', image: 'https://m.media-amazon.com/images/I/71S9dg5+wbL._AC_UL320_.jpg' },
        { id: 10, name: 'Product 10', description: 'Description 10', image: 'https://m.media-amazon.com/images/I/71WBIhxYlZL._AC_UL320_.jpg' },
        { id: 11, name: 'Product 11', description: 'Description 11', image: 'https://m.media-amazon.com/images/I/51IBUdlZweL._AC_UL640_QL65_.jpg' },
        { id: 12, name: 'Product 12', description: 'Description 12', image: 'https://m.media-amazon.com/images/I/61bhUmPNfmL._AC_UL320_.jpg' },
        { id: 13, name: 'Product 13', description: 'Description 13', image: 'https://m.media-amazon.com/images/I/71fQVB7GylL._AC_UL320_.jpg' },
        { id: 14, name: 'Product 14', description: 'Description 14', image: 'https://m.media-amazon.com/images/I/71Mly7EKFYL._AC_UL320_.jpg' },
        { id: 15, name: 'Product 15', description: 'Description 15', image: 'https://m.media-amazon.com/images/I/71j8by4bU0L._AC_UL320_.jpg' },
        { id: 16, name: 'Product 16', description: 'Description 16', image: 'https://m.media-amazon.com/images/I/41-knssZyGL._AC_UL320_.jpg' },
        { id: 17, name: 'Product 17', description: 'Description 17', image: 'https://m.media-amazon.com/images/I/71nS6Oe0fJL._AC_UL320_.jpg' },
        { id: 18, name: 'Product 18', description: 'Description 18', image: 'https://m.media-amazon.com/images/I/61K4tGcbJfL._AC_UL320_.jpg' },
        { id: 19, name: 'Product 19', description: 'Description 19', image: 'https://m.media-amazon.com/images/I/51H2pAkicTL._AC_UL320_.jpg' },
        { id: 20, name: 'Product 20', description: 'Description 20', image: 'https://m.media-amazon.com/images/I/81lDMsQoV2L._AC_UL320_.jpg' },
        { id: 21, name: 'Product 21', description: 'Description 21', image: 'https://m.media-amazon.com/images/I/718GzU7QGGL._AC_UL320_.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 15px;
  animation: fadeIn 1s ease-in-out;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
}

.nav-link:hover {
  background-color: #575757;
  color: #fff;
  transform: scale(1.1);
}

.nav-link.active {
  border-bottom: 2px solid white;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  animation: fadeInUp 1s ease-in-out;
}

.product-card {
  text-align: center;
  width: 250px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  animation: cardFadeIn 0.8s ease-in-out forwards;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card h2 {
  font-size: 18px;
  margin-top: 10px;
}

.product-card p {
  font-size: 14px;
  color: #777;
}

.product-card a {
  margin-top: 15px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.product-card a:hover {
  background-color: #575757;
}

h1 {
  font-family: sans-serif;
  font-size: 2rem;
  padding-left: 2rem;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
