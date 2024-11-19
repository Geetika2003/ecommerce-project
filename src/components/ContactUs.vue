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
          <router-link to="/contact" class="nav-link" exact-active-class="active">Contact Us</router-link>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          ☰
        </button>
      </nav>
    </header>

    <!-- Contact Us Section -->
    <section class="contact-us">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Your Name" required><br>
        <input type="email" v-model="email" placeholder="Your Email" required><br>
        <input type="text" v-model="subject" placeholder="Subject" required><br>
        <textarea v-model="message" placeholder="Your Message" required></textarea><br>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      isMenuOpen: false,
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted', this.name, this.email, this.subject, this.message);
    },
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
/* General Reset */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 15px 20px;
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
  transform: scale(1.1);
}

.nav-link.active {
  border-bottom: 2px solid white;
}

/* Menu toggle for mobile */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

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
}

.nav-links.responsive .nav-link {
  text-align: right;
}

/* Contact Us Section */
.contact-us {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.contact-us h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #333;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #575757;
}
/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links.responsive {
    display: flex;
  }
}
</style>
