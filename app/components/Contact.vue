<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight mb-6">
          Entre em 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400">
            Contato
          </span>
        </h2>
        <p class="text-xl text-gray-300 font-body max-w-3xl mx-auto">
          Agende seu horário ou tire suas dúvidas. Estamos aqui para cuidar do seu visual com excelência.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        
        <!-- Left Side - Contact Form & Info -->
        <div class="space-y-8">
          <!-- Contact Info -->
          <div class="bg-card-background p-8 rounded-barbershop shadow-barbershop border border-card-border">
            <h3 class="text-2xl font-bold text-text-primary font-display mb-6">
              Informações de Contato
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4 p-4 rounded-barbershop bg-background-dark">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white font-body">Endereço</h4>
                  <p class="text-gray-300 font-body">Rua Moreira Cesar, 299<br>Jundiaí - São Paulo</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-4 rounded-barbershop bg-background-secondary">
                <div class="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary font-body">Telefone / WhatsApp</h4>
                  <p class="text-text-muted font-body">(11) 97604-85556</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-4 rounded-barbershop bg-background-dark">
                <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white font-body">Horário de Funcionamento</h4>
                  <p class="text-gray-300 font-body">Segunda a Sexta: 9h às 19h<br>Sábado: 8h às 17h<br>Domingo: Fechado</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-4 rounded-barbershop bg-background-secondary">
                <div class="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary font-body">Email</h4>
                  <p class="text-text-muted font-body">termil@termil.com.br<br>agendamento@termil.com.br</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Side - Map -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary-100 to-gold-100 rounded-barbershop shadow-barbershop-lg overflow-hidden border border-card-border">
            <!-- Embedded Google Map -->
            <div class="aspect-[4/5] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8!2d-46.8856!3d-23.1834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9dc93f6e5e5%3A0x1234567890abcdef!2sRua%20Moreira%20Cesar%2C%20299%20-%20Jundia%C3%AD%2C%20SP!5e0!3m2!1spt!2sbr!4v1692000000000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <!-- Location Info Card -->
          <div class="absolute -bottom-6 -left-6 bg-card-background p-4 rounded-barbershop shadow-barbershop border border-card-border">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-text-primary font-body">Centro da Cidade</p>
                <p class="text-xs text-text-muted font-body">Fácil acesso e estacionamento</p>
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

// Contact component para seção de contato da barbearia
const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    // Send form data to API endpoint
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        service: form.value.service,
        message: form.value.message
      }
    })
    
    if (response.success) {
      // Reset form after successful submission
      form.value = {
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      }
      
      alert('Mensagem enviada com sucesso para elton.martins39@gmail.com! Entraremos em contato em breve.')
    } else {
      throw new Error(response.message || 'Erro ao enviar mensagem')
    }
    
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    alert('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.')
  }
}
</script>
