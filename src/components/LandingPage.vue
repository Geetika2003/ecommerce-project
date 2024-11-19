<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="logo">LIVING LUXE</div>
        <div class="nav-links">
          <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          ☰
        </button>
      </nav>
    </header>

    <section class="banner">
      <h1>Welcome to Our Home Decor Store</h1>
      <p>Find the best products for your needs!</p>
    </section>

    <div class="below-section">
      <section class="about-us">
        <h2>About Us</h2>
        <p>We offer a variety of quality products at competitive prices. Our mission is to bring the best home decor items to you.</p>
        <div class="image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.Wi-_1CzrGFLhs60k-qcbKwHaEd&pid=Api&P=0&h=180" alt="About Us Image 1" />
          <img src="https://images01.nicepagecdn.com/page/10/35/website-design-preview-103550.jpg" alt="About Us Image 2" />
        </div>
      </section>

      <section class="contact-us">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions about our products, need assistance with your order, or simply want to learn more about our home decor collections, we're here to help. Our dedicated customer service team is available to assist you and ensure that your experience with Living Luxe is smooth and enjoyable.<br>
            You can reach us through the following methods:<br>
            <b>o</b>Email: support@livingluxe.com<br>
            <b>o</b>Phone: +1 (800) 123-4567<br>
            <b>o</b>Address: 123 Luxe St, Cityville, State, 12345<br>
            Alternatively, you can fill out the form below, and one of our representatives will get back to you as soon as possible. We value your feedback and are committed to providing exceptional service.<br>
            Thank you for choosing Living Luxe—where luxury meets comfort!</p>
      </section>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Living Luxe. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      isMenuOpen: false, // Track the menu state
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

/* Banner */
.banner {
  background-image: url('https://www.homelane.com/blog/wp-content/uploads/2022/04/shutterstock_1198452376-1-1-scaled.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 20px;
  text-align: center;
  color: white;
  position: relative;
  height: 600px; /* Adjust this value to increase the height */
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Matches the banner height */
  background-color: rgba(0, 0, 0, 0.5); /* Adjust transparency */
  z-index: 1;
}

.banner h1,
.banner p {
  position: relative;
  z-index: 2;
}
.banner h1 {
  margin-top: 100px;
  font-size: 3rem;
}
.banner p {
  font-size: 1.5rem;
  animation: zoomIn 1s ease-in-out;
}

/* About Us and Contact Us sections layout */
.below-section {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 20px;
}

.about-us, .contact-us {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.about-us h2, .contact-us h2 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.about-us p, .contact-us p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
}

.about-us .image-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.about-us img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Keyframes for FadeIn and SlideUp Animations */
@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsiveness for smaller screens */
@media (max-width: 768px) {
  .below-section {
    flex-direction: column;
    gap: 20px;
  }

  .about-us, .contact-us {
    max-width: 100%;
  }

  .about-us h2, .contact-us h2 {
    font-size: 1.8rem;
  }

  .about-us p, .contact-us p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .about-us h2, .contact-us h2 {
    font-size: 1.5rem;
  }

  .about-us p, .contact-us p {
    font-size: 0.8rem;
  }

  .about-us .image-container, .contact-us .image-container {
    flex-direction: column;
    align-items: center;
  }

  .about-us img, .contact-us img {
    max-width: 90%;
  }
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
}
</style>
