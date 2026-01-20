'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Sparkles, Settings, BarChart3, Zap, Menu, X, Bot, User, Check, Copy, Mic, Volume2, VolumeX, ImagePlus, Palette, Globe, CreditCard, Code, TrendingUp, Clock, Users, MessageSquare, DollarSign, Download, Phone, Home } from 'lucide-react';
import { storage } from '@/lib/storage';

export default function AIBusinessAssistantPro() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: '',
    description: '',
    hours: '',
    phone: '',
    address: '',
    logo: '',
    primaryColor: '#06B6D4',
    secondaryColor: '#0EA5E9',
    accentColor: '#3B82F6'
  });

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', image: '' });
  
  const [isConfigured, setIsConfigured] = useState(false);

  // Example configurations for demo
  const exampleConfigs = {
    es: {
      name: 'Café Delicias',
      type: 'Cafetería',
      description: 'Ofrecemos café artesanal de origen, postres caseros y un ambiente acogedor. Contamos con opciones veganas y sin gluten. WiFi gratis y espacio para trabajar.',
      hours: 'Lun-Vie 7AM-8PM, Sáb-Dom 8AM-9PM',
      phone: '5511345678900',
      address: 'Av. Paulista 1000, São Paulo, SP',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    },
    en: {
      name: 'Delicias Café',
      type: 'Coffee Shop',
      description: 'We offer artisanal origin coffee, homemade desserts and a cozy atmosphere. We have vegan and gluten-free options. Free WiFi and workspace available.',
      hours: 'Mon-Fri 7AM-8PM, Sat-Sun 8AM-9PM',
      phone: '15551234567',
      address: '123 Main Street, New York, NY',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    },
    pt: {
      name: 'Café Delícias',
      type: 'Cafeteria',
      description: 'Oferecemos café artesanal de origem, sobremesas caseiras e um ambiente aconchegante. Temos opções veganas e sem glúten. WiFi grátis e espaço para trabalhar.',
      hours: 'Seg-Sex 7h-20h, Sáb-Dom 8h-21h',
      phone: '5511345678900',
      address: 'Av. Paulista 1000, São Paulo, SP',
      logo: '☕',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    }
  };

  const exampleProducts = [
    { name: 'Espresso', price: '3.50', category: 'Bebidas Calientes', image: '☕' },
    { name: 'Cappuccino', price: '4.50', category: 'Bebidas Calientes', image: '☕' },
    { name: 'Latte', price: '4.50', category: 'Bebidas Calientes', image: '🥛' },
    { name: 'Frappé', price: '5.50', category: 'Bebidas Frías', image: '🥤' },
    { name: 'Smoothie', price: '6.00', category: 'Bebidas Frías', image: '🍹' },
    { name: 'Cheesecake', price: '5.50', category: 'Postres', image: '🍰' },
    { name: 'Brownie', price: '4.50', category: 'Postres', image: '🍫' }
  ];

  // LISTA DE INDUSTRIAS PARA EL SELECTOR
  const businessTypes = [
    { id: 'coffee', label: '☕ Cafetería / Restaurante', value: 'Restaurante' },
    { id: 'health', label: '🦷 Clínica Dental / Salud', value: 'Clínica de Salud' },
    { id: 'gym', label: '💪 Gimnasio / Fitness', value: 'Centro de Fitness' },
    { id: 'realestate', label: '🏠 Inmobiliaria', value: 'Agencia Inmobiliaria' },
    { id: 'legal', label: '⚖️ Legal / Abogados', value: 'Estudio Jurídico' },
    { id: 'store', label: '🛍️ Tienda / E-commerce', value: 'Tienda' },
    { id: 'beauty', label: '💇‍♀️ Belleza / Estética', value: 'Centro de Estética' },
    { id: 'auto', label: '🔧 Taller Mecánico', value: 'Taller Automotriz' },
    { id: 'education', label: '🎓 Educación / Cursos', value: 'Academia' },
    { id: 'other', label: '✨ Otro (Personalizado)', value: '' }
  ];

  const loadExampleConfig = () => {
    const example = exampleConfigs[selectedLanguage];
    
    // 1. Carga la Info del Negocio
    setBusinessInfo(example);
    
    // 2. Carga los Productos de ejemplo
    setProducts(exampleProducts); 

    // 3. ACTIVA LOS PAGOS PARA LA DEMO
    // (Aquí sí van los tres puntos antes de paymentInfo, es código real)
    setPaymentInfo({
      ...paymentInfo,
      pixEnabled: true,
      creditCardEnabled: true,
      debitCardEnabled: true,
      cashEnabled: true,
      paypalEnabled: false,
      stripeEnabled: false,
      mercadoPagoEnabled: false
    });

    setIsConfigured(true);
    setActiveTab('chat');
    
    // Textos de bienvenida
    const welcomeTexts = {
      es: `👋 ¡Hola! Bienvenido a ${example.name}.
      
Soy tu asistente inteligente 🤖. Estoy aquí para atenderte rápido.

Puedes preguntarme sobre:
☕ **Menú y Precios**
📍 **Ubicación y Horarios**
📅 **Reservas**
❓ **Servicios del local**

¿Qué te gustaría consultar primero?`,
      
      en: `👋 Hello! Welcome to ${example.name}.
      
I'm your smart assistant 🤖. I'm here to help you fast.

You can ask me about:
☕ **Menu and Prices**
📍 **Location and Hours**
📅 **Bookings**
❓ **Services**

What would you like to check first?`,
      
      pt: `👋 Olá! Bem-vindo ao ${example.name}.
      
Sou seu assistente inteligente 🤖. Estou aqui para te atender rápido.

Você pode me perguntar sobre:
☕ **Menu e Preços**
📍 **Localização e Horários**
📅 **Reservas**
❓ **Serviços**

O que você gostaria de consultar primeiro?`
    };

    const welcomeMsg = {
      role: 'assistant',
      content: welcomeTexts[selectedLanguage],
      timestamp: new Date().toISOString()
    };
    
    setMessages([welcomeMsg]);
    
    setNotifMessage(t.demoLoaded);
    setShowCopyNotif(true);
    setTimeout(() => setShowCopyNotif(false), 3000);
  };

  const resetToWelcome = () => {
    setIsConfigured(false);
    setMessages([]);
    setProducts([]);
    setBusinessInfo({
      name: '',
      type: '',
      description: '',
      hours: '',
      phone: '',
      address: '',
      logo: '',
      primaryColor: '#06B6D4',
      secondaryColor: '#0EA5E9',
      accentColor: '#3B82F6'
    });
    setActiveTab('chat');
  };
  const [stats, setStats] = useState({
    totalChats: 0,
    todayChats: 0,
    avgResponseTime: '< 1s',
    satisfaction: 95,
    peakHours: '2PM - 4PM',
    topQuestions: {
      es: ['Horarios', 'Ubicación', 'Precios'],
      en: ['Hours', 'Location', 'Prices'],
      pt: ['Horários', 'Localização', 'Preços']
    }
  });
  
  const [analyticsData, setAnalyticsData] = useState({
    hourlyData: [5, 12, 18, 25, 30, 28, 35, 40, 38, 32, 20, 15],
    dailyData: [45, 52, 48, 65, 70, 68, 55],
    conversionRate: 68,
    avgSessionTime: '3:24'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    stripeEnabled: false,
    mercadoPagoEnabled: false,
    paypalEnabled: false,
    // NUEVOS MÉTODOS DE PAGO ESPECÍFICOS:
    pixEnabled: false,        // 🇧🇷 Pix
    creditCardEnabled: false, // 💳 Crédito
    debitCardEnabled: false,  // 💳 Débito
    cashEnabled: true,        // 💵 Efectivo (Activo por defecto)
    currency: 'USD',
    testMode: true
  });

  const [showCopyNotif, setShowCopyNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState('');
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const translations = {
    es: {
      // Navigation
      chat: 'Chat',
      config: 'Configuración',
      analytics: 'Analíticas',
      integrations: 'Integraciones',
      
      // General
      welcome: '¡Hola! Bienvenido a',
      canHelp: 'Soy tu asistente virtual. ¿En qué puedo ayudarte?',
      typing: 'escribiendo...',
      messagePlaceholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      configure: 'Configurar Ahora',
      loadExample: 'Cargar Ejemplo de Demostración',
      demoLoaded: 'Ejemplo cargado - ¡Prueba el chat ahora!',
      backToWelcome: 'Volver al Inicio',
      
      // Configuration
      businessConfig: 'Configuración del Negocio',
      configSubtitle: 'Personaliza tu asistente con la información de tu negocio',
      businessName: 'Nombre del Negocio',
      businessNamePlaceholder: 'ej. Café Delicias',
      businessType: 'Tipo de Negocio',
      businessTypePlaceholder: 'ej. Cafetería, Clínica, Tienda',
      servicesDescription: 'Descripción de Servicios',
      servicesPlaceholder: 'Describe qué ofrece tu negocio...',
      businessHours: 'Horario de Atención',
      hoursPlaceholder: 'Lun-Vie 9AM-6PM',
      phoneNumber: 'Número de Teléfono',
      phonePlaceholder: '5511987654321',
      address: 'Dirección',
      addressPlaceholder: 'Av. Paulista 1000, São Paulo',
      brandColors: 'Colores de Marca',
      primary: 'Primario',
      secondary: 'Secundario',
      accent: 'Acento',
      businessLogo: 'Logo del Negocio',
      logoPlaceholder: 'Emoji o URL de imagen',
      productsServices: 'Productos/Servicios',
      productName: 'Nombre del producto',
      productPrice: 'Precio (ej: 5.50)',
      productCategory: 'Categoría (ej: Bebidas)',
      productImage: 'Emoji o URL imagen',
      addProduct: '+ Agregar Producto',
      save: 'Guardar Configuración',
      
      // Analytics
      totalChats: 'Total de Chats',
      today: 'Hoy',
      avgResponse: 'Respuesta Promedio',
      satisfaction: 'Satisfacción',
      hourlyActivity: 'Actividad por Hora',
      topQuestions: 'Preguntas Frecuentes',
      performanceMetrics: 'Métricas de Rendimiento',
      conversionRate: 'Tasa de Conversión',
      avgSessionTime: 'Tiempo Promedio de Sesión',
      peakHours: 'Horas Pico',
      schedules: 'Horarios',
      location: 'Ubicación',
      prices: 'Precios',
      
      // Integrations
      websiteWidget: 'Widget para Sitio Web',
      embedWebsite: 'Incrustar en cualquier sitio web',
      copyWidgetCode: 'Copiar Código del Widget',
      whatsappIntegration: 'Integración WhatsApp',
      connectTwilio: 'Conectar vía Twilio',
      copyWhatsappCode: 'Copiar Código WhatsApp',
      paymentProcessing: 'Procesamiento de Pagos',
      stripeMP: 'Stripe & MercadoPago',
      enableStripe: 'Activar Stripe',
      enableMP: 'Activar MercadoPago',
      multiLanguageSupport: 'Soporte Multi-idioma',
      languagesActive: 'ES, EN, PT activos',
      readyToDeploy: 'Listo para Desplegar',
      exportAssistant: 'Exporta tu asistente completo a tu propio servidor',
      exportCode: 'Exportar Código',
      exportConfig: 'Exportar Configuración',
      exportDocs: 'Exportar Documentación',
      
      // Messages
      export: 'Exportar',
      hours: 'Horario',
      location: 'Ubicación',
      prices: 'Precios',
      voiceEnabled: 'Voz activada',
      voiceDisabled: 'Voz desactivada',
      recording: 'Grabando...',
      welcomeTitle: 'Bienvenido a AI Assistant PRO',
      welcomeSubtitle: 'Configura tu negocio para activar tu asistente inteligente multiidioma con voz',
      voiceRecognition: 'Reconocimiento de Voz',
      imageAnalysis: 'Análisis de Imágenes',
      multiLanguage: 'Multi-idioma',
      whatsappReady: 'WhatsApp Listo',
      paymentIntegration: 'Integración de Pagos',
      proTip: 'Consejo Pro',
      proTipText: 'Configura tu negocio, prueba el chat y luego exporta a tu sitio web'
    },
    en: {
      // Navigation
      chat: 'Chat',
      config: 'Config',
      analytics: 'Analytics',
      integrations: 'Integrations',
      
      // General
      welcome: 'Hello! Welcome to',
      canHelp: 'I\'m your virtual assistant. How can I help you?',
      typing: 'typing...',
      messagePlaceholder: 'Type your message...',
      send: 'Send',
      configure: 'Configure Now',
      loadExample: 'Load Demo Example',
      demoLoaded: 'Example loaded - Try the chat now!',
      backToWelcome: 'Back to Home',
      
      // Configuration
      businessConfig: 'Business Configuration',
      configSubtitle: 'Personalize your AI assistant with your business information',
      businessName: 'Business Name',
      businessNamePlaceholder: 'e.g. TechCafe',
      businessType: 'Business Type',
      businessTypePlaceholder: 'e.g. Coffee Shop, Clinic, Store',
      servicesDescription: 'Services Description',
      servicesPlaceholder: 'Describe what your business offers...',
      businessHours: 'Business Hours',
      hoursPlaceholder: 'Mon-Fri 9AM-6PM',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '15551234567',
      address: 'Address',
      addressPlaceholder: '123 Main St, New York',
      brandColors: 'Brand Colors',
      primary: 'Primary',
      secondary: 'Secondary',
      accent: 'Accent',
      businessLogo: 'Business Logo',
      logoPlaceholder: 'Emoji or image URL',
      productsServices: 'Products/Services',
      productName: 'Product name',
      productPrice: 'Price (e.g. 5.50)',
      productCategory: 'Category (e.g. Drinks)',
      productImage: 'Emoji or image URL',
      addProduct: '+ Add Product',
      save: 'Save Configuration',
      
      // Analytics
      totalChats: 'Total Chats',
      today: 'Today',
      avgResponse: 'Avg Response',
      satisfaction: 'Satisfaction',
      hourlyActivity: 'Hourly Activity',
      topQuestions: 'Top Questions',
      performanceMetrics: 'Performance Metrics',
      conversionRate: 'Conversion Rate',
      avgSessionTime: 'Avg Session Time',
      peakHours: 'Peak Hours',
      schedules: 'Hours',
      location: 'Location',
      prices: 'Prices',
      
      // Integrations
      websiteWidget: 'Website Widget',
      embedWebsite: 'Embed in any website',
      copyWidgetCode: 'Copy Widget Code',
      whatsappIntegration: 'WhatsApp Integration',
      connectTwilio: 'Connect via Twilio',
      copyWhatsappCode: 'Copy WhatsApp Code',
      paymentProcessing: 'Payment Processing',
      stripeMP: 'Stripe & MercadoPago',
      enableStripe: 'Enable Stripe',
      enableMP: 'Enable MercadoPago',
      multiLanguageSupport: 'Multi-Language Support',
      languagesActive: 'ES, EN, PT active',
      readyToDeploy: 'Ready to Deploy',
      exportAssistant: 'Export your complete AI assistant to your own server',
      exportCode: 'Export Code',
      exportConfig: 'Export Config',
      exportDocs: 'Export Docs',
      
      // Messages
      export: 'Export',
      hours: 'Hours',
      location: 'Location',
      prices: 'Prices',
      voiceEnabled: 'Voice enabled',
      voiceDisabled: 'Voice disabled',
      recording: 'Recording...',
      welcomeTitle: 'Welcome to AI Assistant PRO',
      welcomeSubtitle: 'Configure your business to activate your intelligent multi-language voice-enabled assistant',
      voiceRecognition: 'Voice Recognition',
      imageAnalysis: 'Image Analysis',
      multiLanguage: 'Multi-language',
      whatsappReady: 'WhatsApp Ready',
      paymentIntegration: 'Payment Integration',
      proTip: 'Pro Tip',
      proTipText: 'Configure your business, test the chat, then export to your website'
    },
    pt: {
      // Navigation
      chat: 'Chat',
      config: 'Configuração',
      analytics: 'Análises',
      integrations: 'Integrações',
      
      // General
      welcome: 'Olá! Bem-vindo a',
      canHelp: 'Sou seu assistente virtual. Como posso ajudá-lo?',
      typing: 'digitando...',
      messagePlaceholder: 'Digite sua mensagem...',
      send: 'Enviar',
      configure: 'Configurar Agora',
      loadExample: 'Carregar Exemplo de Demonstração',
      demoLoaded: 'Exemplo carregado - Experimente o chat agora!',
      backToWelcome: 'Voltar ao Início',
      
      // Configuration
      businessConfig: 'Configuração do Negócio',
      configSubtitle: 'Personalize seu assistente com as informações do seu negócio',
      businessName: 'Nome do Negócio',
      businessNamePlaceholder: 'ex. Café Delícias',
      businessType: 'Tipo de Negócio',
      businessTypePlaceholder: 'ex. Cafeteria, Clínica, Loja',
      servicesDescription: 'Descrição dos Serviços',
      servicesPlaceholder: 'Descreva o que seu negócio oferece...',
      businessHours: 'Horário de Atendimento',
      hoursPlaceholder: 'Seg-Sex 9h-18h',
      phoneNumber: 'Número de Telefone',
      phonePlaceholder: '5511987654321',
      address: 'Endereço',
      addressPlaceholder: 'Av. Paulista 1000, São Paulo',
      brandColors: 'Cores da Marca',
      primary: 'Primária',
      secondary: 'Secundária',
      accent: 'Destaque',
      businessLogo: 'Logo do Negócio',
      logoPlaceholder: 'Emoji ou URL da imagem',
      productsServices: 'Produtos/Serviços',
      productName: 'Nome do produto',
      productPrice: 'Preço (ex: 5.50)',
      productCategory: 'Categoria (ex: Bebidas)',
      productImage: 'Emoji ou URL imagem',
      addProduct: '+ Adicionar Produto',
      save: 'Salvar Configuração',
      
      // Analytics
      totalChats: 'Total de Chats',
      today: 'Hoje',
      avgResponse: 'Resposta Média',
      satisfaction: 'Satisfação',
      hourlyActivity: 'Atividade por Hora',
      topQuestions: 'Perguntas Frequentes',
      performanceMetrics: 'Métricas de Desempenho',
      conversionRate: 'Taxa de Conversão',
      avgSessionTime: 'Tempo Médio de Sessão',
      peakHours: 'Horários de Pico',
      schedules: 'Horários',
      location: 'Localização',
      prices: 'Preços',
      
      // Integrations
      websiteWidget: 'Widget para Site',
      embedWebsite: 'Incorporar em qualquer site',
      copyWidgetCode: 'Copiar Código do Widget',
      whatsappIntegration: 'Integração WhatsApp',
      connectTwilio: 'Conectar via Twilio',
      copyWhatsappCode: 'Copiar Código WhatsApp',
      paymentProcessing: 'Processamento de Pagamentos',
      stripeMP: 'Stripe & MercadoPago',
      enableStripe: 'Ativar Stripe',
      enableMP: 'Ativar MercadoPago',
      multiLanguageSupport: 'Suporte Multi-idioma',
      languagesActive: 'ES, EN, PT ativos',
      readyToDeploy: 'Pronto para Implantar',
      exportAssistant: 'Exporte seu assistente completo para seu próprio servidor',
      exportCode: 'Exportar Código',
      exportConfig: 'Exportar Configuração',
      exportDocs: 'Exportar Documentação',
      
      // Messages
      export: 'Exportar',
      hours: 'Horário',
      location: 'Localização',
      prices: 'Preços',
      voiceEnabled: 'Voz ativada',
      voiceDisabled: 'Voz desativada',
      recording: 'Gravando...',
      welcomeTitle: 'Bem-vindo ao AI Assistant PRO',
      welcomeSubtitle: 'Configure seu negócio para ativar seu assistente inteligente multilíngue com voz',
      voiceRecognition: 'Reconhecimento de Voz',
      imageAnalysis: 'Análise de Imagens',
      multiLanguage: 'Multi-idioma',
      whatsappReady: 'WhatsApp Pronto',
      paymentIntegration: 'Integração de Pagamentos',
      proTip: 'Dica Pro',
      proTipText: 'Configure seu negócio, teste o chat e depois exporte para seu site'
    }
  };

  const t = translations[selectedLanguage];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await window.storage.get('ai-assistant-complete-data');
        if (data) {
          const parsed = JSON.parse(data.value);
          setBusinessInfo(parsed.businessInfo || businessInfo);
          // NO cargar mensajes automáticamente
          setProducts(parsed.products || []);
          const loadedStats = parsed.stats || stats;
          if (!loadedStats.topQuestions || typeof loadedStats.topQuestions === 'string') {
            loadedStats.topQuestions = {
              es: ['Horarios', 'Ubicación', 'Precios'],
              en: ['Hours', 'Location', 'Prices'],
              pt: ['Horários', 'Localização', 'Preços']
            };
          }
          setStats(loadedStats);
          setAnalyticsData(parsed.analytics || analyticsData);
          setPaymentInfo(parsed.payment || paymentInfo);
          // NO cargar isConfigured - siempre empezar en bienvenida
        }
      } catch (error) {
        console.log('Initializing fresh installation');
      }
    };
    loadData();
  }, []);

  const saveAllData = async () => {
    try {
      const allData = {
        businessInfo,
        messages,
        products,
        stats,
        analytics: analyticsData,
        payment: paymentInfo,
        isConfigured
      };
      await window.storage.set('ai-assistant-complete-data', JSON.stringify(allData));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const saveBusinessInfo = async () => {
    setIsConfigured(true);
    setActiveTab('chat');
    
    // TEXTOS MULTI-IDIOMA PARA TU NEGOCIO (ALIA)
    const welcomeTexts = {
      es: `👋 ¡Hola! Bienvenido a ${businessInfo.name}.
Soy ALIA, tu nueva "Empleada Digital" 🤖.

Mi trabajo es atender a tus clientes 24/7 para que tú descanses.
Aquí tienes lo más buscado:

💰 **Ver Precio del Plan Básico**
🚀 **Entender cómo funciono**
💳 **Pasos para contratarme**

¿Te gustaría ver los precios o prefieres una demo?`,

      en: `👋 Hello! Welcome to ${businessInfo.name}.
I'm ALIA, your new "Digital Employee" 🤖.

My job is to serve your clients 24/7 so you can rest.
Here is what's most popular:

💰 **See Basic Plan Price**
🚀 **Understand how I work**
💳 **Steps to hire me**

Would you like to see pricing or do you prefer a demo?`,

      pt: `👋 Olá! Bem-vindo à ${businessInfo.name}.
Sou a ALIA, sua nova "Funcionária Digital" 🤖.

Meu trabalho é atender seus clientes 24/7 para que você descanse.
Aqui está o mais procurado:

💰 **Ver Preço do Plano Básico**
🚀 **Entender como funciono**
💳 **Passos para me contratar**

Gostaria de ver os preços ou prefere uma demo?`
    };
    
    const welcomeMsg = {
      role: 'assistant',
      content: welcomeTexts[selectedLanguage] || welcomeTexts.es,
      timestamp: new Date().toISOString()
    };
    
    setMessages([welcomeMsg]);
    await saveAllData();
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, {...newProduct}]);
      setNewProduct({ name: '', price: '', category: '', image: '' });
    }
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const analyzeImage = (imageData) => {
    const responses = {
      es: [
        '📸 He analizado la imagen. Veo que muestras nuestro menú. ¿Sobre qué producto te gustaría más información?',
        '✨ Perfecto, he revisado la imagen. ¿Necesitas información sobre precios, ingredientes o disponibilidad?',
        '🔍 Imagen recibida. Puedo ver varios productos. ¿Cuál te interesa específicamente?'
      ],
      en: [
        '📸 I\'ve analyzed the image. I see you\'re showing our menu. What product would you like more information about?',
        '✨ Perfect, I\'ve reviewed the image. Do you need information about prices, ingredients, or availability?',
        '🔍 Image received. I can see several products. Which one specifically interests you?'
      ],
      pt: [
        '📸 Analisei a imagem. Vejo que você está mostrando nosso menu. Sobre qual produto gostaria de mais informações?',
        '✨ Perfeito, revisei a imagem. Precisa de informações sobre preços, ingredientes ou disponibilidade?',
        '🔍 Imagem recebida. Posso ver vários produtos. Qual especificamente te interessa?'
      ]
    };
    
    const langResponses = responses[selectedLanguage];
    return langResponses[Math.floor(Math.random() * langResponses.length)];
  };

  const generateAIResponse = async (userMessage, hasImage = false) => {
    if (hasImage) {
      return analyzeImage(uploadedImage);
    }

    const msg = userMessage.toLowerCase().trim();
    const pick = (options) => options[Math.floor(Math.random() * options.length)];

    // 1. GENERADOR DE MENÚ
    const menuList = products.length > 0 
      ? products.map(p => `• ${p.image || '🔹'} **${p.name}** ...... $${p.price}`).join('\n')
      : null;

    // 2. DETECTOR DE PRODUCTOS (Esto es clave)
    const productMatch = products.find(p => msg.includes(p.name.toLowerCase()));

    // 3. MÉTODOS DE PAGO
    const getPaymentMethods = (lang) => {
        const methods = [];
        if (paymentInfo.pixEnabled) methods.push('Pix');
        if (paymentInfo.creditCardEnabled) methods.push(lang === 'pt' ? 'Cartão de Crédito' : (lang === 'en' ? 'Credit Card' : 'Tarjeta de Crédito'));
        if (paymentInfo.debitCardEnabled) methods.push(lang === 'pt' ? 'Cartão de Débito' : (lang === 'en' ? 'Debit Card' : 'Tarjeta de Débito'));
        if (paymentInfo.cashEnabled) methods.push(lang === 'pt' ? 'Dinheiro' : (lang === 'en' ? 'Cash' : 'Efectivo'));
        if (paymentInfo.paypalEnabled) methods.push('PayPal');
        if (paymentInfo.mercadoPagoEnabled) methods.push('MercadoPago');
        
        if (methods.length === 0) return lang === 'pt' ? 'Dinheiro' : (lang === 'en' ? 'Cash' : 'Efectivo');
        return methods.join(', ');
    };

    const activeMethods = getPaymentMethods(selectedLanguage);

    const responses = {
      es: {
        greeting: [
          `👋 ¡Hola! Bienvenido a **${businessInfo.name}**. Soy tu asistente virtual. 🤖\n\n¿Te gustaría ver nuestro **Menú** de ${businessInfo.type} o hacer una reserva?`,
          `¡Hola! 👋 Estás en el chat de **${businessInfo.name}**. Estoy aquí para tomar tu pedido o responder dudas.\n\n¿En qué te ayudo?`
        ],
        reservation: [
          `📅 ¡Claro que sí! Me encantaría agendar tu reserva en **${businessInfo.name}**.\n\nPor favor dime:\n1. 👥 ¿Para cuántas personas?\n2. ⏰ ¿Qué día y hora prefieres?`,
        ],
        menu: [
          menuList 
            ? `🍽️ **Este es nuestro Menú:**\n\n${menuList}\n\n📝 **¿Qué te gustaría ordenar hoy?**`
            : `💰 En **${businessInfo.name}** ofrecemos: ${businessInfo.description}.\n\n¿Buscas el precio de algo específico?`
        ],
        payment_handoff: [
          `✅ ¡Perfecto! Para empezar a preparar tu pedido y que **no tengas que esperar**, necesito confirmar el pago.\n\n💳 **Aceptamos:** ${activeMethods}.\n\n¿Cuál usas?`,
          `¡Entendido! 📝 Lo dejaremos listo para ti.\n\nPara confirmar la orden, por favor indica tu medio de pago: **${activeMethods}**.`
        ],
        final: [
          `🎉 **¡Confirmado!** 🚀\n\nYa he avisado a nuestro equipo. Gracias por elegirnos.\n\n¡Te esperamos en **${businessInfo.name}**!`,
          `✅ **¡Listo!** Todo está registrado correctamente.\n\n¡Gracias por tu preferencia! 😊`
        ],
        service: [`✨ En **${businessInfo.name}** somos especialistas en **${businessInfo.type}**. Ofrecemos: ${businessInfo.description}`],
        info: [`📍 Estamos ubicados en: **${businessInfo.address}**.\n⏰ Horario: **${businessInfo.hours}**.`],
        delivery_question: [`📝 ¡Excelente elección! 😋\n\nPara preparar tu pedido... ¿Lo prefieres **para llevar** 🥡 o para **consumir aquí** 🍽️?`],
        default: [`Entiendo "${userMessage}".\n\nPero para ayudarte mejor, ¿quieres ver el **Menú**, la **Ubicación** o hacer un **Pedido**?`]
      },
      en: {
        greeting: [`👋 Hi! Welcome to **${businessInfo.name}**. Would you like to see our **Menu**?`],
        reservation: [`📅 Sure! To book a table, I need to know:\n\n1. 👥 How many people?\n2. ⏰ Date and time?`],
        menu: [
          menuList 
            ? `🍽️ **Here is our Menu:**\n\n${menuList}\n\n📝 **What would you like to order?**`
            : `💰 At **${businessInfo.name}**, we offer: ${businessInfo.description}.`
        ],
        payment_handoff: [`✅ Perfect! To have it ready for you (**no waiting!**), please confirm payment.\n\n💳 **We accept:** ${activeMethods}.`],
        final: [`🎉 **Confirmed!** 🚀\n\nI've notified the team. Thanks for choosing **${businessInfo.name}**!`],
        service: [`✨ We specialize in **${businessInfo.type}**. We offer: ${businessInfo.description}`],
        info: [`📍 Location: **${businessInfo.address}**.\n⏰ Hours: **${businessInfo.hours}**.`],
        delivery_question: [`📝 Great choice! 😋\n\nIs this **to go** 🥡 or to **eat in** 🍽️?`],
        default: [`I understand. Would you like to see the **Menu** or our **Location**?`]
      },
      pt: {
        greeting: [`👋 Olá! Bem-vindo à **${businessInfo.name}**. Gostaria de ver nosso **Menu**?`],
        reservation: [`📅 Claro! Para agendar, preciso saber:\n\n1. 👥 Quantas pessoas?\n2. ⏰ Qual dia e horário?`],
        menu: [
          menuList 
            ? `🍽️ **Aqui está nosso Menu:**\n\n${menuList}\n\n📝 **O que gostaria de pedir?**`
            : `💰 Na **${businessInfo.name}**, oferecemos: ${businessInfo.description}.`
        ],
        payment_handoff: [`✅ Perfeito! Para deixar tudo pronto e você **não esperar**, confirme o pagamento.\n\n💳 **Aceitamos:** ${activeMethods}.`],
        final: [`🎉 **Confirmado!** 🚀\n\nJá avisei nossa equipe. Obrigado por escolher a **${businessInfo.name}**!`],
        service: [`✨ Somos especialistas em **${businessInfo.type}**. Oferecemos: ${businessInfo.description}`],
        info: [`📍 Estamos em: **${businessInfo.address}**.\n⏰ Horário: **${businessInfo.hours}**.`],
        delivery_question: [`📝 Ótima escolha! 😋\n\nÉ **para viagem** 🥡 ou para **consumir aqui** 🍽️?`],
        default: [`Entendi. Gostaria de ver o **Menu** ou nossa **Localização**?`]
      }
    };

    const langParams = responses[selectedLanguage] || responses.es;

    // --- CEREBRO DE LA CONVERSACIÓN (LOGICA CORREGIDA) ---

    // A. CIERRE FINAL (Pagos o Confirmación de Reserva)
    if (msg.includes('tarjeta') || msg.includes('card') || msg.includes('pix') || msg.includes('efectivo') || 
        msg.includes('cash') || msg.includes('dinheiro') || msg.includes('paypal') || 
        msg.includes('personas') || msg.includes('people') || msg.includes('pessoas') || msg.includes('pm') || msg.includes('am') || msg.includes(':')) {
        return pick(langParams.final); 
    }

    // B. RESERVAS (¡PRIORIDAD ALTA!)
    if (msg.includes('reserv') || msg.includes('book') || msg.includes('mesa') || msg.includes('table') || msg.includes('cita') || msg.includes('agendar')) {
       return pick(langParams.reservation);
    }

    // C. LOGÍSTICA DE PEDIDOS (Para llevar / Comer aquí)
    // Solo entramos aquí si el usuario responde a la pregunta logística
    if (msg.includes('llevar') || msg.includes('aqui') || msg.includes('aquí') || 
        msg.includes('to go') || msg.includes('eat in') || msg.includes('pickup') || 
        msg.includes('viagem') || msg.includes('consumir')) {
        return pick(langParams.payment_handoff);
    }

    // D. PEDIDOS DE COMIDA ESPECÍFICOS (El usuario menciona un producto)
    // Ejemplo: "Quiero un café" -> Bot: "¿Para llevar?"
    if (productMatch) { 
        return pick(langParams.delivery_question);
    }

    // E. INTENCIÓN GENERAL (El usuario dice "Quiero pedir" pero NO dice qué)
    // Ejemplo: "Quiero hacer un pedido" -> Bot: "Aquí está el menú"
    if (msg.includes('quiero') || msg.includes('dame') || msg.includes('ordenar') || msg.includes('pedir') || 
        msg.includes('want') || msg.includes('order')) { 
        return pick(langParams.menu);
    }

    // F. RESTO DE OPCIONES
    if (msg.includes('menu') || msg.includes('menú') || msg.includes('carta') || msg.includes('precio') || msg.includes('cost')) return pick(langParams.menu);
    if (msg === 'si' || msg === 'sí' || msg.includes('claro') || msg.includes('yes')) return pick(langParams.menu);
    if (msg.includes('servicio') || msg.includes('haces')) return pick(langParams.service);
    if (msg.includes('hora') || msg.includes('ubic') || msg.includes('dond')) return pick(langParams.info);
    if (msg.includes('hola') || msg.includes('buen') || msg.includes('hi')) return pick(langParams.greeting);

    if (msg.includes('gracias') || msg.includes('thank') || msg.includes('obrigad')) {
        return selectedLanguage === 'es' ? "¡De nada! 🤖" : "You're welcome! 🤖";
    }

    return pick(langParams.default);
  };

  const handleSend = async (imageAttached = false) => {
    if (!input.trim() && !imageAttached) return;
    
    const userMessage = { 
      role: 'user', 
      content: input,
      timestamp: new Date().toISOString(),
      hasImage: imageAttached,
      image: imageAttached ? uploadedImage : null
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setUploadedImage(null);
    setIsTyping(true);

    const newStats = {
      ...stats,
      totalChats: stats.totalChats + 1,
      todayChats: stats.todayChats + 1
    };
    setStats(newStats);

    setTimeout(async () => {
      const aiResponse = {
        role: 'assistant',
        content: await generateAIResponse(input, imageAttached),
        timestamp: new Date().toISOString()
      };
      
      const finalMessages = [...updatedMessages, aiResponse];
      setMessages(finalMessages);
      setIsTyping(false);

      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.content);
        utterance.lang = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
        window.speechSynthesis.speak(utterance);
      }

      await saveAllData();
    }, 1500);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = selectedLanguage === 'es' ? 'es-ES' : selectedLanguage === 'pt' ? 'pt-BR' : 'en-US';
        recognition.continuous = false;
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsRecording(false);
        };
        
        recognition.onerror = () => {
          setIsRecording(false);
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };
        
        recognition.start();
      } else {
        setTimeout(() => {
          const demoMessages = {
            es: '¿Cuál es el horario de atención?',
            en: 'What are your business hours?',
            pt: 'Qual é o horário de atendimento?'
          };
          setInput(demoMessages[selectedLanguage]);
          setIsRecording(false);
        }, 2000);
      }
    } else {
      setIsRecording(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setInput('He adjuntado una imagen');
        handleSend(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setNotifMessage('✅ Copied to clipboard!');
    setShowCopyNotif(true);
    setTimeout(() => setShowCopyNotif(false), 3000);
  };

  const generateWidgetCode = () => {
    const code = `<!-- AI Assistant Widget - Paste in your website -->
<div id="ai-assistant-widget"></div>
<script>
  (function() {
    const config = {
      businessName: "${businessInfo.name}",
      primaryColor: "${businessInfo.primaryColor}",
      language: "${selectedLanguage}",
      position: "bottom-right"
    };
    
    const widget = document.createElement('div');
    widget.innerHTML = \`
      <style>
        #ai-chat-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, \${config.primaryColor}, #3B82F6);
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.5);
          cursor: pointer;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }
        #ai-chat-btn:hover { transform: scale(1.1); }
      </style>
      <button id="ai-chat-btn">💬</button>
    \`;
    document.body.appendChild(widget);
    
    document.getElementById('ai-chat-btn').onclick = () => {
      window.open('https://your-domain.com/chat', 'AI Assistant', 'width=400,height=600');
    };
  })();
</script>`;
    
    copyToClipboard(code);
  };

  const generateWhatsAppCode = () => {
    const code = `// WhatsApp Integration - Node.js + Twilio
const twilio = require('twilio');
const client = twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

app.post('/whatsapp-webhook', async (req, res) => {
  const incomingMsg = req.body.Body;
  const from = req.body.From;
  
  // Process with AI (connect to your assistant API)
  const aiResponse = await fetch('YOUR_API_URL/chat', {
    method: 'POST',
    body: JSON.stringify({ message: incomingMsg }),
    headers: { 'Content-Type': 'application/json' }
  }).then(r => r.json());
  
  // Send response back via WhatsApp
  await client.messages.create({
    body: aiResponse.content,
    from: 'whatsapp:+14155238886', // Twilio sandbox number
    to: from
  });
  
  res.sendStatus(200);
});

// Setup webhook in Twilio Console:
// https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox`;
    
    copyToClipboard(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{top: '10%', left: '10%', animationDuration: '4s'}}></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{top: '60%', right: '10%', animationDuration: '6s'}}></div>
        <div className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{bottom: '10%', left: '50%', animationDuration: '5s'}}></div>
      </div>

      {/* Header */}
      <header className="relative bg-black/40 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-75 rounded-xl"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-cyan-500/50">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  AI Business Assistant PRO
                </h1>
                <p className="text-xs text-cyan-400/70">Next-Generation Intelligence Platform</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-2 bg-black/30 p-1 rounded-lg border border-cyan-500/20">
              {['es', 'en', 'pt'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition ${
                    selectedLanguage === lang
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-cyan-300/70 hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-cyan-400 hover:bg-white/10 p-2 rounded-lg transition border border-cyan-500/20"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

            <nav className="hidden lg:flex gap-2">
              {[
                { id: 'chat', icon: MessageCircle, label: t.chat },
                { id: 'config', icon: Settings, label: t.config },
                { id: 'analytics', icon: BarChart3, label: t.analytics },
                { id: 'integrations', icon: Zap, label: t.integrations }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-cyan-300/80 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-cyan-500/20'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {menuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-cyan-500/20">
              {[
                { id: 'chat', icon: MessageCircle, label: t.chat },
                { id: 'config', icon: Settings, label: t.config },
                { id: 'analytics', icon: BarChart3, label: t.analytics },
                { id: 'integrations', icon: Zap, label: t.integrations }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chat View */}
        {activeTab === 'chat' && (
          <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
            {!isConfigured ? (
              <div className="p-12 text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-60 animate-pulse rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 rotate-6">
                    <Bot className="w-12 h-12 text-white -rotate-6" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  {t.welcomeTitle}
                </h2>
                <p className="text-cyan-300/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  {t.welcomeSubtitle}
                </p>
                <button
                  onClick={() => setActiveTab('config')}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 border border-cyan-400/30"
                >
                  {t.configure} →
                </button>
              </div>
            ) : (
              <>
                <div className="h-[550px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
                  {messages.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl animate-pulse rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-cyan-500/30 shadow-xl">
                          <MessageCircle className="w-10 h-10 text-cyan-300" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        🤖 AI Ready
                      </h3>
                      <p className="text-cyan-300/70 text-lg">
                        Start chatting to test your assistant
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300">Voice Enabled</span>
                        <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300">Image Analysis</span>
                        <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300">Multi-language</span>
                      </div>
                    </div>
                  ) : (
                    messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role === 'assistant' && (
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-75 rounded-full"></div>
                            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 border border-cyan-400/30">
                              <Bot className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="max-w-[75%]">
                          <div
                            className={`px-5 py-3 rounded-2xl ${
                              msg.role === 'user'
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30'
                                : 'bg-white/5 text-white border border-cyan-500/20 backdrop-blur-sm'
                            }`}
                          >
                            {msg.hasImage && msg.image && (
                              <img src={msg.image} alt="uploaded" className="max-w-full h-40 object-cover rounded-xl mb-3 border-2 border-white/20" />
                            )}
                            <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          </div>
                          <span className="text-xs text-cyan-400/50 mt-1.5 block px-2">
                            {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                          </span>
                        </div>
                        {msg.role === 'user' && (
                          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 border border-blue-400/30">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  
                  {isTyping && (
                    <div className="flex gap-3 animate-fade-in">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-75 rounded-full"></div>
                        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="bg-white/5 px-5 py-3 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                        <div className="flex gap-1.5 mb-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                        </div>
                        <span className="text-xs text-cyan-300/70">{t.typing}</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input Area */}
                <div className="border-t border-cyan-500/20 p-4 bg-black/40 backdrop-blur-xl">
                  <div className="flex gap-2 mb-3">
                    {/* Voice Record Button */}
                    <button
                      onClick={toggleRecording}
                      className={`p-3 rounded-xl transition shadow-lg ${
                        isRecording 
                          ? 'bg-red-500 text-white animate-pulse shadow-red-500/50 scale-110' 
                          : 'bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 shadow-cyan-500/20'
                      }`}
                      title={isRecording ? t.recording : 'Voice input'}
                    >
                      <Mic className="w-5 h-5" />
                    </button>

                    {/* Text-to-Speech Toggle */}
                    <button
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                      className={`p-3 rounded-xl transition shadow-lg ${
                        voiceEnabled
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/50'
                          : 'bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50'
                      }`}
                      title={voiceEnabled ? t.voiceEnabled : t.voiceDisabled}
                    >
                      {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </button>

                    {/* Image Upload Button */}
                    <label className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50 transition cursor-pointer shadow-lg shadow-cyan-500/20">
                      <ImagePlus className="w-5 h-5" />
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="flex-1"></div>

                    {isRecording && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        <span className="text-sm text-red-300 font-medium">{t.recording}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={t.messagePlaceholder}
                      className="flex-1 bg-white/5 border border-cyan-500/30 rounded-xl px-5 py-3.5 text-white placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition"
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                      className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 disabled:hover:scale-100 border border-cyan-400/30"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Configuration View */}
        {activeTab === 'config' && (
          <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 p-8">
            {isConfigured && (
              <div className="mb-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {t.businessConfig}
                  </h2>
                  <p className="text-cyan-300/70">Personalize your AI assistant</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessName} *
                    </label>
                    <input
                      type="text"
                      value={businessInfo.name}
                      onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                      placeholder={t.businessNamePlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                 {/* SELECTOR DE TIPO DE NEGOCIO MEJORADO */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessType} *
                    </label>
                    <div className="relative">
                      <select
                        value={businessTypes.some(t => t.value === businessInfo.type) ? businessInfo.type : 'custom'}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === 'custom') {
                            setBusinessInfo({...businessInfo, type: ''}); // Limpia para que escriba
                          } else {
                            setBusinessInfo({...businessInfo, type: val});
                          }
                        }}
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-slate-900">Selecciona una industria...</option>
                        {businessTypes.map(type => (
                          <option key={type.id} value={type.value} className="bg-slate-900">
                            {type.label}
                          </option>
                        ))}
                        <option value="custom" className="bg-slate-900">✨ Otro (Escribir manual)</option>
                      </select>
                      {/* Flechita del select */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    
                    {/* Si elige "Otro" o no está en la lista, muestra el input manual */}
                    {(!businessTypes.some(t => t.value === businessInfo.type) && businessInfo.type !== '') || businessInfo.type === '' ? (
                      <input
                        type="text"
                        value={businessInfo.type}
                        onChange={(e) => setBusinessInfo({...businessInfo, type: e.target.value})}
                        placeholder="Escribe tu tipo de negocio (ej. Tienda de Zapatos)"
                        className="mt-3 w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition animate-fade-in"
                      />
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-2">
                    {t.businessLogo}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        value={businessInfo.logo}
                        onChange={(e) => setBusinessInfo({...businessInfo, logo: e.target.value})}
                        placeholder="Emoji: ☕"
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={businessInfo.logo}
                        onChange={(e) => setBusinessInfo({...businessInfo, logo: e.target.value})}
                        placeholder="URL: https://..."
                        className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                      />
                    </div>
                  </div>
                  {businessInfo.logo && (
                    <div className="mt-3 flex items-center gap-3 p-3 bg-white/5 border border-cyan-500/20 rounded-xl">
                      {businessInfo.logo.startsWith('http') ? (
                        <img src={businessInfo.logo} alt="logo" className="w-12 h-12 object-cover rounded-lg" />
                      ) : (
                        <span className="text-4xl">{businessInfo.logo}</span>
                      )}
                      <span className="text-cyan-300 text-sm">Vista previa</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-2">
                    {t.servicesDescription} *
                  </label>
                  <textarea
                    value={businessInfo.description}
                    onChange={(e) => setBusinessInfo({...businessInfo, description: e.target.value})}
                    placeholder={t.servicesPlaceholder}
                    rows="4"
                    className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.businessHours}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.hours}
                      onChange={(e) => setBusinessInfo({...businessInfo, hours: e.target.value})}
                      placeholder={t.hoursPlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.phoneNumber}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.phone}
                      onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})}
                      placeholder={t.phonePlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cyan-300 mb-2">
                      {t.address}
                    </label>
                    <input
                      type="text"
                      value={businessInfo.address}
                      onChange={(e) => setBusinessInfo({...businessInfo, address: e.target.value})}
                      placeholder={t.addressPlaceholder}
                      className="w-full bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm transition"
                    />
                  </div>
                </div>

                {/* Brand Colors */}
                <div>
                  <label className="block text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    {t.brandColors}
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.primary}</label>
                      <input
                        type="color"
                        value={businessInfo.primaryColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, primaryColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.secondary}</label>
                      <input
                        type="color"
                        value={businessInfo.secondaryColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, secondaryColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cyan-400/70 mb-2">{t.accent}</label>
                      <input
                        type="color"
                        value={businessInfo.accentColor}
                        onChange={(e) => setBusinessInfo({...businessInfo, accentColor: e.target.value})}
                        className="w-full h-12 rounded-xl border-2 border-cyan-500/30 cursor-pointer bg-white/5"
                      />
                    </div>
                  </div>
                </div>

                {/* Products/Services Section */}
                <div className="border-t border-cyan-500/20 pt-6 mt-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.productsServices}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      placeholder={t.productName}
                      className="bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-2.5 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="text"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      placeholder={t.productPrice}
                      className="bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-2.5 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="text"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      placeholder={t.productCategory}
                      className="bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-2.5 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="text"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                      placeholder={t.productImage}
                      className="bg-white/5 border border-cyan-500/30 rounded-xl px-4 py-2.5 text-white placeholder-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <button
                    onClick={addProduct}
                    className="mb-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 px-4 py-2 rounded-lg transition text-sm font-medium"
                  >
                    {t.addProduct}
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {products.map((product, idx) => (
                      <div key={idx} className="bg-white/5 border border-cyan-500/20 rounded-xl p-3 flex items-center gap-3">
                        <span className="text-2xl">{product.image}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium">{product.name}</p>
                          <p className="text-cyan-400 text-sm">${product.price} - {product.category}</p>
                        </div>
                        <button
                          onClick={() => removeProduct(idx)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={saveBusinessInfo}
                    disabled={!businessInfo.name || !businessInfo.type || !businessInfo.description}
                    className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-bold text-lg transition shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 disabled:hover:scale-100 border border-cyan-400/30"
                  >
                    <Check className="w-5 h-5 inline mr-2" />
                    {t.save}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {isConfigured && (
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, label: t.totalChats, value: stats.totalChats, color: 'cyan', trend: '+12%' },
                { icon: Zap, label: t.today, value: stats.todayChats, color: 'blue', trend: '+8%' },
                { icon: Clock, label: t.avgResponse, value: stats.avgResponseTime, color: 'purple', trend: '-5%' },
                { icon: Users, label: t.satisfaction, value: `${stats.satisfaction}%`, color: 'green', trend: '+3%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 hover:scale-105 transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-${stat.color}-500/20 p-3 rounded-xl border border-${stat.color}-500/30`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                    <span className="text-sm text-green-400 font-semibold">{stat.trend}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-cyan-300/70 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  {t.hourlyActivity}
                </h3>
                <div className="flex items-end justify-between h-48 gap-2">
                  {analyticsData.hourlyData.map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all hover:from-cyan-400 hover:to-blue-400 cursor-pointer shadow-lg shadow-cyan-500/30"
                        style={{ height: `${(value / 40) * 100}%` }}
                      ></div>
                      <span className="text-xs text-cyan-400/50">{idx}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  {t.topQuestions}
                </h3>
                <div className="space-y-4">
                  {((stats.topQuestions && stats.topQuestions[selectedLanguage]) || 
                    (selectedLanguage === 'en' ? ['Hours', 'Location', 'Prices'] : 
                     selectedLanguage === 'pt' ? ['Horários', 'Localização', 'Preços'] : 
                     ['Horarios', 'Ubicación', 'Precios'])).map((q, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/30">
                        {idx + 1}
                      </div>
                      <div className="flex-1 bg-white/5 border border-cyan-500/20 rounded-xl px-4 py-3">
                        <p className="text-white font-medium">{q}</p>
                      </div>
                      <div className="text-cyan-400 font-semibold">{35 - (idx * 8)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                {t.performanceMetrics}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {analyticsData.conversionRate}%
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.conversionRate}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {analyticsData.avgSessionTime}
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.avgSessionTime}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stats.peakHours}
                  </div>
                  <p className="text-cyan-300/70 font-medium">{t.peakHours}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations View */}
        {activeTab === 'integrations' && (
          <div className="space-y-6">
            {isConfigured && (
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-4">
                <button
                  onClick={resetToWelcome}
                  className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition"
                >
                  <Home className="w-4 h-4" />
                  {t.backToWelcome}
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Widget Code */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/30">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.websiteWidget}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.embedWebsite}</p>
                  </div>
                </div>
                <button
                  onClick={generateWidgetCode}
                  className="w-full bg-white/5 hover:bg-white/10 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  {t.copyWidgetCode}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.whatsappIntegration}</h3>
                    <p className="text-cyan-300/70 text-sm">{t.connectTwilio}</p>
                  </div>
                </div>
                <button
                  onClick={generateWhatsAppCode}
                  className="w-full bg-white/5 hover:bg-white/10 border border-green-500/30 hover:border-green-500/50 text-green-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  {t.copyWhatsappCode}
                </button>
              </div>

              {/* Payment Integration */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.paymentProcessing}</h3>
                    <p className="text-cyan-300/70 text-sm">Múltiples métodos de pago disponibles</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { key: 'pixEnabled', label: 'Pix (Brasil)', icon: '💠' },
                    { key: 'creditCardEnabled', label: 'Crédito', icon: '💳' },
                    { key: 'debitCardEnabled', label: 'Débito', icon: '💳' },
                    { key: 'cashEnabled', label: 'Efectivo', icon: '💵' },
                    { key: 'stripeEnabled', label: 'Stripe', icon: 'S' },
                    { key: 'mercadoPagoEnabled', label: 'MercadoPago', icon: 'M' },
                    { key: 'paypalEnabled', label: 'PayPal', icon: 'P' }
                  ].map((payment) => (
                    <button
                      key={payment.key}
                      onClick={() => setPaymentInfo({...paymentInfo, [payment.key]: !paymentInfo[payment.key]})}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm font-medium border ${
                        paymentInfo[payment.key]
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/50 text-green-300'
                          : 'bg-white/5 border-cyan-500/20 text-cyan-400/60 hover:bg-white/10 hover:border-cyan-500/30'
                      }`}
                    >
                      <span className="text-lg">{payment.icon}</span>
                      <span>{payment.label}</span>
                      {paymentInfo[payment.key] && <Check className="w-4 h-4 ml-auto text-green-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-language */}
              <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.multiLanguageSupport}</h3>
                    <p className="text-cyan-300/70 text-sm">Selecciona los idiomas que deseas activar</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[
                    { code: 'es', flag: '🇪🇸', name: 'Español' },
                    { code: 'en', flag: '🇬🇧', name: 'English' },
                    { code: 'pt', flag: '🇧🇷', name: 'Português' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-semibold border ${
                        selectedLanguage === lang.code
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                          : 'bg-white/5 border-cyan-500/20 text-cyan-400/60 hover:bg-white/10 hover:border-cyan-500/30'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {selectedLanguage === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-black/30 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">🚀 {t.readyToDeploy}</h3>
                <p className="text-cyan-300/70">{t.exportAssistant}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => copyToClipboard('Full source code exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  {t.exportCode}
                </button>
                <button 
                  onClick={() => copyToClipboard('Configuration JSON exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  {t.exportConfig}
                </button>
                <button 
                  onClick={() => copyToClipboard('Complete documentation exported!')}
                  className="bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 px-4 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm"
                >
                  <Code className="w-4 h-4" />
                  {t.exportDocs}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Copy Notification */}
      {showCopyNotif && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl shadow-green-500/50 flex items-center gap-3 animate-bounce border border-green-400/30 z-50">
          <Check className="w-6 h-6" />
          <span className="font-semibold">{notifMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="bg-black/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium">
              ✅ {t.voiceRecognition}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
              ✅ {t.imageAnalysis}
            </span>
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
              ✅ {t.multiLanguage}
            </span>
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300 font-medium">
              ✅ {t.whatsappReady}
            </span>
            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-300 font-medium">
              ✅ {t.paymentIntegration}
            </span>
          </div>
          <p className="text-cyan-300/70 text-sm mb-2">
            💡 <strong className="text-cyan-300">{t.proTip}:</strong> {t.proTipText}
          </p>
          <div className="border-t border-cyan-500/20 pt-2 mt-2">
            <button
              onClick={loadExampleConfig}
              className="text-cyan-400/60 hover:text-cyan-400 text-xs underline transition"
            >
              {t.loadExample}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}