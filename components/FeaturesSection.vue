<template>
  <section class="section-padding section-hollow relative overflow-hidden skills-section" id="skills">
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-left" v-motion :initial="{ opacity: 0, y: 40 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="200">
        <h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase">MY EXPERTISE</h1>
        <h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6">
          <span class="text-white">Skills &</span> <span class="gradient-text-primary">Technologies</span>
        </h2>
        <p class="text-left text-muted mb-16">
          High-level experience with Vue.js, Nuxt.js, and modern JavaScript ecosystem to deliver exceptional solutions quickly.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="relative grid md:grid-cols-4 grid-cols-2 gap-6 auto-rows-fr mx-auto mt-12">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          class="skill-card"
          v-motion 
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :delay="400 + index * 100"
        >
          <div class="skill-icon">
            <Icon :name="skill.icon" class="text-3xl" />
          </div>
          <h3 class="skill-name">{{ skill.name }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- Section separator -->
    <div class="absolute bottom-0 left-0 right-0">
      <div class="section-separator"></div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    name: 'Vue.js',
    icon: 'simple-icons:vuedotjs',
    description: 'Advanced proficiency in Vue.js ecosystem and best practices'
  },
  {
    name: 'Nuxt.js',
    icon: 'simple-icons:nuxtdotjs',
    description: 'Expert in building SSR and SPA applications'
  },
  {
    name: 'JavaScript',
    icon: 'simple-icons:javascript',
    description: 'Modern ES6+ JavaScript and TypeScript'
  },
  {
    name: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    name: 'Git',
    icon: 'simple-icons:git',
    description: 'Version control and collaborative development'
  },
  {
    name: 'Ionic',
    icon: 'simple-icons:ionic',
    description: 'Cross-platform mobile app development'
  },
  {
    name: 'Sass/SCSS',
    icon: 'simple-icons:sass',
    description: 'Advanced CSS preprocessing and architecture'
  },
  {
    name: 'Python',
    icon: 'simple-icons:python',
    description: 'Backend development and automation scripts'
  }
]
</script>

<style scoped>
.skills-section {
  position: relative;
  --c: 90px;
  --_gradient-blend-mode: normal;
  --_gradient-blur: 0px;
  
  mask: radial-gradient(60% var(--c) at top,#0000 calc(100% - 1px),var(--night));
  clip-path: ellipse(calc(var(--c)*1%) 100% at top);
  background: 
    radial-gradient(at 3% 1%, #2d3990 0px, transparent 50%), 
    radial-gradient(at 4% 18%, #2d3990 0px, transparent 50%), 
    radial-gradient(at 9% 41%, #000000 0px, transparent 50%), 
    radial-gradient(at 104% 60%, #8b5cf6 -10%, transparent 50%), 
    radial-gradient(at 29% 18%, #7b030f 0px, transparent 50%) 
    #000000;
  mix-blend-mode: var(--_gradient-blend-mode);
}
.skills-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  --_gradient-blend-mode: normal;
  --_gradient-blur: 0px;

  background: radial-gradient(at 50.10964912280702% 52.25391986062717%, #0A0A0A 0px, transparent 50%), radial-gradient(at 48.57456140350877% 0%, #6366F2 0px, transparent 50%) #000000;;
  mix-blend-mode: var(--_gradient-blend-mode);
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(126, 193, 255, 0.3);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.skill-card:hover .skill-icon {
  transform: scale(1.2) rotate(5deg);
}

.skill-card:hover .skill-description {
  opacity: 1;
}

.skill-icon {
  color: white;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name {
  color: var(--maya-blue);
}

.skill-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
</style> 