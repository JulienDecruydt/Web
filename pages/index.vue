<template>
  <div class="relative">
    <!-- Navigation -->
    <AppNavigation />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Companies Section -->
    <CompaniesSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Skills Section -->
    <FeaturesSection />
    
    <!-- Projects Section -->
    <CaseStudiesSection />
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: 'Julien Decruydt - Vue.js Freelance Developer',
  meta: [
    { name: 'description', content: 'Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise. Available for your next project.' },
    { name: 'keywords', content: 'Vue.js, Nuxt.js, freelance developer, frontend development, JavaScript' },
    { property: 'og:title', content: 'Julien Decruydt - Vue.js Freelance Developer' },
    { property: 'og:description', content: 'Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise. Available for your next project.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Julien Decruydt - Vue.js Freelance Developer' },
    { name: 'twitter:description', content: 'Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise.' }
  ]
})
</script> 