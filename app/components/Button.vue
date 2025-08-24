<template>
  <button 
    :class="buttonClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'font-semibold rounded-barbershop transition-all duration-300 font-body'
  
  const variantClasses = {
    primary: 'bg-button-primary text-text-inverse hover:bg-button-primary-hover shadow-barbershop hover:shadow-barbershop-lg',
    secondary: 'border-2 border-button-secondary text-button-secondary hover:bg-gold-50 hover:shadow-gold',
    outline: 'border-2 border-border-accent text-text-accent hover:bg-primary-50'
  }
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  }
  
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size]
  ].join(' ')
})
</script>
