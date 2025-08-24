<template>
  <section class="py-20 bg-gradient-to-br from-background-secondary to-primary-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-text-primary font-display leading-tight mb-6">
          Nossos 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600">
            Serviços
          </span>
        </h2>
        <p class="text-xl text-text-secondary font-body max-w-3xl mx-auto">
          Oferecemos uma variedade de serviços profissionais para cuidar do seu visual com excelência e estilo.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          service-name="Cabelo César"
          image-src="/images/Cabelo-Cesar-compactado.jpg"
          price="45"
          description="Corte clássico e elegante, ideal para um visual sofisticado e atemporal."
          @service-click="handleServiceClick"
        />
        
        <ServiceCard
          service-name="Cabelo Militar"
          image-src="/images/Cabelo-Militar-compactado.jpg"
          price="40"
          description="Corte militar preciso e prático, perfeito para um visual limpo e organizado."
          @service-click="handleServiceClick"
        />
        
        <ServiceCard
          service-name="Cabelo Pompadour"
          image-src="/images/Cabelo-Pompadour-compactado.jpg"
          price="55"
          description="Corte clássico com volume no topo, ideal para um estilo vintage e elegante."
          @service-click="handleServiceClick"
        />
        
        <ServiceCard
          service-name="Cabelo Degradê"
          image-src="/images/Cabelo_Degrade_compactado (1).jpg"
          price="50"
          description="Corte moderno com transição suave, perfeito para um look contemporâneo."
          @service-click="handleServiceClick"
        />
        
        <ServiceCard
          service-name="Cabelo Texturizado"
          image-src="/images/texturizado.jpg"
          price="48"
          description="Corte moderno com textura e movimento, ideal para um visual despojado."
          @service-click="handleServiceClick"
        />
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-card-background p-8 rounded-barbershop shadow-barbershop border border-card-border max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-text-primary font-display mb-4">
            Pronto para transformar seu visual?
          </h3>
          <p class="text-text-secondary font-body mb-6">
            Agende seu horário e experimente nossos serviços profissionais.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="md" @click="handleAgendarClick">
              Agendar Agora
            </Button>
            <Button variant="secondary" size="md" @click="handleContatoClick">
              Falar Conosco
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import Button from './Button.vue'

// Services component para exibir os serviços da barbearia
const handleServiceClick = (serviceData) => {
  console.log('Serviço selecionado:', serviceData)
  // Aqui será implementada a lógica de agendamento específico
}

const handleAgendarClick = () => {
  console.log('Agendar agora clicked')
  // Aqui será implementada a lógica de agendamento geral
}

const handleContatoClick = () => {
  console.log('Falar conosco clicked')
  // Aqui será implementada a lógica de contato
}
</script>
