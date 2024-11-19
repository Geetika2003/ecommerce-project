<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="logo">LIVING LUXE</div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link" exact-active-class="active">About Us</router-link>
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          ☰
        </button>
      </nav>
    </header>

    <!-- News Section -->
    <section class="news-section">
      <h2>Latest News</h2>
      <div class="news-articles">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="news-article"
          :style="{ '--order': index }"
        >
          <img :src="article.image" :alt="article.title" />
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
        </div>
      </div>
    </section>

        <!-- Corporate Office Section -->
        <section class="corporate-office">
      <u><b><h2>OUR CORPORATE OFFICE</h2></b></u>
      <div class="office-images">
        <img src="https://tse2.mm.bing.net/th?id=OIP.ID2nTX0SGhYkLM8tKjby8AHaE6&pid=Api&P=0&h=180" alt="Corporate Office Exterior" />
        <img src="https://tse3.mm.bing.net/th?id=OIP.p6FDooMyjlI8SlbY9Jol0gHaE8&pid=Api&P=0&h=180" alt="Corporate Office Interior" />
      </div>
      <p class="office-address">
        Living Luxe Headquarters<br />
        123 Luxury Lane, Suite 456<br />
        Metropolis City, State, ZIP Code<br />
        Phone: (123) 456-7890
      </p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Living Luxe. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      articles: [
        {
          image: "https://tse3.mm.bing.net/th?id=OIP.961MiWJDdz5gK5pV0piKKgHaES&pid=Api&P=0&h=180",
          title: "New Product Launch",
          description: "We recently launched our new product line to enhance your lifestyle."
        },
        {
          image: "https://tse3.mm.bing.net/th?id=OIP.ggOtIAvvf_bRKqAFU5VS5gAAAA&pid=Api&P=0&h=180",
          title: "Partnership Announcement",
          description: "Living Luxe is proud to partner with leading brands to bring you the best."
        },
        {
          image: "https://tse2.mm.bing.net/th?id=OIP.6JVRQFnvusd6uYB3536NWQHaFj&pid=Api&P=0&h=180",
          title: "Award Recognition",
          description: "We are thrilled to receive the Best E-commerce Platform award."
        },
        {
          image: "https://tse4.mm.bing.net/th?id=OIP.fry72uTUYetTJRKtoIwXrwHaD5&pid=Api&P=0&h=180",
          title: "Customer Appreciation Month",
          description: "Join us in celebrating our customers with exclusive discounts this month."
        },
        {
          image: "https://tse2.mm.bing.net/th?id=OIP.pWIZvEUruBIhRjjAyTEjHgHaFj&pid=Api&P=0&h=180",
          title: "Website launch Date",
          description: "Our website 'LIVING LUXE' was launched on 22 May 2020. It was a memorable day."
        },
        {
          image: "https://tse4.mm.bing.net/th?id=OIP.k1pCpCL4u2pzLcu7cYhEAgHaHa&pid=Api&P=0&h=180",
          title: "Meet Our CEO",
          description: " The visionary CEO of Living Luxe, has over 15 years of experience in e-commerce."
        },
      ]
    };
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
  },
};
</script>

<style scoped>
/* Global Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Navbar */
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

/* Corporate Office Section */
.corporate-office {
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
}

.corporate-office h2 {
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.office-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.office-images img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: transform 0.5s, box-shadow 0.5s;
}

.office-images img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.office-address {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-top: 10px;
}

/* News Section */
.news-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.news-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

.news-articles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.news-article {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  animation: slideUp 1s ease-in-out forwards;
  animation-delay: calc(var(--order) * 0.2s);
}

.news-article img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.5s, box-shadow 0.5s;
}

.news-article img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
  animation: fadeInUp 2s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
