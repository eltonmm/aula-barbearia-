<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left Side - Text Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h2 class="text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
              Sobre 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400">
                Nós
              </span>
            </h2>
            
            <p class="text-xl text-gray-300 font-body leading-relaxed">
              Há mais de uma década transformando o cuidado masculino em arte, nossa barbearia é referência em qualidade e tradição.
            </p>
          </div>
          
          <div class="space-y-6">
            <p class="text-lg text-gray-400 font-body leading-relaxed">
              Fundada com a paixão pela excelência, combinamos técnicas clássicas da barbearia tradicional com as tendências mais modernas do mercado. Cada cliente recebe um atendimento personalizado, onde cada detalhe é pensado para proporcionar uma experiência única e memorável.
            </p>
            
            <p class="text-lg text-gray-400 font-body leading-relaxed">
              Nossa equipe de profissionais altamente qualificados está sempre em busca da perfeição, utilizando apenas produtos premium e equipamentos de última geração para garantir resultados impecáveis.
            </p>
          </div>

          <!-- Features List -->
          <div class="grid grid-cols-2 gap-6 pt-6">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white font-body">+10 Anos</h4>
                <p class="text-sm text-gray-400 font-body">de experiência</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white font-body">+500 Clientes</h4>
                <p class="text-sm text-gray-400 font-body">satisfeitos</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white font-body">5.0 Estrelas</h4>
                <p class="text-sm text-gray-400 font-body">avaliação média</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-gold-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white font-body">Produtos Premium</h4>
                <p class="text-sm text-gray-400 font-body">qualidade garantida</p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-6">
            <Button variant="primary" size="md" @click="handleContatoClick">
              Entre em Contato
            </Button>
          </div>
        </div>

        <!-- Right Side - Image -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-primary-100 to-gold-100 rounded-barbershop shadow-barbershop-lg overflow-hidden">
            <!-- Entrance Image -->
            <div class="aspect-[3/4] overflow-hidden">
              <img 
                src="/images/frente.jpg" 
                alt="Entrada da barbearia - ambiente acolhedor e profissional"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute top-6 right-6 w-20 h-20 bg-gold-200 rounded-full opacity-40"></div>
            <div class="absolute bottom-6 left-6 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
          </div>
          
          <!-- Floating Info Card -->
          <div class="absolute -bottom-8 -right-6 bg-card-background p-6 rounded-barbershop shadow-barbershop-lg border border-card-border">
            <div class="text-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-body">Ambiente</p>
              <p class="text-xs text-text-muted font-body">Acolhedor & Moderno</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'

// AboutUs component para apresentação da barbearia
const handleContatoClick = () => {
  console.log('Entre em contato clicked')
  // Aqui será implementada a lógica de contato
}
</script>
