import { ref, mergeProps, useSSRContext, resolveDirective, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0$1 from "./index-FGRstlrA.js";
import { u as useHead } from "./v3-CkqMr5g_.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/hookable/dist/index.mjs";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/unctx/dist/index.mjs";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/radix3/dist/index.mjs";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/defu/dist/defu.mjs";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/klona/dist/index.mjs";
import "framesync";
import "popmotion";
import "style-value-types";
import "@iconify/utils/lib/css/icon";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/juliendecruydt/Documents/portfolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$7 = {
  __name: "AppNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const navItems = [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled.value ? "nav-scrolled" : "nav-transparent"
        ]
      }, _attrs))} data-v-e8a37c6f><div class="container mx-auto" data-v-e8a37c6f><div class="flex items-center justify-between h-20 px-4" data-v-e8a37c6f><div class="flex items-center space-x-3" data-v-e8a37c6f><div class="hidden sm:block uppercase" data-v-e8a37c6f><div class="text-white font-semibold text-lg" data-v-e8a37c6f>Julien Decruydt</div></div></div><div class="hidden md:flex items-center space-x-8" data-v-e8a37c6f><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="nav-link" data-v-e8a37c6f>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden md:flex items-center space-x-4" data-v-e8a37c6f><a href="#contact" class="btn-primary-nav" data-v-e8a37c6f> Contact </a></div><button class="md:hidden p-2 text-white hover:text-primary transition-colors rounded-lg" data-v-e8a37c6f><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e8a37c6f>`);
      if (!mobileMenuOpen.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-e8a37c6f></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-e8a37c6f></path>`);
      }
      _push(`</svg></button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden bg-mobile-menu backdrop-blur-xl border-t border-mobile-border" data-v-e8a37c6f><div class="container mx-auto py-6 px-4" data-v-e8a37c6f><div class="space-y-4" data-v-e8a37c6f><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(`<a${ssrRenderAttr("href", item.href)} class="block nav-link-mobile" data-v-e8a37c6f>${ssrInterpolate(item.name)}</a>`);
        });
        _push(`<!--]--><div class="pt-4 border-t border-mobile-border" data-v-e8a37c6f><div class="flex items-center space-x-2 mb-4 text-sm text-muted" data-v-e8a37c6f><div class="w-2 h-2 bg-success rounded-full animate-pulse" data-v-e8a37c6f></div><span data-v-e8a37c6f>Available for projects</span></div><a href="#contact" class="btn-primary-nav w-full justify-center" data-v-e8a37c6f> Contact </a></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavigation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e8a37c6f"]]);
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section min-h-screen flex items-center justify-center relative" }, _attrs))} data-v-5d60a17f><div class="container mx-auto text-center relative z-10" data-v-5d60a17f><div${ssrRenderAttrs(mergeProps({
        class: "mb-16",
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5d60a17f><div class="title font-bold" data-v-5d60a17f><p${ssrRenderAttrs(mergeProps({
        class: "font-inter text-3xl md:text-4xl xl:text-6xl md:mb-3 leading-tight",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 400
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5d60a17f><span class="text-shadow" data-v-5d60a17f>Your next project needs a</span></p><h1${ssrRenderAttrs(mergeProps({
        class: "font-inter text-3xl md:text-4xl xl:text-6xl leading-tight",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 600
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5d60a17f><span class="text-shadow" data-v-5d60a17f>Vue.js</span> <span class="text-shadow" data-v-5d60a17f>freelancer</span></h1></div><p${ssrRenderAttrs(mergeProps({
        class: "w-2/3 mx-auto mt-8 text-sm md:text-base text-muted mb-12 max-w-xl leading-relaxed font-medium subtitle",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 800
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5d60a17f> Let&#39;s work together to create exceptional projects. </p></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col sm:flex-row gap-4 justify-center items-center",
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 1e3
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5d60a17f><a href="#projects" class="btn-secondary hover:scale-105 transition-transform duration-300" data-v-5d60a17f><span data-v-5d60a17f>Discover my work</span></a><a href="#about" class="btn-primary pulse-glow hover:scale-105 transition-transform duration-300" data-v-5d60a17f><span data-v-5d60a17f>Learn more</span><svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5d60a17f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-5d60a17f></path></svg></a></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5d60a17f"]]);
const _sfc_main$5 = {
  __name: "CompaniesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      {
        name: "Suzuki",
        logo: "suzuki.png"
      },
      {
        name: "Novaseo",
        logo: "logo-blanc_novaseo-1.png"
      },
      {
        name: "Novavocat",
        logo: "novavocat-logo.png"
      },
      {
        name: "Quai38",
        logo: "quai38-logo-white.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "companies-section py-16" }, _attrs))} data-v-629ee510><div class="container" data-v-629ee510><div${ssrRenderAttrs(mergeProps({
        class: "companies-container",
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-629ee510><!--[-->`);
      ssrRenderList(companies, (company, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: company.name,
          class: "company-item",
          initial: { opacity: 0 },
          visibleOnce: { opacity: 1 },
          delay: 300 + index * 100
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-629ee510><img${ssrRenderAttr("src", `/${company.logo}`)}${ssrRenderAttr("alt", company.name)} class="company-logo" data-v-629ee510></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompaniesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-629ee510"]]);
const _sfc_main$4 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-padding section-hollow relative",
        id: "about"
      }, _attrs))} data-v-4da03daf><div class="container relative z-10" data-v-4da03daf><div class="mx-auto about-content" data-v-4da03daf><div${ssrRenderAttrs(mergeProps({
        class: "text-left mb-12",
        initial: { opacity: 0, x: -40 },
        visibleOnce: { opacity: 1, x: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf><h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase" data-v-4da03daf>About Me</h1><h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6" data-v-4da03daf><span class="text-white" data-v-4da03daf>${ssrInterpolate(unref(currentYear) - 2018)}+ years of Vue.js experience enable me to respond quickly to</span><br data-v-4da03daf><span class="gradient-text-primary" data-v-4da03daf>YOUR NEEDS</span></h2></div><div${ssrRenderAttrs(mergeProps({
        class: "text-left",
        initial: { opacity: 0, x: -40 },
        visibleOnce: { opacity: 1, x: 0 },
        delay: 400
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf><div class="space-y-6 text-left" data-v-4da03daf><p${ssrRenderAttrs(mergeProps({
        class: "text-muted leading-relaxed text-lg text-left",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 600
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf> Since 2018, I&#39;ve been working with Vue.js and Nuxt.js, and this experience has helped me develop my skills and grow my knowledge in these frameworks. </p><p${ssrRenderAttrs(mergeProps({
        class: "text-muted leading-relaxed text-lg text-left",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 700
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf> I have a passion for creating beautiful, performant websites and applications that deliver exceptional user experiences. As a professional developer, I&#39;m always looking for new challenges and opportunities to push the boundaries of what&#39;s possible with modern web technologies. </p><p${ssrRenderAttrs(mergeProps({
        class: "text-white font-semibold text-lg text-left",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1 },
        delay: 800
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf> Ready to bring your vision to life? </p><div${ssrRenderAttrs(mergeProps({
        class: "flex items-center justify-start gap-6 pt-4",
        initial: { opacity: 0, x: -40 },
        visibleOnce: { opacity: 1, x: 0 },
        delay: 900
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4da03daf><div class="flex items-center gap-4" data-v-4da03daf><a href="https://github.com/JulienDecruydt" target="_blank" class="social-icon hover:scale-110 transition-transform duration-300" data-v-4da03daf><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-4da03daf><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" data-v-4da03daf></path></svg></a><a href="https://www.linkedin.com/in/julien-decruydt/" target="_blank" class="social-icon hover:scale-110 transition-transform duration-300" data-v-4da03daf><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-4da03daf><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-4da03daf></path></svg></a></div></div></div></div></div></div><div class="absolute bottom-0 left-0 right-0" data-v-4da03daf><div class="section-separator" data-v-4da03daf></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4da03daf"]]);
const _sfc_main$3 = {
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        name: "Vue.js",
        icon: "simple-icons:vuedotjs",
        description: "Advanced proficiency in Vue.js ecosystem and best practices"
      },
      {
        name: "Nuxt.js",
        icon: "simple-icons:nuxtdotjs",
        description: "Expert in building SSR and SPA applications"
      },
      {
        name: "JavaScript",
        icon: "simple-icons:javascript",
        description: "Modern ES6+ JavaScript and TypeScript"
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
        description: "Utility-first CSS framework for rapid UI development"
      },
      {
        name: "Git",
        icon: "simple-icons:git",
        description: "Version control and collaborative development"
      },
      {
        name: "Ionic",
        icon: "simple-icons:ionic",
        description: "Cross-platform mobile app development"
      },
      {
        name: "Sass/SCSS",
        icon: "simple-icons:sass",
        description: "Advanced CSS preprocessing and architecture"
      },
      {
        name: "Python",
        icon: "simple-icons:python",
        description: "Backend development and automation scripts"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-padding section-hollow relative overflow-hidden skills-section",
        id: "skills"
      }, _attrs))} data-v-cfa8ca50><div class="container relative z-10" data-v-cfa8ca50><div${ssrRenderAttrs(mergeProps({
        class: "text-center",
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-cfa8ca50><h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase" data-v-cfa8ca50>MY EXPERTISE</h1><h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6" data-v-cfa8ca50><span class="text-white" data-v-cfa8ca50>Skills &amp;</span> <span class="gradient-text-primary" data-v-cfa8ca50>Technologies</span></h2><p class="text-center text-muted mb-16" data-v-cfa8ca50> High-level experience with Vue.js, Nuxt.js, and modern JavaScript ecosystem to deliver exceptional solutions quickly. </p></div><div class="relative grid md:grid-cols-4 grid-cols-2 gap-6 auto-rows-fr mx-auto mt-12" data-v-cfa8ca50><!--[-->`);
      ssrRenderList(skills, (skill, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: skill.name,
          class: "skill-card",
          initial: { opacity: 0, y: 40 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 400 + index * 100
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-cfa8ca50><div class="skill-icon" data-v-cfa8ca50>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.icon,
          class: "text-3xl"
        }, null, _parent));
        _push(`</div><h3 class="skill-name" data-v-cfa8ca50>${ssrInterpolate(skill.name)}</h3><p class="skill-description" data-v-cfa8ca50>${ssrInterpolate(skill.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="absolute bottom-0 left-0 right-0" data-v-cfa8ca50><div class="section-separator" data-v-cfa8ca50></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cfa8ca50"]]);
const projects = [
  {
    name: "Suzuki France",
    company: "Suzuki",
    logo: "suzuki.png",
    description: "Official website for Suzuki France with modern design, vehicle catalog, and dealer locator functionality.",
    background: "suzuki-fr-new.jpg",
    isImage: true,
    year: "2022",
    link: "https://www.suzuki.fr/",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS"
    ]
  },
  {
    name: "Suzuki Concession",
    company: "Suzuki",
    logo: "suzuki.png",
    description: "Website for Suzuki dealers of Suzuki cars.",
    background: "suzuki-concession-fond.jpg",
    isImage: true,
    year: "2022",
    link: "https://www.suzuki.fr/concession/",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS"
    ]
  },
  {
    name: "Suzuki Care",
    company: "Suzuki",
    logo: "suzuki.png",
    description: "Digital platform for dealerships to manage service estimates, repairs, and maintenance scheduling efficiently.",
    background: "linear-gradient(62deg, #de033a 0%, #013790 100%)",
    isImage: false,
    year: "2023",
    link: "#",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS"
    ]
  },
  {
    name: "Novaseo",
    company: "Novaseo",
    logo: "logo-blanc_novaseo-1.png",
    description: "SaaS platform providing comprehensive SEO tools and analytics for their clients.",
    background: "novaseo-fond.jpg",
    isImage: true,
    year: "2018",
    link: "#",
    tags: [
      "Vue.js",
      "Python",
      "Django",
      "Tailwind CSS"
    ]
  },
  {
    name: "Novavocat",
    company: "Novaseo",
    logo: "novavocat-logo.png",
    description: "Legal consultation platform connecting clients with qualified lawyers through an intuitive Q&A system.",
    background: "novavocat-fond.jpg",
    isImage: true,
    year: "2019",
    link: "#",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Django",
      "Tailwind CSS"
    ]
  },
  {
    name: "Quai38",
    company: "Quai38",
    logo: "quai38-logo-white.svg",
    description: "Restaurant website featuring menu showcase, reservation system, and location information.",
    background: "quai38-fond.jpg",
    isImage: true,
    year: "2018",
    link: "#",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Sass"
    ]
  }
];
const _sfc_main$2 = {
  __name: "CaseStudiesSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "section-padding section-hollow relative"
      }, _attrs))} data-v-d9692a5e><div class="container relative z-10" data-v-d9692a5e><div${ssrRenderAttrs(mergeProps({
        class: "text-center mb-12",
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-d9692a5e><h1 class="text-sm md:text-lg font-bold tracking-wider text-muted uppercase" data-v-d9692a5e>MY WORK</h1><h2 class="text-2xl md:text-4xl font-bold leading-tight mb-6" data-v-d9692a5e><span class="text-white" data-v-d9692a5e>Featured</span> <span class="gradient-text-primary" data-v-d9692a5e>Projects</span></h2><p class="text-center text-muted mb-12" data-v-d9692a5e> Here are some of the projects I&#39;ve worked on, showcasing my expertise in Vue.js, Nuxt.js, and modern web development. </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid mt-12 mb-16" data-v-d9692a5e><!--[-->`);
      ssrRenderList(unref(projects), (project, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: project.name + index,
          class: "project-card hover:scale-105 transition-transform duration-300",
          initial: { opacity: 0, y: 40 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 400 + index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-d9692a5e><div class="project-gradient" data-v-d9692a5e></div><div class="project-content" data-v-d9692a5e><div class="project-header" data-v-d9692a5e><div class="project-company" data-v-d9692a5e>${ssrInterpolate(project.company)}</div><div class="project-year-badge" data-v-d9692a5e>${ssrInterpolate(project.year)}</div></div><div class="project-main" data-v-d9692a5e><h3 class="project-title" data-v-d9692a5e>${ssrInterpolate(project.name || project.company)}</h3><p class="project-description" data-v-d9692a5e>${ssrInterpolate(project.description)}</p></div><div class="project-footer" data-v-d9692a5e><div class="project-tech" data-v-d9692a5e><!--[-->`);
        ssrRenderList(project.tags, (tag) => {
          _push(`<span class="tech-tag" data-v-d9692a5e>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="project-actions" data-v-d9692a5e><button class="action-button" data-v-d9692a5e><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d9692a5e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-d9692a5e></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-d9692a5e></path></svg><span data-v-d9692a5e>View</span></button></div></div></div><div class="project-hover-effects" data-v-d9692a5e><div class="hover-gradient" data-v-d9692a5e></div><div class="hover-border" data-v-d9692a5e></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center" data-v-d9692a5e><p class="text-muted mb-6" data-v-d9692a5e>Interested in working together?</p><a href="#contact" class="btn-primary pulse-glow inline-flex items-center gap-2" data-v-d9692a5e><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d9692a5e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-d9692a5e></path></svg> Get In Touch </a></div></div><div class="absolute bottom-0 left-0 right-0" data-v-d9692a5e><div class="section-separator" data-v-d9692a5e></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaseStudiesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d9692a5e"]]);
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-10" }, _attrs))} data-v-094fa50a><div class="container py-8" data-v-094fa50a><div class="flex flex-col md:flex-row items-center justify-between gap-4" data-v-094fa50a><div class="flex items-center space-x-2" data-v-094fa50a><div data-v-094fa50a><div class="font-medium text-sm" data-v-094fa50a>Julien Decruydt</div><div class="text-muted text-xs" data-v-094fa50a>Vue.js Developer</div></div></div><div class="flex items-center space-x-3" data-v-094fa50a><a href="mailto:contact@juliendecruydt.com" class="p-2 hover:bg-footer-hover rounded-lg transition-colors duration-200" data-v-094fa50a><svg class="w-4 h-4 text-muted hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-094fa50a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-094fa50a></path></svg></a><a href="https://linkedin.com/in/julien-decruydt" target="_blank" class="p-2 hover:bg-footer-hover rounded-lg transition-colors duration-200" data-v-094fa50a><svg class="w-4 h-4 text-muted hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" data-v-094fa50a><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-094fa50a></path></svg></a><a href="https://github.com/JulienDecruydt" target="_blank" class="p-2 hover:bg-footer-hover rounded-lg transition-colors duration-200" data-v-094fa50a><svg class="w-4 h-4 text-muted hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" data-v-094fa50a><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" data-v-094fa50a></path></svg></a></div></div><div class="text-center mt-6 pt-4 border-t border-maya-blue-light" data-v-094fa50a><p class="text-muted text-xs" data-v-094fa50a> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Julien Decruydt </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-094fa50a"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Julien Decruydt - Vue.js Freelance Developer",
      meta: [
        { name: "description", content: "Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise. Available for your next project." },
        { name: "keywords", content: "Vue.js, Nuxt.js, freelance developer, frontend development, JavaScript" },
        { property: "og:title", content: "Julien Decruydt - Vue.js Freelance Developer" },
        { property: "og:description", content: "Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise. Available for your next project." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Julien Decruydt - Vue.js Freelance Developer" },
        { name: "twitter:description", content: "Experienced Vue.js & Nuxt.js freelance developer with 6+ years of expertise." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_CompaniesSection = __nuxt_component_2;
      const _component_AboutSection = __nuxt_component_3;
      const _component_FeaturesSection = __nuxt_component_4;
      const _component_CaseStudiesSection = __nuxt_component_5;
      const _component_AppFooter = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavigation, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CompaniesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CaseStudiesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B_c8Rc7w.js.map
