<template>
  <div>
    <!-- Hero Section -->
    <div
      class="hero-section bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-[#343a40] dark:to-[#212529]"
    >
      <div class="hero-content">
        <h1 class="hero-title text-[#212529] dark:text-[#f8f9fa]">{{ $t('home.title') }}</h1>
        <p class="hero-subtitle text-[#495057] dark:text-[#dee2e6]">{{ $t('home.subtitle') }}</p>
        <div class="hero-buttons flex justify-center items-center gap-4">
          <router-link to="/research" class="btn-research">
            {{ $t('home.startResearch') }}
          </router-link>
          <router-link to="/about" class="btn-learn-more">
            {{ $t('home.learnMore') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="home-container bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-[#ced4da]">
      <!-- Features Section -->
      <section class="features-section text-gray-900 dark:text-[#ced4da]">
        <h2 class="section-title text-center">{{ $t('home.featuresTitle') }}</h2>
        <div class="flex flex-wrap justify-center mt-5 gap-4 max-w-6xl mx-auto">
          <div class="w-full md:w-1/3 lg:w-1/4">
            <div class="feature-card h-100">
              <div class="feature-icon">
                <Search class="w-10 h-10" />
              </div>
              <h3 class="feature-title">{{ $t('home.feature1Title') }}</h3>
              <p class="feature-description">{{ $t('home.feature1Desc') }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4">
            <div class="feature-card h-100">
              <div class="feature-icon">
                <FileText class="w-10 h-10" />
              </div>
              <h3 class="feature-title">{{ $t('home.feature2Title') }}</h3>
              <p class="feature-description">{{ $t('home.feature2Desc') }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/4">
            <div class="feature-card h-100">
              <div class="feature-icon">
                <Languages class="w-10 h-10" />
              </div>
              <h3 class="feature-title">{{ $t('home.feature3Title') }}</h3>
              <p class="feature-description">{{ $t('home.feature3Desc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section
        class="how-it-works-section bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-[#ced4da]"
      >
        <h2 class="section-title text-center">{{ $t('home.howItWorksTitle') }}</h2>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">{{ $t('home.step1Title') }}</h3>
              <p class="step-description">{{ $t('home.step1Desc') }}</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">{{ $t('home.step2Title') }}</h3>
              <p class="step-description">{{ $t('home.step2Desc') }}</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">{{ $t('home.step3Title') }}</h3>
              <p class="step-description">{{ $t('home.step3Desc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="use-cases-section">
        <h2 class="section-title text-center">{{ $t('home.useCasesTitle') }}</h2>
        <div class="flex flex-wrap justify-center mt-5 gap-8 max-w-8xl mx-auto">
          <div class="w-full md:w-1/3 lg:w-1/3">
            <div class="use-case-card">
              <div class="use-case-icon">
                <GraduationCap class="w-8 h-8" />
              </div>
              <h3 class="use-case-title">{{ $t('home.useCase1Title') }}</h3>
              <p class="use-case-description">{{ $t('home.useCase1Desc') }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3">
            <div class="use-case-card">
              <div class="use-case-icon">
                <Briefcase class="w-8 h-8" />
              </div>
              <h3 class="use-case-title">{{ $t('home.useCase2Title') }}</h3>
              <p class="use-case-description">{{ $t('home.useCase2Desc') }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3">
            <div class="use-case-card">
              <div class="use-case-icon">
                <Newspaper class="w-8 h-8" />
              </div>
              <h3 class="use-case-title">{{ $t('home.useCase3Title') }}</h3>
              <p class="use-case-description">{{ $t('home.useCase3Desc') }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3">
            <div class="use-case-card">
              <div class="use-case-icon">
                <BookOpen class="w-8 h-8" />
              </div>
              <h3 class="use-case-title">{{ $t('home.useCase4Title') }}</h3>
              <p class="use-case-description">{{ $t('home.useCase4Desc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">{{ $t('home.ctaTitle') }}</h2>
          <p class="cta-description">{{ $t('home.ctaDesc') }}</p>
          <div class="cta-buttons">
            <router-link to="/register" class="cta-btn-primary">
              {{ $t('home.signUpNow') }}
            </router-link>
            <router-link to="/research" class="cta-btn-secondary ml-4">
              {{ $t('home.tryWithoutAccount') }}
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from 'vue-i18n'
import {
  Search,
  FileText,
  Languages,
  GraduationCap,
  Briefcase,
  Newspaper,
  BookOpen,
} from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()
const topic = ref('')
const depth = ref('detailed')
const { locale } = useI18n()

onMounted(() => {
  // This ensures the locale is set when the component mounts
  // which avoids potential issues with conditional hook calls.
})

const startResearch = () => {
  if (!topic.value.trim()) {
    alert('Please enter a research topic')
    return
  }

  // In a real app, this would create a new research request via API
  // For now, we'll just navigate to a mock report page
  let targetRoute = '/reports/new'
  if (!authStore.isLoggedIn) {
    targetRoute = '/login'
  }
  router.push(targetRoute)
}
</script>

<style scoped>
/* Hero section styles */
.hero-section {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/static/hero-bg.jpg') center center;
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  margin-top: 2rem;
}

/* 修改后的按钮样式 */
.btn-research,
.btn-learn-more {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-research {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border: 2px solid transparent;
}

.btn-research:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(79, 70, 229, 0.3);
}

.btn-research::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.btn-research:hover::after {
  opacity: 1;
}

.btn-learn-more {
  background: transparent;
  color: #4f46e5;
  border: 2px solid #4f46e5;
  position: relative;
}

.btn-learn-more:hover {
  transform: translateY(-2px);
  color: white;
  box-shadow: 0 6px 12px rgba(79, 70, 229, 0.2);
}

.btn-learn-more::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.btn-learn-more:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

/* 添加按钮动画效果 */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.btn-research {
  animation: pulse 2s infinite;
}

.btn-research:hover {
  animation: none;
}

/* Home container styles */
.home-container {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Features section styles */
.features-section {
  margin-bottom: 5rem;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: #7c3aed;
  margin: 15px auto 0;
  border-radius: 2px;
}

.feature-card {
  border-radius: 12px;
  padding: 2.5rem 2rem;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #c4c4c4;
  box-shadow: 0 5px 15px rgba(70, 70, 70, 0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(124, 58, 237, 0.2);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(124, 58, 237, 0.1);
  border-radius: 50%;
  color: #7c3aed;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background-color: #7c3aed;
  color: white;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
}

.feature-description {
  text-align: center;
  color: #6c757d;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* How it works section styles */
.how-it-works-section {
  margin-bottom: 5rem;
  padding: 3rem;
  border-radius: 12px;
}

.steps-container {
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.step:last-child {
  margin-bottom: 0;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: #7c3aed;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 20px;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.step-description {
  color: #6c757d;
}

/* Use cases section styles */
.use-cases-section {
  margin-bottom: 5rem;
}

.use-case-card {
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  height: 100%;
  border: 1px solid #dee2e6;
}

.use-case-icon {
  margin-bottom: 15px;
  color: #7c3aed;
}

.use-case-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.use-case-description {
  color: #6c757d;
}

/* CTA section styles */
.cta-section {
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.cta-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-buttons {
  margin-top: 2rem;
}

/* CTA Button Styles */
.cta-btn-primary,
.cta-btn-secondary {
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
  outline: none;
}

.cta-btn-primary {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  color: #7c3aed;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.cta-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

.cta-btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.cta-btn-primary:hover::after {
  opacity: 1;
}

.cta-btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.7);
  position: relative;
}

.cta-btn-secondary:hover {
  transform: translateY(-2px);
  color: white;
  border-color: white;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

.cta-btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.cta-btn-secondary:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

/* Button animation */
@keyframes pulseLight {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.cta-btn-primary {
  animation: pulseLight 2s infinite;
}

.cta-btn-primary:hover {
  animation: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    margin-left: 0 !important;
  }
}

/* Responsive adjustments for home page */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .feature-card,
  .use-case-card {
    margin-bottom: 20px;
  }

  .how-it-works-section {
    padding: 2rem 1rem;
  }
}
</style>
