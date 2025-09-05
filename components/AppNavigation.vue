<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
    isScrolled ? 'nav-scrolled' : 'nav-transparent'
  ]">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-20 px-4">
        <!-- Logo Section -->
        <div class="flex items-center space-x-3">
          <div class="hidden sm:block uppercase">
            <div class="text-white font-semibold text-lg">Julien Decruydt</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navItems" :key="item.name"
             :href="item.href"
             class="nav-link">
            {{ item.name }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="#contact" class="btn-primary-nav">
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-white hover:text-primary transition-colors rounded-lg"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-mobile-menu backdrop-blur-xl border-t border-mobile-border">
      <div class="container mx-auto py-6 px-4">
        <div class="space-y-4">
          <a v-for="item in navItems" :key="item.name"
             :href="item.href"
             @click="mobileMenuOpen = false"
             class="block nav-link-mobile">
            {{ item.name }}
          </a>
          <div class="pt-4 border-t border-mobile-border">
            <div class="flex items-center space-x-2 mb-4 text-sm text-muted">
              <div class="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for projects</span>
            </div>
            <a href="#contact" 
               @click="mobileMenuOpen = false"
               class="btn-primary-nav w-full justify-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.bg-logo {
  background: linear-gradient(135deg, var(--purple) 0%, var(--light-purple) 100%);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 8px;
  position: relative;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-mobile {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-link-mobile:hover {
  color: white;
}

.btn-primary-nav {
  background: linear-gradient(135deg, var(--purple) 0%, var(--light-purple) 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
}

.btn-primary-nav:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.bg-success {
  background: #10b981;
}

.bg-mobile-menu {
  background: rgba(10, 10, 10, 0.95);
}

.border-mobile-border {
  border-color: rgba(255, 255, 255, 0.1);
}

.text-muted {
  color: rgba(255, 255, 255, 0.6);
}
</style> 