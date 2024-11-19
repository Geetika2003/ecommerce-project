<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <div class="logo">LIVING LUXE</div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          ☰
        </button>
      </nav>
    </header>

    <!-- Product Order Details -->
    <div v-if="product" class="order-container">
      <div class="order-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h2>{{ product.name }}</h2><br>
        <p>{{ product.description }}</p><br>
        <p><strong>Price:</strong> ₹{{ product.price }}</p>
        <p><strong>GST (18%):</strong> ₹{{ gstAmount }}</p>
        <p><strong>Total Amount (with GST):</strong> ₹{{ totalAmount }}</p>
        <button class="order-btn">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null, // Will hold the product data
    };
  },
  computed: {
    // Calculate GST (18% of product price)
    gstAmount() {
      return (this.product.price * 18) / 100;
    },
    // Calculate total amount including GST
    totalAmount() {
      return this.product.price + this.gstAmount;
    }
  },
  created() {
    const productId = this.$route.params.id;
    this.product = this.getProductById(productId);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const navLinks = document.querySelector(".nav-links");
      if (this.isMenuOpen) {
        navLinks.classList.add("responsive");
      } else {
        navLinks.classList.remove("responsive");
      }
    },
    // Simulate fetching product details by ID
    getProductById(id) {
      const products = [
        { id: 1, name: 'Elegant Festive Décor Set', description: 'Add a touch of warmth and tradition to your home with this Elegant Festive Décor Set. Perfect for Indian festivals, this collection features beautifully designed home decor items including vibrant diyas, intricate rangoli stencils, and decorative candles that enhance the festive atmosphere. The rich colors, traditional motifs, and handcrafted details make this set an ideal choice for celebrating special occasions. Whether you are hosting guests or creating a cozy ambiance for your family, this décor set blends cultural charm with contemporary elegance.', price: 500, image: 'https://shoppersstores.com/wp-content/uploads/2020/10/Best-Home-Decor-Items-for-Indian-Festival.jpg' },
        { id: 2, name: 'Berber Diamond Rug', description: 'Add a touch of sophistication to your living space with this stunning Moroccan Berber rug. Crafted with meticulous care, this handwoven masterpiece features an intricate diamond pattern, blending traditional artistry with a modern aesthetic. The neutral color palette of ivory and charcoal ensures it complements a variety of interiors, from boho chic to contemporary minimalist. Made from premium wool, this rug offers exceptional softness and durability, perfect for high-traffic areas like the living room or bedroom. Elevate your home decor with this timeless and functional piece.', price:1500, image: 'https://www.therugseller.co.uk/blogwp/wp-content/uploads/2016/10/il_fullxfull_410842925_1qu2.jpg' },
        { id: 3, name: 'Product 3', description: 'Description 3', price:200, image: 'https://tse3.mm.bing.net/th?id=OIP.P1rZUjXkMT9zLrOibg9e4wHaD4&pid=Api&P=0&h=180' },
        { id: 4, name: 'Product 4', description: 'Description 4', price:300, image: 'https://tse1.mm.bing.net/th?id=OIP.5__D4KnW7kA_17KglDAtEAHaE8&pid=Api&P=0&h=180' },
        { id: 5, name: 'Product 5', description: 'Description 5', price:400, image: 'https://tse3.mm.bing.net/th?id=OIP.bxLdLiM4KVodhxSunU_CsAHaGa&pid=Api&P=0&h=180' },
        { id: 6, name: 'Product 6', description: 'Description 6', price:600, image: 'https://tse1.mm.bing.net/th?id=OIP.Il1mssngEdVTJwS9vUqviwAAAA&pid=Api&P=0&h=180' },
        { id: 7, name: 'Product 7', description: 'Description 7', price:700, image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https:%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F2%2F2016%2F07%2F4723bcf799e249fcc17892691bed33d368b73e4f.jpeg' },
        { id: 8, name: 'Product 8', description: 'Description 8', price:800, image: 'https://m.media-amazon.com/images/I/61YrS69FB9L._AC_UL320_.jpg' },
        { id: 9, name: 'Product 9', description: 'Description 9', price:900, image: 'https://m.media-amazon.com/images/I/71S9dg5+wbL._AC_UL320_.jpg' },
        { id: 10, name: 'Product 10', description: 'Description 10', price:1000, image: 'https://m.media-amazon.com/images/I/71WBIhxYlZL._AC_UL320_.jpg' },
        { id: 11, name: 'Product 11', description: 'Description 11', price:1100, image: 'https://m.media-amazon.com/images/I/51IBUdlZweL._AC_UL640_QL65_.jpg' },
        { id: 12, name: 'Product 12', description: 'Description 12', price:1200, image: 'https://m.media-amazon.com/images/I/61bhUmPNfmL._AC_UL320_.jpg' },
        { id: 13, name: 'Product 13', description: 'Description 13', price:1300, image: 'https://m.media-amazon.com/images/I/71fQVB7GylL._AC_UL320_.jpg' },
        { id: 14, name: 'Product 14', description: 'Description 14', price:1400, image: 'https://m.media-amazon.com/images/I/71Mly7EKFYL._AC_UL320_.jpg' },
        { id: 15, name: 'Product 15', description: 'Description 15', price:1600, image: 'https://m.media-amazon.com/images/I/71j8by4bU0L._AC_UL320_.jpg' },
        { id: 16, name: 'Product 16', description: 'Description 16', price:1700, image: 'https://m.media-amazon.com/images/I/41-knssZyGL._AC_UL320_.jpg' },
        { id: 17, name: 'Product 17', description: 'Description 17', price:1800, image: 'https://m.media-amazon.com/images/I/71nS6Oe0fJL._AC_UL320_.jpg' },
        { id: 18, name: 'Product 18', description: 'Description 18', price:1900, image: 'https://m.media-amazon.com/images/I/61K4tGcbJfL._AC_UL320_.jpg' },
        { id: 19, name: 'Product 19', description: 'Description 19', price:2000, image: 'https://m.media-amazon.com/images/I/51H2pAkicTL._AC_UL320_.jpg' },
        { id: 20, name: 'Product 20', description: 'Description 20', price:2100, image: 'https://m.media-amazon.com/images/I/81lDMsQoV2L._AC_UL320_.jpg' },
        { id: 21, name: 'Product 21', description: 'Description 21', price:2200, image: 'https://m.media-amazon.com/images/I/718GzU7QGGL._AC_UL320_.jpg' },
      // Add other products here
      ];
      return products.find(product => product.id === parseInt(id));
    }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 15px;
  animation: fadeIn 1s ease-in-out;
  position: relative;
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

/* Menu toggle button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;
}

.menu-toggle:hover {
  transform: rotate(90deg);
}

/* Responsive nav links for small screens */
.nav-links.responsive {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 60px;
  right: 20px;
  background: #333;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  z-index: 10;
}

.nav-links.responsive .nav-link {
  text-align: center;
}

/* Responsive styles */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide links by default on smaller screens */
  }

  .menu-toggle {
    display: block; /* Show the toggle button */
  }
}

/* Order Page Styling */
.order-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.order-card {
  width: 500px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.order-card h2 {
  font-size: 24px;
  margin-top: 15px;
}

.order-card p {
  font-size: 16px;
  color: #555;
}

.order-btn {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-btn:hover {
  background-color: #575757;
}


</style>
