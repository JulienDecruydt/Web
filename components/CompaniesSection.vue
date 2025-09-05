<template>
  <section class="companies-section py-16">
    <div class="container">
      <div class="companies-container" v-motion :initial="{ opacity: 0, y: 40 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="200">
        <div 
          v-for="(company, index) in companies" 
          :key="company.name"
          class="company-item"
          v-motion 
          :initial="{ opacity: 0 }" 
          :visibleOnce="{ opacity: 1 }"
          :delay="300 + index * 100"
        >
          <img 
            :src="`/${company.logo}`" 
            :alt="company.name"
            class="company-logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  {
    name: 'Suzuki',
    logo: 'suzuki.png'
  },
  {
    name: 'Novaseo',
    logo: 'logo-blanc_novaseo-1.png'
  },
  {
    name: 'Novavocat',
    logo: 'novavocat-logo.png'
  },
  {
    name: 'Quai38',
    logo: 'quai38-logo-white.svg'
  }
]
</script>

<style scoped>
.companies-section {
  position: relative;
  background: rgba(0, 0, 0, 0);
}

.companies-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .companies-container {
    gap: 3rem;
    padding: 0 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .companies-container {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
  }
}

.company-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.company-item:hover {
  transform: translateY(-8px) scale(1.05);
}

.company-item:hover .company-logo {
  opacity: 1;
  transform: scale(1.1) rotate(2deg);
  filter: brightness(0) invert(1) drop-shadow(0 5px 15px rgba(255, 255, 255, 0.2));
}

.company-logo {
  height: 60px;
  max-width: 180px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.7;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 768px) {
  .company-logo {
    height: 50px;
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .company-logo {
    height: 40px;
    max-width: 120px;
  }
}
</style> 