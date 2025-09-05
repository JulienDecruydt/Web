<template>
  <section id="projects" class="section-padding section-hollow relative">
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-left mb-12" v-motion :initial="{ opacity: 0, y: 40 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="200">
        <h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase">MY WORK</h1>
        <h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6">
          <span class="text-white">Featured</span> <span class="gradient-text-primary">Projects</span>
        </h2>
        <p class="text-left text-muted mb-12">
          Here are some of the projects I've worked on, showcasing my expertise in Vue.js, Nuxt.js, and modern web development.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid mt-12 mb-16">
        <div
          v-for="(project, index) in projects" 
          :key="project.name + index"
          class="project-card hover:scale-105 transition-transform duration-300"
          v-motion 
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :delay="400 + index * 150"
        >
          <!-- Gradient Overlay -->
          <div class="project-gradient"></div>
          
          <!-- Content -->
          <div class="project-content">
            <!-- Header -->
            <div class="project-header">
              <div class="project-company">{{ project.company }}</div>
              <div class="project-year-badge">{{ project.year }}</div>
            </div>
            
            <!-- Main Info -->
            <div class="project-main">
              <h3 class="project-title">{{ project.name || project.company }}</h3>                            
              <p class="project-description">{{ project.description }}</p>
            </div>
            
            <!-- Footer -->
            <div class="project-footer">
              <div class="project-tech">
                <span class="tech-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <div class="project-actions">
                <button class="action-button" @click="viewProject(project)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Hover Effects -->
          <div class="project-hover-effects">
            <div class="hover-gradient"></div>
            <div class="hover-border"></div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center">
        <p class="text-muted mb-6">Interested in working together?</p>
        <a href="#contact" class="btn-primary pulse-glow inline-flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Get In Touch
        </a>
      </div>
    </div>
    
    <!-- Section separator -->
    <div class="absolute bottom-0 left-0 right-0">
      <div class="section-separator"></div>
    </div>
  </section>
</template>

<script setup>
import projects from '~/constants/projects.json'

const viewProject = (project) => {
  // For now, just scroll to contact - you can later add project details modal
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  background: rgba(126, 193, 255, 0.01);
  border: 1px solid rgba(126, 193, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 320px;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(126, 193, 255, 0.2);
  box-shadow: 0 20px 40px rgba(126, 193, 255, 0.1);
}

.project-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(135deg, rgba(126, 193, 255, 0.1) 0%, rgba(42, 59, 74, 0.05) 100%);
  opacity: 0.6;
}

.project-content {
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-company {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--maya-blue);
}

.project-year-badge {
  background: rgba(126, 193, 255, 0.1);
  color: var(--maya-blue);
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(126, 193, 255, 0.2);
  margin-left: auto;
}

.project-main {
  flex: 1;
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.5;
}

.project-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(126, 193, 255, 0.05);
  border: 1px solid rgba(126, 193, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
}

.project-actions {
  display: flex;
  justify-content: flex-end;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(126, 193, 255, 0.2);
  color: var(--maya-blue);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: rgba(126, 193, 255, 0.1);
  transform: translateY(-1px);
}

.project-hover-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-hover-effects {
  opacity: 1;
}

.hover-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(126, 193, 255, 0.05) 0%, transparent 70%);
}

.hover-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(126, 193, 255, 0.2);
  border-radius: 16px;
}
</style> 