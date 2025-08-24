<template>
  <div class="bg-card-background rounded-barbershop shadow-barbershop hover:shadow-barbershop-lg transition-all duration-300 overflow-hidden border border-card-border group">
    <!-- Service Image - Larger -->
    <div class="relative overflow-hidden">
      <div class="aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
        <img 
          :src="imageSrc" 
          :alt="`Corte ${serviceName}`"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <!-- Price Badge -->
      <div class="absolute top-4 right-4 bg-gold-500 text-text-inverse px-3 py-1 rounded-full shadow-gold">
        <span class="text-sm font-semibold font-body">R$ {{ price }}</span>
      </div>
      
      <!-- Gradient Overlay for better text readability -->
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent h-24"></div>
      
      <!-- Service Info Overlay -->
      <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 class="text-lg font-semibold font-display mb-1">
          {{ serviceName }}
        </h3>
        <p class="text-neutral-200 font-body text-xs opacity-90">
          {{ description }}
        </p>
      </div>
    </div>
    
    <!-- Action Button -->
    <div class="p-4">
      <Button variant="primary" size="sm" @click="handleServiceClick" class="w-full">
        Agendar Serviço
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Corte profissional executado com precisão e estilo.'
  }
})

const emit = defineEmits(['serviceClick'])

const handleServiceClick = () => {
  emit('serviceClick', {
    name: props.serviceName,
    price: props.price
  })
  console.log(`Agendar serviço: ${props.serviceName} - R$ ${props.price}`)
}
</script>
