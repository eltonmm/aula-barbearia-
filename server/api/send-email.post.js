export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Log the attempt for debugging
    console.log('Tentando enviar email para:', body)
    
    // Check if password is configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      throw new Error('GMAIL_APP_PASSWORD não configurado no arquivo .env')
    }
    
    // Import nodemailer dynamically to avoid ESM issues
    const nodemailer = await import('nodemailer')
    
    // Create transporter with Gmail configuration
    const transporter = nodemailer.default.createTransporter({
      service: 'gmail',
      auth: {
        user: 'elton.martins39@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Email content
    const mailOptions = {
      from: '"Barbearia Website" <elton.martins39@gmail.com>',
      to: 'elton.martins39@gmail.com',
      subject: `Nova mensagem do site - ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b6f47; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Nova mensagem recebida do site da barbearia
          </h2>
          
          <div style="background-color: #f5f2ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${body.name}</p>
            <p><strong>Telefone:</strong> ${body.phone}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Serviço:</strong> ${body.service}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #8b6f47;">Mensagem:</h3>
            <p style="background-color: #fafafa; padding: 15px; border-left: 4px solid #f59e0b; margin: 10px 0;">
              ${body.message}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            <em>Mensagem enviada através do formulário de contato do site da barbearia.</em>
          </p>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)
    
    return {
      success: true,
      message: 'Email enviado com sucesso!'
    }
    
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    return {
      success: false,
      message: 'Erro ao enviar email',
      error: error.message
    }
  }
})
