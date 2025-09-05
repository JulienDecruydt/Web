<template>
  <section class="section-padding relative" id="about">
    <div class="container relative z-10">
      <!-- Section Content -->
      <div class="mx-auto about-content">
          <div class="text-left mb-12" v-motion :initial="{ opacity: 0, x: -40 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="200">
            <h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase">About Me</h1>
            <h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6">
              <span class="text-white">{{ currentYear - 2018 }}+ years of Vue.js experience enable me to respond quickly to</span>
              <br>
              <span class="gradient-text-primary">YOUR NEEDS</span>
            </h2>
          </div>

          <div class="text-left" v-motion :initial="{ opacity: 0, x: -40 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="400">
            <!-- Content -->
            <div class="space-y-6 text-left">
              <p class="text-muted leading-relaxed text-lg text-left" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="600">
                Since 2018, I've been working with Vue.js and Nuxt.js, and this experience has helped me develop my skills and grow my knowledge in these frameworks.
              </p>
              <p class="text-muted leading-relaxed text-lg text-left" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="700">
                I have a passion for creating beautiful, performant websites and applications that deliver exceptional user experiences. As a professional developer, I'm always looking for new challenges and opportunities to push the boundaries of what's possible with modern web technologies.
              </p>
              <p class="text-white font-semibold text-lg text-left" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1 }" :delay="800">
                Ready to bring your vision to life?
              </p>
              
              <!-- CTA Section -->
              <div class="flex items-center justify-start gap-6 pt-4" v-motion :initial="{ opacity: 0, x: -40 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="900">
                <div class="flex items-center gap-4">
                  <a href="https://github.com/JulienDecruydt" target="_blank" 
                     class="social-icon hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/julien-decruydt/" target="_blank"
                     class="social-icon hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.social-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  color: white;
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.3);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.bg-avatar-gradient {
  background: linear-gradient(135deg, var(--purple) 0%, var(--light-purple) 100%);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.text-primary {
  color: var(--maya-blue);
}

/* Force left alignment */
.about-content {
  text-align: left !important;
}

.about-content p,
.about-content h1,
.about-content h2,
.about-content div {
  text-align: left !important;
}
</style> 