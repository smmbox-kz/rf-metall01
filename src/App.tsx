import React, { useState, useEffect } from 'react';
import { Truck, Shield, Clock, Phone, Mail, MapPin, CheckCircle, Star, Package, Wrench, Factory, Award, Target, Users, TrendingUp, Zap, Globe, ArrowRight, Play, Download, FileText, Calculator, MessageCircle, Hammer, Settings, Building, Gauge, ChevronDown, ChevronRight, AlertTriangle, Flame, Sparkles, Crown, Gem, Rocket, CloudLightning as Lightning, DollarSign, Timer, ShieldCheck, Truck as TruckIcon, Medal, Eye, Heart, ThumbsUp, Briefcase, PieChart, BarChart3, Layers, Cog, Wrench as WrenchIcon, Cpu, Database, Network, Lock, Key, Fingerprint, UserCheck, BadgeCheck, Verified, Mountain, Waves, Sun, Moon, Wind, Snowflake, Thermometer } from 'lucide-react';
import MetalCalculator from './components/Calculator';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('circles');
  const [showVideo, setShowVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroStats = [
    { number: "15+", label: "Заводов-партнеров России", icon: Factory, color: "from-blue-500 to-blue-700" },
    { number: "5", label: "Лет безупречной работы", icon: Award, color: "from-orange-500 to-red-600" },
    { number: "500+", label: "Довольных клиентов", icon: Users, color: "from-green-500 to-emerald-600" },
    { number: "До обьекта", label: "Доставка в срок до обьекта", icon: Truck, color: "from-purple-500 to-purple-700" }
  ];

  const products = [
    {
      id: 'circles',
      title: "Стальные круги",
      subtitle: "Диаметры от 6 до 350 мм • 32 марки стали",
      description: "Самый широкий ассортимент стальных кругов в Казахстане. Привозим редкие марки стали, которых нет на местном рынке. Каждая партия проходит строжайший контроль качества на российских заводах.",
      steelTypes: "32 марки стали",
      icon: Package,
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      bgPattern: "circles",
      features: [
        "Диаметры от 6 до 350 мм в наличии",
        "32 марки стали включая редкие сплавы",
        "Горячекатаные и калиброванные варианты",
        "Сертификаты качества на каждую партию",
        "Точность размеров ±0,1 мм",
        "Поставки от 100 кг до 500 тонн"
      ],
      examples: [
        { text: "Круг 350 мм ст.09Г2С — 180 метров", location: "Алматы", price: "2.1 млн ₸", status: "Доставлено" },
        { text: "Круг ст. 38ХС ø280 — 19,5 тонн", location: "Шымкент", price: "8.7 млн ₸", status: "В производстве" },
        { text: "Круг сталь 20, ø270 мм — 300 метров", location: "Атырау", price: "4.2 млн ₸", status: "Доставлено" }
      ],
      advantages: [
        "Эксклюзивные марки стали",
        "Прямые поставки с заводов",
        "Гарантия качества 100%"
      ]
    },
    {
      id: 'pipes',
      title: "Стальные трубы",
      subtitle: "Диаметры от 10 до 4520 мм • Любые толщины стенок",
      description: "Полный спектр стальных труб для промышленности и строительства. Бесшовные, электросварные, оцинкованные, с покрытием ППУ. Решаем задачи любой сложности в кратчайшие сроки.",
      steelTypes: "15 видов стали",
      icon: Factory,
      gradient: "from-orange-600 via-red-600 to-red-700",
      bgPattern: "pipes",
      features: [
        "Диаметры от 10 до 4520 мм",
        "Бесшовные и электросварные технологии",
        "Оцинкованные и с полимерным покрытием",
        "Трубы ППУ для теплосетей и нефтепроводов",
        "Толщина стенки от 1 до 60 мм",
        "Длина до 12 метров"
      ],
      examples: [
        { text: "Труба э/св ø426×12 сталь 20 — 144 метра", location: "Алматы", price: "1.8 млн ₸", status: "Доставлено" },
        { text: "Труба э/св 820×12 сталь 17Г1С — 30 тонн", location: "Атырау", price: "12.5 млн ₸", status: "В пути" },
        { text: "Труба бесшовная 219×14 — 360 метров", location: "Уральск", price: "2.9 млн ₸", status: "Доставлено" }
      ],
      advantages: [
        "Любые диаметры и толщины",
        "Специальные покрытия",
        "Сертификация Ростехнадзора"
      ]
    },
    {
      id: 'profile',
      title: "Профильные трубы",
      subtitle: "Квадратные и прямоугольные • Оцинкованные и черные",
      description: "Профильные трубы для металлоконструкций, строительства и машиностроения. От мелких размеров для декоративных элементов до крупногабаритных для промышленных объектов.",
      steelTypes: "10 видов стали",
      icon: Wrench,
      gradient: "from-green-600 via-emerald-600 to-green-700",
      bgPattern: "squares",
      features: [
        "Квадратные: от 8×8 до 500×500 мм",
        "Прямоугольные: от 15×10 до 400×200 мм",
        "Толщина стенки от 0,5 до 12 мм",
        "Оцинкованные и черные варианты",
        "Длина стандартная 6 и 12 метров",
        "Возможна порезка в размер"
      ],
      examples: [
        { text: "Профильная 160×120×8 — 144 метра", location: "Алматы", price: "890 тыс ₸", status: "Доставлено" },
        { text: "Профильная 200×200×6 ст.09Г2С — 30 тонн", location: "Павлодар", price: "11.2 млн ₸", status: "В производстве" },
        { text: "Профильная 10×10×0,6 — 3 тонны", location: "Астана", price: "1.1 млн ₸", status: "Доставлено" }
      ],
      advantages: [
        "Точная геометрия профиля",
        "Антикоррозийная обработка",
        "Быстрая доставка"
      ]
    }
  ];

  const advantages = [
    {
      icon: Lightning,
      title: "⚡ Молниеносная доставка",
      description: "Доставляем металлопрокат за 7-10 дней по всему Казахстану",
      detail: "Собственная логистическая сеть из 15+ складов России. Экспресс-доставка авиатранспортом для срочных заказов за 48 часов. Отслеживание груза в реальном времени через личный кабинет.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: ShieldCheck,
      title: "🛡️ Железная гарантия качества",
      description: "100% гарантия качества + возврат денег при несоответствии",
      detail: "Каждая партия проходит входной контроль качества. Полный пакет документов: сертификаты соответствия ГОСТ, паспорта качества заводов, протоколы испытаний. Гарантия возврата 100% стоимости при несоответствии заявленным характеристикам.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: TruckIcon,
      title: "Полная логистика под ключ",
      description: "От завода до вашего склада без хлопот",
      detail: "Растаможка, транспортировка, выгрузка краном, складирование. Все документы и разрешения берем на себя.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Crown,
      title: "5 лет безупречной репутации",
      description: "Проверенный временем надежный партнер",
      detail: "Более 500 успешных проектов, постоянные клиенты по всему Казахстану. Рекомендации от крупнейших компаний.",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const whyChooseUs = [
    {
      icon: Gem,
      title: "Эксклюзивные позиции",
      description: "Привозим металлопрокат, которого нет на рынке Казахстана. Редкие марки стали и нестандартные размеры.",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: DollarSign,
      title: "Лучшие цены на рынке",
      description: "Прямые поставки с заводов без посредников. Экономия до 50% от рыночных цен в Казахстане.",
      color: "text-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Rocket,
      title: "Скорость решения задач",
      description: "Находим и доставляем любой металлопрокат за 7-10 дней. Экстренные поставки за 3 дня.",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Network,
      title: "Широкая география поставок",
      description: "Работаем с 15+ ведущими заводами России. Доступ к полному ассортименту металлопродукции.",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  const testimonials = [
    {
      name: "Асылбек Нурланов",
      position: "Главный инженер",
      company: "ТОО «СтройМонтаж Казахстан»",
      text: "АТЛАНТ МЕТАЛЛ - единственные, кто смог найти и привезти круги 38ХС диаметром 280 мм для нашего завода. Качество превосходное, все сертификаты в порядке, сроки соблюдены идеально!",
      rating: 5,
      project: "Завод по производству промышленных валов",
      avatar: "👨‍💼",
      orderValue: "8.7 млн ₸"
    },
    {
      name: "Марат Жумабаев", 
      position: "Директор по закупкам",
      company: "Строительная компания «Алтын Орда»",
      text: "Заказывали профильные трубы нестандартных размеров для торгового центра. Привезли точно в срок, с полным пакетом документов. Цены оказались на 25% ниже местных поставщиков!",
      rating: 5,
      project: "ТРЦ «Мега Плаза» в Шымкенте",
      avatar: "👨‍💻",
      orderValue: "15.2 млн ₸"
    },
    {
      name: "Дина Сагындыкова",
      position: "Руководитель отдела снабжения",
      company: "ТОО «НефтеГазСтрой Атырау»", 
      text: "Сотрудничаем уже 3 года. Всегда находят нужные трубы для наших нефтегазовых объектов. Профессиональный подход, честные цены, надежная доставка. Рекомендуем всем!",
      rating: 5,
      project: "Нефтепровод Тенгиз-Атырау",
      avatar: "👩‍💼",
      orderValue: "45.8 млн ₸"
    },
    {
      name: "Ержан Касымов",
      position: "Технический директор",
      company: "Машиностроительный завод «Казмаш»",
      text: "Нужны были специальные стали для оборонного заказа. АТЛАНТ нашли все позиции на российских заводах, оформили все документы. Работают как часы!",
      rating: 5,
      project: "Специальное машиностроение",
      avatar: "👨‍🔧",
      orderValue: "22.3 млн ₸"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "📋 Техническое задание",
      description: "Отправляете нам техническое задание с точными характеристиками металлопроката",
      icon: MessageCircle,
      time: "5 минут",
      details: "Указываете: марку стали, размеры, количество, сроки поставки, место доставки"
    },
    {
      step: "02", 
      title: "🔍 Поиск на заводах России", 
      description: "Наши специалисты находят нужный металлопрокат на 15+ заводах России",
      icon: Target,
      time: "30 минут",
      details: "Проверяем наличие, качество, сертификаты. Выбираем лучшее предложение по цене и срокам"
    },
    {
      step: "03",
      title: "💰 Оплата и оформление",
      description: "Согласовываем цену, оформляем договор и получаем предоплату 50%",
      icon: Calculator,
      time: "1 час",
      details: "Подписываем договор, выставляем счет. Принимаем оплату любым удобным способом"
    },
    {
      step: "04",
      title: "🚛 Доставка под ключ",
      description: "Организуем производство, отгрузку, растаможку и доставку до вашего склада",
      icon: Truck,
      time: "7-10 дней",
      details: "Полное сопровождение груза, растаможка, доставка манипулятором, выгрузка на объекте"
    }
  ];

  const certificates = [
    { name: "ISO 9001:2015", description: "Система менеджмента качества" },
    { name: "ГОСТ Р", description: "Соответствие российским стандартам" },
    { name: "Сертификат Ростехнадзора", description: "Промышленная безопасность" },
    { name: "Таможенный союз", description: "Декларация соответствия ТР ТС" }
  ];

  const industries = [
    {
      icon: Building,
      title: "Строительство",
      description: "Металлоконструкции, каркасы зданий, мосты",
      projects: "150+ объектов"
    },
    {
      icon: Factory,
      title: "Промышленность",
      description: "Машиностроение, нефтегаз, энергетика",
      projects: "80+ предприятий"
    },
    {
      icon: Wrench,
      title: "Производство",
      description: "Изготовление деталей, инструмента, оборудования",
      projects: "200+ заказов"
    },
    {
      icon: Truck,
      title: "Транспорт",
      description: "Железнодорожное и автомобильное машиностроение",
      projects: "45+ проектов"
    }
  ];

  const guarantees = [
    {
      icon: BadgeCheck,
      title: "Гарантия качества",
      description: "100% соответствие ГОСТ и ТУ",
      details: "Возврат средств при несоответствии"
    },
    {
      icon: Timer,
      title: "Гарантия сроков",
      description: "Доставка точно в срок",
      details: "Компенсация за каждый день просрочки"
    },
    {
      icon: Lock,
      title: "Гарантия цены",
      description: "Фиксированная стоимость",
      details: "Цена не изменится после подписания договора"
    },
    {
      icon: Verified,
      title: "Гарантия документов",
      description: "Полный пакет сертификатов",
      details: "Все документы для таможни и контроля"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-4 sticky top-0 z-50 shadow-2xl backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-600 to-red-500 p-1 rounded-xl shadow-lg">
              <img src="https://atlantsnabcity.kz/promo/setka-kladochnaya/img/logo.png" alt="2GIS" className="h-14 mt-0"/>
                {/* <Package className="h-8 w-8 text-white" /> */}
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  АТЛАНТ МЕТАЛЛ
                </h1>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-200 font-medium">Металлопрокат из России</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-300 font-bold">4.9</span>
                    <span className="text-blue-200">(112+ отзывов)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#products" className="hover:text-orange-300 transition-colors font-medium relative group">
                  Продукция
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full"></span>
                </a>
                <a href="#calculator" className="hover:text-orange-300 transition-colors font-medium relative group">
                  Калькулятор
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full"></span>
                </a>
                <a href="#process" className="hover:text-orange-300 transition-colors font-medium relative group">
                  Как работаем
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-orange-300 transition-colors font-medium relative group">
                  Контакты
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full"></span>
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <a href="tel:+77472199369" className="text-orange-300 font-bold text-lg block">
                    +7 (747) 219 9369
                  </a>
                  <span className="text-xs text-blue-200">Звонок бесплатный</span>
                </div>
                <button onClick={() => setShowCallbackModal(true)} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-8 py-3 mb-8">
              <Sparkles className="h-6 w-6 text-orange-400 mr-3 animate-pulse" />
              <span className="text-orange-300 font-semibold text-lg">🔥 Эксклюзивные поставки редкого металлопроката из России</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-10 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block mb-4">
                НУЖЕН РЕДКИЙ
              </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent block">
                МЕТАЛЛОПРОКАТ?
              </span>
            </h1>
            
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl lg:text-3xl text-blue-100 mb-8 leading-relaxed font-medium">
                <strong className="text-white">ТОО "АТЛАНТ МЕТАЛЛ"</strong> — ваш надежный партнер в поставках 
                <span className="text-orange-300 font-bold"> эксклюзивного металлопроката из России</span>
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 p-8 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Привозим то, чего НЕТ в Казахстане</h3>
                      <p className="text-blue-200">Редкие марки стали, нестандартные размеры, специальные сплавы</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Lightning className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Доставка за 7-10 дней</h3>
                      <p className="text-blue-200">Прямые поставки с 15+ ведущих заводов России</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <DollarSign className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Экономия до 50%</h3>
                      <p className="text-blue-200">Без посредников, прямые заводские цены</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <ShieldCheck className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">100% гарантия качества</h3>
                      <p className="text-blue-200">Полный пакет документов, сертификаты ГОСТ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl">
                <span className="flex items-center justify-center">
                  <Calculator className="mr-3 h-7 w-7" />
                  Рассчитать стоимость за 30 секунд
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Play className="mr-3 h-6 w-6" />
                  Посмотреть видео о компании
                </span>
              </button>
            </div>

            {/* Enhanced Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <div 
                  key={index}
                  data-animate
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center transition-all duration-500 hover:bg-white/20 transform hover:scale-105 ${
                    isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-fit mx-auto mb-4`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Нам доверяют <span className="text-blue-600">ведущие компании Казахстана</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <industry.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-3">{industry.description}</p>
                <div className="text-blue-600 font-semibold">{industry.projects}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">🏆 Более 500 успешных проектов за 5 лет работы</h3>
            <p className="text-blue-100 text-lg">
              От небольших производств до крупнейших промышленных объектов Казахстана
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="products" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-8 py-3 rounded-full font-semibold mb-8">
              <Factory className="h-6 w-6 mr-3" />
              Наша продукция
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Металлопрокат <span className="text-blue-600">любой сложности</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Работаем с более чем <strong>15 ведущими заводами России</strong>. Найдем и доставим любой металлопрокат, 
              даже если его нет на рынке Казахстана. <span className="text-blue-600 font-semibold">Гарантируем качество и сроки!</span>
            </p>
          </div>

          {/* Enhanced Product Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-3 rounded-3xl shadow-2xl border border-gray-200">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`px-10 py-5 rounded-2xl font-bold transition-all text-lg ${
                    activeTab === product.id
                      ? `bg-gradient-to-r ${product.gradient} text-white shadow-2xl transform scale-105`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {product.title}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Active Product */}
          {products.map((product) => (
            activeTab === product.id && (
              <div key={product.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className={`bg-gradient-to-r ${product.gradient} p-16 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: product.bgPattern === 'circles' 
                        ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                        : product.bgPattern === 'pipes'
                        ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='18' y='0' width='4' height='40'/%3E%3C/g%3E%3C/svg%3E")`
                        : `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='15' y='15' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-16 items-center relative">
                    <div>
                      <div className="flex items-center mb-8">
                        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-3xl mr-6">
                          <product.icon className="h-20 w-20" />
                        </div>
                        <div>
                          <h3 className="text-5xl font-bold mb-3">{product.title}</h3>
                          <p className="text-2xl opacity-90">{product.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-xl mb-10 opacity-90 leading-relaxed">{product.description}</p>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
                        <h4 className="text-2xl font-bold mb-6 flex items-center">
                          <Gem className="h-7 w-7 mr-3" />
                          Наши преимущества:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {product.advantages.map((advantage, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <span className="font-semibold">✨ {advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h4 className="text-3xl font-bold mb-8 flex items-center">
                        <TruckIcon className="h-8 w-8 mr-3" />
                        Последние поставки:
                      </h4>
                      {product.examples.map((example, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/30 transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <p className="font-bold text-xl mb-2">{example.text}</p>
                              <div className="flex items-center text-lg opacity-90 mb-3">
                                <MapPin className="h-5 w-5 mr-2" />
                                {example.location}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                                {example.price}
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                example.status === 'Доставлено' ? 'bg-green-100 text-green-800' :
                                example.status === 'В пути' ? 'bg-blue-100 text-blue-800' :
                                'bg-orange-100 text-orange-800'
                              }`}>
                                {example.status}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/30">
                        <h5 className="text-xl font-bold mb-4">🎯 Нужен именно ваш размер?</h5>
                        <p className="text-lg opacity-90 mb-6">
                          Найдем и привезем металлопрокат любых размеров и марок стали. 
                          Даже если его нет в наличии на складах Казахстана!
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
                          Отправить заявку
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Calculator Section */}
      <MetalCalculator />

      {/* Enhanced Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Почему выбирают <span className="text-blue-600">именно нас?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>5 лет успешной работы</strong>, сотни довольных клиентов и тысячи тонн качественного металлопроката. 
              <span className="text-blue-600 font-semibold">Мы знаем, как решать сложные задачи!</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-10">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  data-animate
                  className={`flex items-start space-x-8 p-8 rounded-3xl bg-gradient-to-r ${item.bgColor} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible[index + 10] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className={`p-6 rounded-3xl bg-white shadow-2xl ${item.color}`}>
                    <item.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-4xl font-bold mb-10 flex items-center">
                  <Crown className="h-10 w-10 mr-4 text-yellow-400" />
                  Наши гарантии
                </h3>
                <div className="space-y-8">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <guarantee.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{guarantee.title}</h4>
                        <p className="text-blue-100 mb-2">{guarantee.description}</p>
                        <p className="text-sm text-blue-200">{guarantee.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Certificate Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl transform rotate-12">
                <div className="text-center">
                  <Medal className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-bold">ISO 9001</div>
                  <div className="text-sm">Сертифицировано</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                data-animate
                className={`group bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 ${
                  isVisible[index + 14] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`bg-gradient-to-r ${advantage.color} p-6 rounded-3xl w-fit mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <advantage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{advantage.description}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{advantage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section id="process" className="py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold mb-6">
              <Target className="h-5 w-5 mr-2" />
              Простой процесс работы
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Как мы <span className="text-blue-600">работаем</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Отлаженный процесс работы за 5 лет. От первого звонка до получения металлопроката на вашем складе. 
              <span className="text-blue-600 font-semibold">Контролируем каждый этап!</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Заявка и консультация",
                description: "Вы оставляете заявку, наш инженер связывается с вами в течение 15 минут, уточняет технические требования и предлагает оптимальные варианты.",
                icon: MessageCircle,
                color: "from-blue-600 to-blue-700",
                details: ["Бесплатная консультация", "Техническая экспертиза", "Подбор аналогов"]
              },
              {
                step: "02", 
                title: "Подбор и согласование",
                description: "Мы находим нужный прокат на 15+ заводах России, согласовываем с вами точную цену, сроки поставки и условия оплаты.",
                icon: Target,
                color: "from-orange-600 to-orange-700",
                details: ["Поиск на 15+ заводах", "Лучшие цены", "Гибкие условия"]
              },
              {
                step: "03",
                title: "Производство и контроль",
                description: "После заключения договора и предоплаты завод производит ваш заказ. Мы контролируем каждый этап производства и качество.",
                icon: Factory,
                color: "from-green-600 to-green-700",
                details: ["Контроль производства", "Проверка качества", "Фото-отчеты"]
              },
              {
                step: "04",
                title: "Доставка и приемка",
                description: "Мы организуем доставку металлопроката на ваш объект или склад. Вы получаете заказ вместе с полным пакетом документов.",
                icon: Truck,
                color: "from-purple-600 to-purple-700",
                details: ["Доставка по РК", "Полный пакет документов", "Выгрузка краном"]
              }
            ].map((step, index) => (
              <div 
                key={index}
                data-animate
                className={`relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[index + 18] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-center">
                  <div className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}>
                    {step.step}
                  </div>
                  <step.icon className={`h-16 w-16 mx-auto mb-6 ${step.color.includes('blue') ? 'text-blue-600' : step.color.includes('orange') ? 'text-orange-600' : step.color.includes('green') ? 'text-green-600' : 'text-purple-600'}`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-10 w-10 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Почему наш процесс работает идеально?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Clock className="h-16 w-16 text-orange-300 mb-4" />
                <h4 className="text-xl font-bold mb-2">Скорость</h4>
                <p className="text-blue-100">Ответ в течение 15 минут, поставка за 7-10 дней</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-16 w-16 text-green-300 mb-4" />
                <h4 className="text-xl font-bold mb-2">Надежность</h4>
                <p className="text-blue-100">5 лет на рынке, 500+ довольных клиентов</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-16 w-16 text-yellow-300 mb-4" />
                <h4 className="text-xl font-bold mb-2">Качество</h4>
                <p className="text-blue-100">Контроль на каждом этапе, гарантия результата</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block 1 */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Хотите стать нашим следующим <span className="text-yellow-300">довольным клиентом?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к 500+ компаниям, которые доверяют нам свои проекты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105">
              Получить консультацию
            </button>
            <a href="tel:+77472199369" className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold mb-6">
              <Star className="h-5 w-5 mr-2" />
              Отзывы довольных клиентов
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                500+ компаний
              </span>
              <br />
              <span className="text-gray-900">доверяют нам свои проекты</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От небольших мастерских до крупных промышленных предприятий - 
              <span className="text-blue-600 font-bold"> мы помогаем бизнесу расти уже 5 лет</span>
            </p>
          </div>

          {/* Trust Stats */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600 font-medium">клиентов возвращаются к нам снова</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
                <p className="text-gray-600 font-medium">тонн металлопроката поставлено</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-600 mb-2">0%</div>
                <p className="text-gray-600 font-medium">брака за последний год</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-purple-600 mb-2">4.9</div>
                <p className="text-gray-600 font-medium">средняя оценка наших услуг</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Асылбек Нурланов",
                company: "ТОО «СтройМонтаж Казахстан»",
                position: "Главный инженер",
                text: "АТЛАНТ МЕТАЛЛ - единственные, кто смог найти и привезти круги 38ХС диаметром 280 мм для нашего завода. Искали по всему Казахстану - никто не мог поставить. Ребята нашли на заводе в Челябинске, привезли за 8 дней. Качество отличное, все сертификаты в порядке!",
                rating: 5,
                project: "Завод по производству валов для горнодобывающей техники",
                avatar: "👨‍💼",
                orderValue: "8.7 млн ₸",
                deliveryTime: "8 дней"
              },
              {
                name: "Марат Жумабаев", 
                company: "Строительная компания «Алтын Орда»",
                position: "Директор по закупкам",
                text: "Заказывали профильные трубы нестандартных размеров для торгового центра в Шымкенте. В Казахстане таких размеров не производят. АТЛАНТ нашли на заводе в Липецке, привезли точно в срок, с полным пакетом документов. Цена оказалась даже ниже, чем мы планировали!",
                rating: 5,
                project: "Торговый центр «Мега Плаза» в Шымкенте",
                avatar: "👨‍💻",
                orderValue: "12.3 млн ₸",
                deliveryTime: "6 дней"
              },
              {
                name: "Дина Сагындыкова",
                company: "ТОО «НефтеГазСтрой Атырау»", 
                position: "Начальник отдела снабжения",
                text: "Сотрудничаем с АТЛАНТ уже 3 года. Всегда находят нужные трубы для наших нефтегазовых объектов, даже самые редкие марки стали. Профессиональный подход на всех этапах - от консультации до доставки. Рекомендуем всем коллегам по отрасли!",
                rating: 5,
                project: "Нефтепровод Тенгиз-Атырау, 2-я очередь",
                avatar: "👩‍💼",
                orderValue: "45.2 млн ₸",
                deliveryTime: "10 дней"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                data-animate
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[index + 22] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.position}</div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                
                {/* Company Info */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl mb-4">
                  <div className="font-bold text-blue-900 mb-1">{testimonial.company}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.project}</div>
                </div>
                
                {/* Order Details */}
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-bold">{testimonial.orderValue}</span>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="font-bold">{testimonial.deliveryTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Видео-отзывы наших клиентов</h3>
            <p className="text-xl text-blue-100 mb-8">
              Посмотрите, что говорят о нашей работе руководители крупнейших компаний Казахстана
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 flex items-center mx-auto">
              <Play className="h-6 w-6 mr-3" />
              Смотреть видео-отзывы
            </button>
          </div>
        </div>
      </section>

      {/* CTA Block 2 */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Нужен металлопрокат, которого <span className="text-yellow-300">нет в Казахстане?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Мы найдем и привезем любую позицию с заводов России за 7-10 дней!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105">
              Отправить техзадание
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all">
              Рассчитать в калькуляторе
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
            <Zap className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-white font-semibold">Готовы к сотрудничеству</span>
          </div>
          <h2 className="text-5xl font-bold mb-8">
            Готовы начать <span className="text-orange-400">сотрудничество?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Оставьте заявку прямо сейчас и получите персональное предложение с расчетом стоимости в течение 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl">
              Получить предложение за 15 минут
            </button>
            <a href="tel:+77472199369" className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    */}
      {/* CTA Block 3 */}
      {/*
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Экономьте время и деньги с <span className="text-yellow-300">АТЛАНТ МЕТАЛЛ!</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Прямые поставки с заводов России • Без посредников • Лучшие цены на рынке
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105">
              Узнать цены
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all">
              Скачать каталог
            </button>
          </div>
        </div>
      </section>
      */}

      {/* Certificates Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Сертификаты и <span className="text-blue-600">лицензии</span>
            </h2>
            <p className="text-xl text-gray-600">Все необходимые документы для работы с металлопрокатом</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl w-fit mx-auto mb-6">
                  <BadgeCheck className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowCertificates(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Посмотреть все сертификаты
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">Свяжитесь с нами</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Наши специалисты готовы решить любые ваши задачи в области поставок металлопроката из России
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="flex items-center space-x-8 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-orange-600 p-6 rounded-3xl shadow-lg">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Телефон</h3>
                  <a href="tel:+77472199369" className="text-orange-300 hover:text-orange-200 transition-colors text-xl font-bold">
                    +7 (747) 219 9369 (Милана)
                  </a>
                  <p className="text-gray-400 text-sm">Звонок бесплатный • Звоните</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-blue-600 p-6 rounded-3xl shadow-lg">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Email</h3>
                  <a href="mailto:info@atlantsnabcity.kz" className="text-blue-300 hover:text-blue-200 transition-colors text-xl font-bold">
                    info@atlantsnabcity.kz (ответ в течение часа)
                  </a>
                  <p className="text-gray-400 text-sm">Ответим в течение 15 минут</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-green-600 p-6 rounded-3xl shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Офис 1</h3>
                  <p className="text-gray-300 text-xl">Офис/склад: проспект Рыскулова 94а</p>
                  <p className="text-gray-400 text-sm"><a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://atlantsnabcity.kz/promo/setka-kladochnaya/img/2gis-Logo.png" alt="2GIS" className="h-8 mt-2"/>
                  </a></p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Цех/склад</h3>
                  <p className="text-gray-300 text-xl">Цех/склад: турксибский район, Остроумова 127 (остановка РВ-90)</p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://atlantsnabcity.kz/promo/setka-kladochnaya/img/2gis-Logo.png" alt="2GIS" className="h-8 mt-2"/>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 text-orange-300 flex items-center">
                  <Clock className="h-7 w-7 mr-3" />
                  Режим работы
                </h3>
                <div className="space-y-3 text-gray-300 text-lg">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span className="font-semibold">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота:</span>
                    <span className="font-semibold text-red-400">выходной</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span className="font-semibold text-red-400">выходной</span>
                  </div>
                  <div className="border-t border-orange-500/30 pt-3 mt-4">
                    <p className="text-orange-300 font-semibold">Принимаем Ваши заказы</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Быстрая заявка</h3>
              <p className="text-gray-600 mb-6">Заполните форму и получите расчет стоимости в течение 15 минут</p>
              <form className="space-y-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Ваше имя *</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя *"
                    className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 text-lg transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Телефон *</label>
                  <input 
                    type="tel" 
                    placeholder="Телефон *"
                    className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 text-lg transition-all"
                  />
                </div>
                {/* <div>
                  <label className="block text-gray-700 font-semibold mb-3">Компания</label>
                  <input 
                    type="text" 
                    placeholder="Компания"
                    className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 text-lg transition-all"
                  />
                </div> */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Техническое задание *</label>
                  <textarea 
                    placeholder="Опишите ваши потребности в металлопрокате (тип, размер, количество, сроки) *"
                    rows={6}
                    className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 text-lg transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <Rocket className="mr-3 h-6 w-6" />
                    Получить расчет за 15 минут
                  </span>
                </button>
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  * Обязательные поля. Нажимая кнопку, вы соглашаетесь с обработкой персональных данных<br />
                  <span className="text-blue-600 font-semibold">Ответим в течение 15 минут!</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl">
                  <img src="https://atlantsnabcity.kz/promo/setka-kladochnaya/img/logo.png" alt="2GIS" className="h-14 mt-0"/>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">ТОО "АТЛАНТ МЕТАЛЛ"</h3>
                  <p className="text-gray-400 text-lg">Поставки металлопроката из России с 2019 года</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-lg text-lg leading-relaxed">
                Мы специализируемся на поставках редкого и нестандартного металлопроката, которого нет на рынке Казахстана. 
                Работаем с 15+ ведущими заводами России.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Продукция</h4>
              <ul className="space-y-3">
                <li><a href="#products" className="hover:text-orange-400 transition-colors text-lg">Круги стальные</a></li>
                <li><a href="#products" className="hover:text-orange-400 transition-colors text-lg">Трубы стальные</a></li>
                <li><a href="#products" className="hover:text-orange-400 transition-colors text-lg">Трубы профильные</a></li>
                <li><a href="#calculator" className="hover:text-orange-400 transition-colors text-lg">Калькулятор стоимости</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Компания</h4>
              <ul className="space-y-3">
                <li><a href="#process" className="hover:text-orange-400 transition-colors text-lg">Как мы работаем</a></li>
                <li><a href="#testimonials" className="hover:text-orange-400 transition-colors text-lg">Отзывы клиентов</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors text-lg">Контакты</a></li>
                <li><a href="tel:+77472199369" className="hover:text-orange-400 transition-colors text-lg">+7 (747) 219 9369</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-lg">
                © 2025 ТОО "АТЛАНТ МЕТАЛЛ". Все права защищены. 
                <span className="mx-2">•</span>
                БИН: 123456789012
                <span className="mx-2">•</span>
                Лицензия на импорт металлопроката
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-500">Разработка сайта:</span>
                <span className="text-white font-semibold">SMMBOX KZ 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-5xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">О компании АТЛАНТ МЕТАЛЛ</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Play className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 text-xl">Видео презентация компании</p>
                <p className="text-gray-500">5 лет успешной работы • 500+ довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {showCertificates && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Сертификаты и лицензии</h3>
              <button 
                onClick={() => setShowCertificates(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ✕
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="bg-blue-100 p-4 rounded-xl w-fit mb-4">
                    <BadgeCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                    Посмотреть сертификат →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showCallbackModal && <CallbackModal onClose={() => setShowCallbackModal(false)} />}
    </div>
  );
}

const CallbackModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:3000/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          sourceUrl: window.location.href, // Отправляем текущий URL как источник
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        setIsError(false);
        setName('');
        setPhone('');
      } else {
        setMessage(`Ошибка при отправке заявки: ${data.message}`);
        setIsError(true);
      }
    } catch (error) {
      setMessage('Произошла ошибка сети. Пожалуйста, попробуйте еще раз.');
      setIsError(true);
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-blue-700 to-slate-800 rounded-3xl p-8 max-w-md w-full text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-3xl"
        >
          ✕
        </button>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Заказ звонка!</h2>
          <p className="text-blue-200 mb-8">
            Заполните форму и наш менеджер свяжется с вами в течение 15 минут!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-orange-500/50 focus:border-orange-500 text-white text-lg transition-all placeholder-white/50"
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:ring-4 focus:ring-orange-500/50 focus:border-orange-500 text-white text-lg transition-all placeholder-white/50"
              required
            />
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
              disabled={loading}
            >
              {loading ? 'Отправка...' : 'Заказать звонок'}
            </button>
            {message && (
              <p className={`text-center text-sm ${isError ? 'text-red-400' : 'text-green-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
