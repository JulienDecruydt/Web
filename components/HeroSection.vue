<template>
  <section class="hero-section min-h-screen flex items-center justify-center relative">
    <div class="container mx-auto text-center relative z-10">
      <!-- Simplified headline -->
      <div class="mb-16" v-motion :initial="{ opacity: 0, y: 40 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="200">
        <div class="title uppercase font-bold">
          <p class="font-inter text-3xl md:text-4xl xl:text-5xl md:mb-3 leading-tight" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="400">
            <span class="text-shadow">Your next project needs a</span>
          </p>
          <h1 class="font-inter text-3xl md:text-4xl xl:text-5xl leading-tight" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="600">
            <span class="text-shadow">Vue.js</span> <span class="text-shadow">freelancer</span>
          </h1>
        </div>
        
        <!-- Simplified subtitle -->
        <p class="w-2/3 mx-auto mt-8 text-sm md:text-base text-muted mb-12 max-w-xl leading-relaxed font-medium subtitle" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="800">
          Let's work together to create exceptional projects.
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" v-motion :initial="{ opacity: 0, y: 40 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="1000">
        <a href="#projects" class="btn-secondary hover:scale-105 transition-transform duration-300">
          <span>Discover my work</span>
        </a>
        <a href="#about" class="btn-primary pulse-glow hover:scale-105 transition-transform duration-300">
          <span>Learn more</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Additional hero-specific styles */
.hero-section h1 {
  letter-spacing: -0.02em;
}

.stats-card:nth-child(1) {
  animation-delay: 0.1s;
}

.stats-card:nth-child(2) {
  animation-delay: 0.2s;
}

.stats-card:nth-child(3) {
  animation-delay: 0.3s;
}

@media (max-width: 640px) {
  .stats-card {
    padding: 20px 16px;
  }
  
  .stats-number {
    font-size: 2rem;
  }
}
</style> 