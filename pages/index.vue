<template>
  <div class="bg-gradient-to-b from-bg-color to-white text-text-color-light font-body overflow-hidden z-10">
    <!-- Header Section with Enhanced Nav -->
    <header id="header-section" class="relative z-50">
      <nav class="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-xl" aria-label="Main Navigation">
        <div class="max-w-7xl mx-auto px-4 py-3">
          <!-- Mobile Layout -->
          <div class="md:hidden">
            <div class="flex justify-center mb-4">
              <NuxtImg
              src="images/logo.png"
              alt="Rivertown Coffee Co. Logo"
              class="h-16 transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div class="flex justify-center">
              <ul class="inline-flex px-3 py-2 rounded-full bg-white/50 shadow-neumorphic">
                <li v-for="(item, index) in ['Home', 'Menus', 'About', 'Contact']" :key="index"
                class="relative">
                <a :href="`#${item.toLowerCase()}`"
                class="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors
                              relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                              after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary
                              after:opacity-0 hover:after:opacity-100 after:transition-opacity">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Desktop Layout -->
      <div class="hidden md:flex items-center justify-center relative">
        <ul class="absolute left-4 flex space-x-8">
          <li>
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li>
            <a href="#menus" class="nav-link">Menus</a>
          </li>
        </ul>
        
        <NuxtImg
        src="images/logo.png"
        alt="Rivertown Coffee Co. Logo"
        class="h-20 transform hover:scale-105 transition-all duration-300"
        />
        
        <ul class="absolute right-4 flex space-x-8">
          <li>
            <a href="#about" class="nav-link">About</a>
          </li>
          <li>
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <!-- Hero Section with Parallax -->
  <div class="relative h-[90vh] overflow-hidden">
    <div 
    class="absolute inset-0 bg-fixed bg-cover bg-center transform hover:scale-105 transition-transform duration-1000"
    style="background-image: url('images/hero.jpg');"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-bg-color/90"></div>
    
    <div class="relative h-full flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-5xl md:text-7xl font-header text-white mb-6 
              [text-shadow:_2px_2px_10px_rgb(0_0_0_/_70%)]
              animate-float">
      Welcome to Rivertown Coffee Co.
    </h1>
    <p class="text-2xl text-white font-medium max-w-2xl mx-auto
              [text-shadow:_1px_1px_5px_rgb(0_0_0_/_50%)]">
    Coffee For Everyone
  </p>
</div>
</div>
</header>
<!-- About Us Section -->
<section id="about-us" class="relative py-16 overflow-hidden bg-bg-row1 text-dark z-10">
  <!-- Decorative background elements -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-b from-bg-color/30 to-white"></div>
  </div>
  
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="relative group">
        <NuxtImg
        src="/images/storefront-1.jpg"
        alt="Rivertown Coffee Co. Storefront"
        class="rounded-2xl shadow-neumorphic transform group-hover:scale-102 transition-all duration-500 object-cover"
        />
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div class="space-y-6">
        <h2 class="text-3xl sm:text-4xl font-header text-text-color-dark mb-4 animate-float">
          Our Story
        </h2>
        <p class="text-lg text-text-color-dark sm:text-xl leading-relaxed">
          Since October 15, 2004, Rivertown Coffee Co. has been a cornerstone of
          Florence, AL. Owned and operated by John Cartwright, our café is a
          quirky, inclusive space where everyone—from business professionals to
          students—feels at home. Our mission is simple:
          <strong class="text-primary">"Coffee For Everyone."</strong>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Operating Hours Section -->
<section id="operating-hours" class="relative py-16 bg-bg-row2 overflow-hidden z-10">
  <!-- Decorative background pattern -->
  <div class="absolute inset-0 -z-10 opacity-5"
  style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%236B4F4F&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/&gt;%3C/g%3E%3C/g%3E%3C/svg%3E');">
</div>

<div class="max-w-5xl mx-auto px-4">
  <h2 class="text-3xl sm:text-4xl font-header text-text-color-dark text-center mb-12 animate-float">
    Visit Us
  </h2>
  
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Café Hours -->
    <div class="bg-bg-row1 rounded-2xl shadow-neumorphic p-8 transform hover:-translate-y-1 transition-all duration-300">
      <h3 class="text-2xl font-header text-primary mb-6 flex items-center">
        <Icon name="mdi-clock-outline" class="mr-2 text-secondary" size="28" />
        Café Hours
      </h3>
      <ul class="space-y-4">
        <li v-for="(hours, day) in cafeHours" :key="day" 
        class="flex justify-between items-center group">
        <strong class="text-primary group-hover:text-secondary transition-colors">{{ day }}</strong>
        <span class="text-text-color-dark">{{ hours }}</span>
      </li>
    </ul>
  </div>
  
  <!-- Service Hours -->
  <div class="bg-bg-row1 rounded-2xl shadow-neumorphic p-8 transform hover:-translate-y-1 transition-all duration-300">
    <h3 class="text-2xl font-header text-primary mb-6 flex items-center">
      <Icon name="mdi-silverware-fork-knife" class="mr-2 text-secondary" size="28" />
      Service Hours
    </h3>
    <ul class="space-y-4">
      <li v-for="(service, index) in serviceHours" :key="index"
      class="group">
      <strong class="text-primary group-hover:text-secondary transition-colors block mb-1">
        {{ service.meal }}
      </strong>
      <span class="text-text-color-dark">{{ service.hours }}</span>
    </li>
  </ul>
</div>
</div>
</div>
</section>

<!-- Menu Highlights Section -->
<section id="menu-highlights" class="relative py-16 bg-bg-row3 text-dark z-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-header text-text-color-light mb-4 animate-float">
        Delicious Offerings
      </h2>
      <p class="text-xl text-text-color-light/80">Explore Our Menus</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div v-for="(item, index) in menuItems" :key="index" 
      class="group relative bg-white rounded-2xl shadow-neumorphic overflow-hidden
                  transform hover:-translate-y-2 transition-all duration-300">
      <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div class="p-6">
        <h3 class="text-xl font-header text-text-color-dark mb-3">{{ item.title }}</h3>
        <p class="text-text-color-dark">{{ item.description }}</p>
        <a :href="item.menuLink"
        target="_blank"
        rel="noopener"
        class="inline-block mt-4 text-accent hover:text-secondary transition-colors duration-300">
        View Menu →
      </a>
    </div>
  </div>
</div>
</div>
</section>


<!-- Location and Contact Section -->
<section id="location-contact" class="relative py-16 bg-bg-row2 overflow-hidden z-10">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl sm:text-4xl font-header text-text-color-dark text-center mb-12 animate-float">
      Find Us
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Map Container -->
      <div class="relative aspect-square rounded-2xl shadow-neumorphic overflow-hidden group">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.5750825757!2d-87.67773!3d34.79997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887d7c6a4e1f4f4f%3A0x4e4e8b4e4e4e4e4e!2sRivertown%20Coffee%20Co!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        class="absolute inset-0 w-full h-full border-0 group-hover:opacity-90 transition-opacity"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Rivertown Coffee Co. location on Google Maps"
        ></iframe>
      </div>
      
      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="bg-white rounded-2xl shadow-neumorphic p-8 transform hover:-translate-y-1 transition-all duration-300">
          <div class="space-y-6">
            <div class="flex items-start group">
              <Icon name="mdi-coffee" class="text-secondary mr-3 mt-1 flex-shrink-0" size="24" />
              <h3 class="text-text-color-dark">Rivertown Coffee Co.</h3>
            </div>
            <a href="https://goo.gl/maps/YOUR-MAPS-LINK" 
            target="_blank" 
            rel="noopener"
            class="flex items-start group">
            <Icon name="mdi-map-marker" class="text-secondary mr-3 mt-1 flex-shrink-0" size="24" />
            <span class="text-text-color-dark group-hover:text-primary transition-colors">
              117 N Seminary St<br>Florence, AL 35630
            </span>
          </a>
          
          <a href="tel:2567657128" 
          class="flex items-center group">
          <Icon name="mdi-phone" class="text-secondary mr-3 flex-shrink-0" size="24" />
          <span class="text-text-color-dark group-hover:text-primary transition-colors">
            (256) 765-7128
          </span>
        </a>
        
        <div class="flex items-center ">
          <a href="https://www.facebook.com/RivertownCoffeeCo"
          target="_blank"
          rel="noopener"
          class="p-2 rounded-full bg-bg-color hover:bg-secondary/20 transition-colors group"
          aria-label="Facebook">
          <Icon name="mdi-facebook" size="24" class="text-primary" />
        </a>
        <!-- Add other social media icons as needed -->
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>

<!-- Call to Action Section -->
<section id="call-to-action" class="relative py-16 overflow-hidden z-10">
  <div class="absolute inset-0 bg-bg-row3">
    <!-- Enlarged Pattern Overlay -->
    <div class="absolute inset-0 bg-[url('/images/pattern-dark.svg')] opacity-10"></div>
  </div>
  
  <div class="relative max-w-3xl mx-auto px-4 text-center text-dark">
    <h2 class="text-3xl sm:text-4xl font-header mb-6 animate-float">
      Share Your Experience
    </h2>
    <p class="text-lg sm:text-xl mb-12 text-dark/90">
      We value your feedback! Please consider leaving us a review on Google.
    </p>
    <div class="relative mt-4">
      <!-- Glow effect container -->
      <div class="absolute inset-0 bg-white/10 blur-xl transform scale-110"></div>
      <!-- Button with proper spacing and contrast -->
      <a href="https://g.page/rivertowncoffee/review"
      target="_blank"
      rel="noopener"
      class="relative inline-flex items-center px-8 py-4 bg-white text-primary font-semibold 
                rounded-full shadow-neumorphic transform hover:-translate-y-1 
                hover:shadow-neumorphic-lg transition-all duration-300">
      <Icon name="mdi-google" class="mr-2" />
      Leave a Review
    </a>
  </div>
</div>
</section>

</div>
<!-- Footer Section -->
<footer id="footer" class="py-12 bg-black sticky bottom-0 z-0 overflow-hidden">
  <div class="relative max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <!-- Quick Links -->
      <nav class="w-full md:w-auto">
        <ul class="flex flex-wrap justify-center md:justify-start gap-6">
          <li v-for="(link, index) in ['Home', 'Menus', 'About', 'Contact']" :key="index">
            <a :href="`#${link.toLowerCase()}`"
            class="text-text-color-light hover:text-primary/80 transition-colors duration-300
                      relative after:absolute after:bottom-0 after:left-0
                      after:w-full after:h-px after:bg-primary after:origin-right
                      after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            {{ link }}
          </a>
        </li>
      </ul>
    </nav>
    
    <!-- Contact Info -->
    <div class="text-center md:text-right space-y-3">
      <h3 class="text-text-color-light">Rivertown Coffee Co.</h3>
      <a href="https://goo.gl/maps/YOUR-MAPS-LINK"
      target="_blank"
      rel="noopener"
      class="flex items-center justify-center md:justify-end group">
      <Icon name="mdi-map-marker" class="text-text-color-light mr-2 group-hover:scale-110 transition-transform" />
      <span class="text-text-color-light group-hover:text-primary/80 transition-colors">
        117 N Seminary St, Florence, AL 35630
      </span>
    </a>
    <a href="tel:2567657128"
    class="flex items-center justify-center md:justify-end group">
    <Icon name="mdi-phone" class="text-text-color-light mr-2 group-hover:scale-110 transition-transform" />
    <span class="text-text-color-light group-hover:text-primary/80 transition-colors">
      (256) 765-7128
    </span>
  </a>
</div>

<!-- Social Media -->
<div class="flex justify-center space-x-4">
  <a href="https://www.facebook.com/RivertownCoffeeCo"
  target="_blank"
  rel="noopener"
  class="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
  aria-label="Facebook">
  <Icon name="mdi-facebook" size="24" 
  class="text-text-color-light group-hover:text-primary/80 transition-colors" />
</a>
</div>
</div>

<!-- Copyright -->
<div class="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-text-color-light">
  © 2024 Rivertown Coffee Co. All rights reserved. Website by <a href="https://withjeremy.com/" target="_blank" rel="noopener" class="text-accent hover:text-primary/80 transition-colors duration-300">With Jeremy</a>
</div>
</div>
</footer>
</template>

<script setup>
const menuItems = [
{
  title: "Breakfast",
  description: "Start your day with our unique breakfast selections or enjoy our diverse lunch options.",
  image: "/images/muffin-1.jpg",
  menuLink: "/menus/breakfast.pdf"
},
{
  title: "Lunch",
  description: "Fill up on fresh, healthy, and delicious lunch options.",
  image: "/images/lunch-1.jpg",
  menuLink: "/menus/lunch.pdf"
},
{
  title: "Dinner",
  description: "Join us for dinner featuring our signature dishes and local favorites.",
  image: "/images/pastry-1.jpg",
  menuLink: "/menus/dinner.pdf"
},
{
  title: "Drinks & More",
  description: "Savor our handcrafted beverages, including coffee, tea, smoothies, and craft beer.",
  image: "/images/coffee-1.jpg",
  menuLink: "/menus/drinks.pdf"
}
]

const cafeHours = {
  'Monday – Thursday': '7 AM – 10 PM',
  'Friday': '7 AM – 11 PM',
  'Saturday': '9 AM – 11 PM',
  'Sunday': 'Closed'
}

const serviceHours = [
{ meal: 'Breakfast', hours: 'Monday – Friday, 7 AM – 2 PM' },
{ meal: 'Lunch', hours: 'Monday – Friday, 11 AM – 2 PM' },
{ meal: 'Dinner', hours: 'Monday – Saturday, 5 PM – 9 PM' }
]
</script>

<style scoped>
/* Custom Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Neumorphic Styles */
.nav-link {
  @apply relative px-4 py-2 text-lg font-medium hover:text-primary
  before:content-[''] before:absolute before:bottom-0 before:left-0 
  before:w-full before:h-0.5 before:bg-primary
  before:transform before:scale-x-0 before:transition-transform
  before:duration-300 hover:before:scale-x-100;
}

@media (max-width: 768px) {
  .nav-link {
    @apply text-base px-3;
  }
}

/* Parallax Effect */
.bg-fixed {
  background-attachment: fixed;
}

/* New Styles for bg-primary-light and Dark Text */




/* Adjusting the CTA Button Glow to Prevent Spread */
#call-to-action .relative {
  position: relative;
}

#call-to-action .absolute.blur-xl {
  /* Ensure the blur effect doesn't affect the text */
  pointer-events: none;
}
</style>