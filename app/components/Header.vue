<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-primary-800/20">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#inicio" class="text-2xl font-bold font-display text-white hover:text-gold-400 transition-colors">
            Barbearia
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              href="#inicio" 
              @click="scrollToSection('inicio')"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              @click="scrollToSection('sobre')"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
            >
              Sobre Nós
            </a>
            <a 
              href="#servicos" 
              @click="scrollToSection('servicos')"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              @click="scrollToSection('contato')"
              class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
            >
              Contato
            </a>
          </div>
        </div>


        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-300 hover:text-white p-2 rounded-barbershop hover:bg-primary-800/30 transition-all duration-300 flex flex-col justify-center items-center w-8 h-8"
          >
            <div class="w-5 h-0.5 bg-current transition-all duration-300" :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'"></div>
            <div class="w-5 h-0.5 bg-current transition-all duration-300" :class="mobileMenuOpen ? 'opacity-0' : 'mb-1'"></div>
            <div class="w-5 h-0.5 bg-current transition-all duration-300" :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-background-dark/95 backdrop-blur-sm border-t border-primary-800/20">
          <a 
            href="#inicio" 
            @click="scrollToSection('inicio')"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
          >
            Início
          </a>
          <a 
            href="#sobre" 
            @click="scrollToSection('sobre')"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
          >
            Sobre Nós
          </a>
          <a 
            href="#servicos" 
            @click="scrollToSection('servicos')"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            @click="scrollToSection('contato')"
            class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-body transition-colors hover:bg-primary-800/30 rounded-barbershop"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Button from './Button.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (sectionId) => {
  // Fechar menu mobile se estiver aberto
  mobileMenuOpen.value = false
  
  // Scroll suave para a seção
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const handleAgendarClick = () => {
  // Fazer ligação para o telefone da barbearia
  window.location.href = 'tel:+5511976048556'
}

// Fechar menu mobile ao clicar fora
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  })
})
</script>
