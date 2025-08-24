<template>
  <section class="h-screen bg-gradient-to-br from-primary-50 via-background-secondary to-gold-50 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-gold-900/10"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-y-auto">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-full py-8">
        
        <!-- Left Side - Text Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-6xl font-extrabold text-text-primary font-display leading-tight">
              Transforme seu
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600">
                Visual
              </span>
            </h1>
            <p class="text-xl lg:text-2xl text-text-secondary font-body leading-relaxed">
              Experimente o melhor em cortes de cabelo e cuidados masculinos com nossa equipe especializada.
            </p>
          </div>
          
          <div class="space-y-4">
            <p class="text-lg text-text-muted font-body">
              Na nossa barbearia, cada corte é uma obra de arte. Combinamos técnicas tradicionais com tendências modernas para criar o visual perfeito para você.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <Button variant="primary" size="md" @click="handleAgendarClick">
              Agendar Horário
            </Button>
            <Button variant="secondary" size="md" @click="handleServicosClick">
              Ver Serviços
            </Button>
          </div>

          <!-- Features -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-body">Profissionais</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-body">Pontualidade</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-body">Qualidade</p>
            </div>
          </div>
        </div>

        <!-- Right Side - Image Placeholder -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-primary-100 to-gold-100 rounded-barbershop shadow-barbershop-lg overflow-hidden">
            <!-- Hero Image -->
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="/images/imagem-hero.jpg" 
                alt="Barbeiro profissional cortando cabelo de cliente"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute top-4 right-4 w-16 h-16 bg-gold-200 rounded-full opacity-50"></div>
            <div class="absolute bottom-4 left-4 w-12 h-12 bg-primary-300 rounded-full opacity-30"></div>
          </div>
          
          <!-- Floating Card -->
          <div class="absolute -bottom-6 -left-6 bg-card-background p-4 rounded-barbershop shadow-barbershop border border-card-border">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-text-primary font-body">5.0 Avaliação</p>
                <p class="text-xs text-text-muted font-body">+200 clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'

// Hero component para a página inicial da barbearia
const handleAgendarClick = () => {
  console.log('Agendar horário clicked')
  // Aqui será implementada a lógica de agendamento
}

const handleServicosClick = () => {
  console.log('Ver serviços clicked')
  // Aqui será implementada a navegação para serviços
}
</script>
