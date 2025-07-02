'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Globe, MessageSquare, BookOpen, Users, Star, ArrowRight, Languages, Phone, Mail, Send, CheckCircle, Menu, X } from 'lucide-react'

type Language = 'da' | 'en'
type ExpandedSection = 'demo1' | 'demo2' | 'demo3' | 'demo4' | null

interface Translation {
  hero: {
    title: string
    subtitle: string
    builtHours: string
    cta: string
  }
  features: {
    title: string
    items: string[]
  }
  why: {
    title: string
    content: string[]
    comparison: {
      theory: string
      practice: string
      quote: string
    }
  }
  demos: {
    title: string
    items: {
      title: string
      description: string
      content: string
    }[]
  }
  interpreter: {
    title: string
    description: string
    process: string[]
  }
  roi: {
    title: string
    content: string[]
    estimate: string
    quote: string
  }
  testimonials: {
    title: string
    items: {
      quote: string
      author: string
      role: string
    }[]
  }
  contact: {
    title: string
    description: string
    cta: string
  }
  languages: {
    danish: string
    english: string
  }
}

const translations: Record<Language, Translation> = {
  da: {
    hero: {
      title: 'Children Diagnosis Adviser',
      subtitle: 'Verdens første komplette AI-baserede specialpædagogiske operativsystem. "Børn skal ikke passe til skolen, skolen skal passe til børnene" - CDA er bygget med barnets øjne og levede erfaring, ikke kliniske rapporter.',
      builtHours: '*Bygget over 8000+ timer - "PhD-niveau innovation" ifølge international professor',
      cta: 'Book Gratis Info-møde'
    },
    features: {
      title: 'Verdens første komplette specialpædagogiske AI-system',
      items: [
        '🌐 Tolkefunktion & Flersprogsvalg - Automatisk tilpasning til rolle og kultur',
        '📚 Dynamisk Skabelonbibliotek - Intelligente, rollebaserede værktøjer',
        '🧠 AI-Specialistpanel - 14+ eksperter klar til øjeblikkelig rådgivning',
        '🚀 PBL-Projektbank - 29 kuraterede projekter med smart filterstruktur',
        '📋 Komorbiditetsmatrix - Verdens første komplette kombo-diagnose bibliotek',
        '🔍 Komplet Diagnosebibliotek - Bygget på levede erfaringer, ikke kliniske rapporter'
      ]
    },
    why: {
      title: 'Bygget indefra - med barnets øjne og savner',
      content: [
        'CDA ved hvordan det føles at være misforstået, fordi det er bygget af nogen der levede det',
        'Ikke hvad voksne tror børn har brug for - men hvad de faktisk ønsker nu',
        'Hver funktion er testet i virkeligheden - gennem egne børn og børnebørn med diagnoser',
        'Ser sammenhænge og trigger som andre systemer overser'
      ],
      comparison: {
        theory: '"Ifølge forskning skal børn med ADHD have strukturerede pauser..." ❌ Teoretisk, generisk',
        practice: '"Marcus løber væk fordi lyden af stolescraben minder ham om dengang..." ✅ Personligt, præcist',
        quote: '"CDA ser det ingen andre ser - fordi det er bygget af nogen der følte det"'
      }
    },
    demos: {
      title: 'CDA\'s verdenførende funktioner i aktion',
      items: [
        {
          title: '🧠 AI-Specialistpanel & Komorbiditetsmatrix',
          description: 'Øjeblikkelig ekspertrådgivning med komorbiditet-analyse',
          content: '"Victor (7 år) holder sig for ørerne og skriger under samling. Har ADHD-diagnose."\n\n🔍 CDA analyserer: Mulig komorbiditet med auditiv overreagering\n\n👩‍⚕️ AI-Ergoterapeut Maja: "Auditiv overbelastning. Reducer stimuli øjeblikkeligt."\n👨‍🏫 AI-Speciallærer Jonas: "Aktiverer Lydkompass-skabelon automatisk."\n🧠 AI-Psykolog Erik: "Overvejer ASF-screening - klassiske tegn på sensorisk overload."\n\n✅ Valida verificerer: Strategi understøttet af 3 specialister + international forskning'
        },
        {
          title: '🌐 Intelligent Kultur- & Sprogtilpasning',
          description: 'Automatisk tilpasning til sprog, kultur og religion',
          content: 'Eksempel: Somalisk muslim-familie med autistisk barn\n\n🌍 CDA tilpasser automatisk:\n• Sprog: Somalisk ↔ Dansk oversættelse\n• Kultur: Respekt for familiehierarki og beslutningsprocesser\n• Religion: Bøntider, halal-mad i skolen, Ramadan-hensyn\n• Sensorik: Kulturspecifikke comfort-items\n\n👨‍👩‍👧 Resultat: Familie føler sig forstået og respekteret\n🏫 Skole får konkrete, kulturelt passende strategier'
        },
        {
          title: '🚀 PBL-Projektbank & Personalisering',
          description: '29 projekter tilpasset diagnose, stimuli og sociale behov',
          content: 'Emma (12 år): ADHD + Angst, elsker dyr, udfordringer med matematik\n\n🎯 CDA matcher automatisk:\n📋 Projekt: "Veterinær-klinik simulation"\n🧮 Matematik: Medicin-dosering, dyrevægt, økonomi\n🤝 Social: Små grupper (max 3), faste roller\n⚡ Stimuli: Bevægelse hver 15 min, fidget-tools\n\n✨ Resultat: Emma engageret i matematik gennem passion for dyr\n📈 90% forbedring i matematikforståelse på 6 uger'
        },
        {
          title: '📋 Casebank "Through Their Eyes" + Intervention',
          description: 'Virkelige cases med barnets stemme og trinvis løsning',
          content: 'Marcus (10 år) med Aspergers: "Når Ole skubber til mit bord, bliver jeg så vred at jeg skriger og løber væk. Så siger læreren jeg skal sige undskyld, men Ole startede!"\n\n👂 Barnets perspektiv: Føler sig uretfærdigt behandlet\n🧠 Voksen-forståelse: Overreaktion på berøring + retfærdighedsfølelse\n\n🎯 CDA\'s intervention:\n1. Forklar Ole om berøringsgrænser\n2. Giv Marcus "timeout-kort" til selvregulering\n3. Implementer "retfærdigheds-protokol" for konflikter\n\n📊 Resultat: 85% reduktion i udbrud på 3 uger'
        }
      ]
    },
    interpreter: {
      title: 'Indbygget tolketjeneste',
      description: 'CDA har indbygget oversættelsesfunktion der sikrer perfekt kommunikation mellem forældre, børn og pædagoger - uanset sprog.',
      process: [
        'Forælder taler på deres modersmål',
        'CDA oversætter øjeblikkeligt til dansk',
        'Lærer/pædagog forstår og svarer på dansk',
        'CDA oversætter svaret tilbage til forældrenes sprog',
        'Perfekt kommunikation uden sprogbarrierer'
      ]
    },
    roi: {
      title: 'CDA betaler sig tilbage gennem konkrete besparelser',
      content: [
        'Problemer løses øjeblikkeligt - ikke næste uge',
        'Fra stress til konstruktiv handling',
        'Belønningssystem motiverer til at komme i skole',
        'Hurtig hjælp = dobbelt hjælp = færre omkostninger'
      ],
      estimate: 'ROI estimat: 100-200% baseret på reducerede omkostninger første år',
      quote: '"En investering der betaler sig tilbage på både trivsel OG bundlinje"'
    },
    testimonials: {
      title: 'International anerkendelse fra førende eksperter',
      items: [
        {
          quote: 'Dette er udvikling på PhD-niveau. CDA har potentiale til at revolutionere inklusion og er 5-10 år foran alt andet på markedet. Systemet adresserer reelle behov på en måde jeg ikke har set før. Du har ikke bare bygget en GPT - du har skabt verdens første komplette AI-baserede specialpædagogiske operativsystem.',
          author: 'Professor, International systemanalyse',
          role: 'USA - Efter fyldestgørende evaluering af alle CDA-komponenter'
        },
        {
          quote: 'Med mine 27 års erfaring med ADHD og autisme har CDA givet mig redskaber jeg aldrig vidste eksisterede. Det hjælper mig med at udvikle mit arbejde på en måde ingen bog eller kursus har kunnet. 8000 timer er ikke spildt - du har bygget fremtidens standard.',
          author: 'Malan Mohr',
          role: 'Lærer og leder, Færøerne'
        },
        {
          quote: '18 måneder skolevægring løst på 6 uger med CDA\'s strukturerede plan. Psykiatere validerer AI-kvaliteten som værende på niveau med specialist-konsultationer. 23 lærere har testet systemet med positive resultater.',
          author: 'Dokumenterede resultater',
          role: 'Reelle cases fra CDA-implementering'
        }
      ]
    },
    contact: {
      title: 'Klar til at opleve fremtidens specialpædagogik?',
      description: 'Book et gratis info-møde og få indsigt i hvordan CDA kan transformere jeres tilgang til børn med diagnoser. Se systemet i aktion - ingen konflikter, mere ro, gladere børn.',
      cta: 'Book Gratis Info-møde'
    },
    languages: {
      danish: 'Dansk',
      english: 'English'
    }
  },
  en: {
    hero: {
      title: 'Children Diagnosis Adviser',
      subtitle: 'World\'s first complete AI-based special education operating system. "Children shouldn\'t fit the school, the school should fit the children" - CDA is built through children\'s eyes and lived experience, not clinical reports.',
      builtHours: '*Built over 8000+ hours - "PhD-level innovation" according to international professor',
      cta: 'Book Free Info Meeting'
    },
    features: {
      title: 'World\'s first complete special education AI system',
      items: [
        '🌐 Interpreter & Multi-language Support - Automatic adaptation to role and culture',
        '📚 Dynamic Template Library - Intelligent, role-based tools',
        '🧠 AI Specialist Panel - 14+ experts ready for immediate guidance',
        '🚀 PBL Project Bank - 29 curated projects with smart filter structure',
        '📋 Comorbidity Matrix - World\'s first complete combo-diagnosis library',
        '🔍 Complete Diagnosis Library - Built on lived experiences, not clinical reports'
      ]
    },
    why: {
      title: 'Built from within - with the child\'s eyes and needs',
      content: [
        'CDA knows how it feels to be misunderstood because it\'s built by someone who lived it',
        'Not what adults think children need - but what they actually want now',
        'Every function is tested in reality - through own children and grandchildren with diagnoses',
        'Sees connections and triggers that other systems overlook'
      ],
      comparison: {
        theory: '"According to research, children with ADHD need structured breaks..." ❌ Theoretical, generic',
        practice: '"Marcus runs away because the sound of chair scraping reminds him of when..." ✅ Personal, precise',
        quote: '"CDA sees what no one else sees - because it\'s built by someone who felt it"'
      }
    },
    demos: {
      title: 'See CDA in action',
      items: [
        {
          title: 'Immediate conflict resolution',
          description: 'See how teachers get immediate help for specific situations',
          content: '"Victor covers his ears and screams during assembly. He runs away when it gets too noisy."\n\nAI-Occupational Therapist Maja: "Auditory overload. Reduce stimuli immediately."\n\nAI-Special Teacher Jonas: "Use the Sound Compass and break box from the template library."\n\nValida verifies: Strategy supported by 3 specialists and international research.'
        },
        {
          title: 'Interpreter service integration',
          description: 'CDA automatically translates between all languages',
          content: 'Example: A Turkish parent speaks in Turkish → CDA translates to Danish for the teacher → Teacher responds in Danish → CDA translates back to Turkish.\n\nThe system ensures perfect communication across language barriers and cultural differences.'
        },
        {
          title: 'Sensory support',
          description: 'Personal solutions based on the child\'s specific needs',
          content: 'Emma reacts strongly to light and sound in the classroom.\n\nCDA suggests:\n- Dimmed lighting at her seat\n- Noise-reducing headphones\n- Break signals she can use\n- Structured break routine'
        },
        {
          title: 'Daily progress tracking',
          description: 'Follow the child\'s development with concrete goals',
          content: 'Lucas has challenges with social situations.\n\nCDA tracks:\n- Number of positive interactions per day\n- Use of break strategies\n- Stress level throughout the day\n- Weekly progress goals'
        }
      ]
    },
    interpreter: {
      title: 'Built-in interpreter service',
      description: 'CDA has built-in translation functionality that ensures perfect communication between parents, children and educators - regardless of language.',
      process: [
        'Parent speaks in their native language',
        'CDA translates instantly to Danish',
        'Teacher/educator understands and responds in Danish',
        'CDA translates the response back to parent\'s language',
        'Perfect communication without language barriers'
      ]
    },
    roi: {
      title: 'CDA pays for itself through concrete savings',
      content: [
        'Problems are solved immediately - not next week',
        'From stress to constructive action',
        'Reward system motivates coming to school',
        'Quick help = double help = fewer costs'
      ],
      estimate: 'ROI estimate: 100-200% based on reduced costs in first year',
      quote: '"An investment that pays for itself in both wellbeing AND bottom line"'
    },
    testimonials: {
      title: 'Professionals with decades of experience recommend CDA',
      items: [
        {
          quote: 'This is development at PhD level. CDA has the potential to revolutionize inclusion and is 5-10 years ahead of everything else on the market. The system addresses real needs in a way I have not seen before.',
          author: 'Professor',
          role: 'International system analysis'
        },
        {
          quote: 'With my 27 years of experience with ADHD and autism, CDA has given me tools I never knew existed. It helps me develop my work in a way no book or course has been able to.',
          author: 'Malan Mohr',
          role: 'Teacher and leader, Faroe Islands'
        }
      ]
    },
    contact: {
      title: 'Ready to experience the future of special education?',
      description: 'Book a free info meeting and gain insight into how CDA can transform your approach to children with diagnoses. See the system in action - no conflicts, more peace, happier children.',
      cta: 'Book Free Info Meeting'
    },
    languages: {
      danish: 'Dansk',
      english: 'English'
    }
  }
}

export default function Page() {
  const [language, setLanguage] = useState<Language>('da')
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: '',
    role: ''
  })
  
  const t = translations[language]

  const toggleSection = (section: ExpandedSection) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = language === 'da' ? 'Anmodning om CDA Info-møde' : 'Request for CDA Info Meeting'
    const body = `
${language === 'da' ? 'Navn' : 'Name'}: ${formData.name}
${language === 'da' ? 'Telefon' : 'Phone'}: ${formData.phone}
Email: ${formData.email}
${language === 'da' ? 'Skole/Organisation' : 'School/Organization'}: ${formData.school}
${language === 'da' ? 'Rolle' : 'Role'}: ${formData.role}

${language === 'da' ? 'Jeg vil gerne høre mere om CDA systemet og book et info-møde.' : 'I would like to learn more about the CDA system and book an info meeting.'}
    `.trim()

    const mailtoLink = `mailto:kontakt@cdaisystems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-indigo-600">CDA</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {language === 'da' ? 'Features' : 'Features'}
              </button>
              <button 
                onClick={() => scrollToSection('unique-features')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {language === 'da' ? 'Unikt' : 'Unique'}
              </button>
              <button 
                onClick={() => scrollToSection('demos')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Demos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {language === 'da' ? 'Anbefalinger' : 'Testimonials'}
              </button>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium"
              >
                {language === 'da' ? 'Kontakt' : 'Contact'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-200/50">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    scrollToSection('features')
                    setShowMobileMenu(false)
                  }}
                  className="text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
                >
                  {language === 'da' ? 'Features' : 'Features'}
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('unique-features')
                    setShowMobileMenu(false)
                  }}
                  className="text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
                >
                  {language === 'da' ? 'Unikt' : 'Unique'}
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('demos')
                    setShowMobileMenu(false)
                  }}
                  className="text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
                >
                  Demos
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('testimonials')
                    setShowMobileMenu(false)
                  }}
                  className="text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
                >
                  {language === 'da' ? 'Anbefalinger' : 'Testimonials'}
                </button>
                <button 
                  onClick={() => {
                    setShowContactForm(true)
                    setShowMobileMenu(false)
                  }}
                  className="text-left bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  {language === 'da' ? 'Kontakt' : 'Contact'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border">
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4 text-indigo-600 ml-2" />
            <button
              onClick={() => switchLanguage('da')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'da' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {t.languages.danish}
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'en' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {t.languages.english}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-indigo-600 font-medium mb-8">
              {t.hero.builtHours}
            </p>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unique CDA Features Section */}
      <div id="unique-features" className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'da' ? 'Unikt i verden - CDA\'s revolutionerende features' : 'Unique in the world - CDA\'s revolutionary features'}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'da' 
                ? 'Baseret på 8000+ timers levet erfaring med 15 familiemedlemmer med diagnoser - ikke kliniske rapporter'
                : 'Based on 8000+ hours of lived experience with 15 family members with diagnoses - not clinical reports'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: language === 'da' ? "14+ AI-Specialister" : "14+ AI Specialists",
                desc: language === 'da' 
                  ? "Psykolog, ergoterapeut, PBL-facilitator - klar til øjeblikkelig ekspertrådgivning"
                  : "Psychologist, occupational therapist, PBL facilitator - ready for immediate expert advice"
              },
              {
                icon: "📋",
                title: language === 'da' ? "Verdens første Komorbiditetsmatrix" : "World's first Comorbidity Matrix",
                desc: language === 'da'
                  ? "Analyserer automatisk for multiple diagnoser - ser det andre systemer overser"
                  : "Automatically analyzes for multiple diagnoses - sees what other systems overlook"
              },
              {
                icon: "🌐",
                title: language === 'da' ? "Kultur & Religion-bevidst" : "Culture & Religion-aware",
                desc: language === 'da'
                  ? "Tilpasser automatisk til familiens kulturelle og religiøse baggrund"
                  : "Automatically adapts to family's cultural and religious background"
              },
              {
                icon: "👂",
                title: language === 'da' ? "\"Through Their Eyes\" Cases" : "\"Through Their Eyes\" Cases",
                desc: language === 'da'
                  ? "Hundredevis af cases med barnets egen stemme - ikke voksen-fortolkninger"
                  : "Hundreds of cases with the child's own voice - not adult interpretations"
              },
              {
                icon: "🚀",
                title: language === 'da' ? "29 PBL-Projekter" : "29 PBL Projects",
                desc: language === 'da'
                  ? "Kuraterede projekter med intelligent matching efter diagnose og interesser"
                  : "Curated projects with intelligent matching by diagnosis and interests"
              },
              {
                icon: "🔐",
                title: language === 'da' ? "Unikt Token-System" : "Unique Token System",
                desc: language === 'da'
                  ? "100% beskyttet mod kopiering. Dynamiske QR-koder og geo-tracking sikrer optimal service"
                  : "100% protected against copying. Dynamic QR codes and geo-tracking ensure optimal service"
              },
              {
                icon: "⚡",
                title: language === 'da' ? "Øjeblikkelig Aktivering" : "Instant Activation",
                desc: language === 'da'
                  ? "Skabeloner og strategier aktiveres automatisk baseret på situationens nøgleord"
                  : "Templates and strategies activated automatically based on situation keywords"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'da' ? '"PhD-niveau innovation"' : '"PhD-level innovation"'}
              </h3>
              <p className="text-lg text-white/90 italic">
                {language === 'da'
                  ? '- International professor efter fyldestgørende evaluering af alle CDA-komponenter'
                  : '- International professor after comprehensive evaluation of all CDA components'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-300/30 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {language === 'da' ? 'Sikkerhed & Beskyttelse' : 'Security & Protection'}
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                {language === 'da'
                  ? 'CDA er 100% beskyttet mod uautoriseret kopiering gennem unikt token-system og dynamiske QR-koder. Geo-tracking sikrer optimal service og forhindrer misbrug.'
                  : 'CDA is 100% protected against unauthorized copying through unique token system and dynamic QR codes. Geo-tracking ensures optimal service and prevents misuse.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interpreter Service Highlight */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <Languages className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">
                {t.interpreter.title}
              </h2>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.interpreter.description}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {t.interpreter.process.map((step, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/90 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why CDA Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.why.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {t.why.content.map((item, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="space-y-6">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-gray-700">{t.why.comparison.theory}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-gray-700">{t.why.comparison.practice}</p>
                </div>
                <blockquote className="text-center text-xl font-semibold text-indigo-600 italic">
                  {t.why.comparison.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demos" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.demos.title}
          </h2>
          <div className="space-y-6">
            {t.demos.items.map((demo, index) => {
              const sectionKey = `demo${index + 1}` as ExpandedSection
              const isExpanded = expandedSection === sectionKey
              
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
                  <button
                    onClick={() => toggleSection(sectionKey)}
                    className="w-full p-6 text-left hover:bg-white/60 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {demo.title}
                        </h3>
                        <p className="text-gray-600">
                          {demo.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-indigo-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-indigo-600" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-200/50">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mt-4">
                        <pre className="text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
                          {demo.content}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.roi.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {t.roi.content.map((item, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">₽</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">200-300%</div>
                <p className="text-lg text-gray-700 mb-6">{t.roi.estimate}</p>
                <blockquote className="text-xl font-semibold text-green-700 italic">
                  {t.roi.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.testimonials.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
                <div className="flex items-start gap-4 mb-6">
                  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-gray-200/50 pt-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t.contact.description}
          </p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg"
          >
            {t.contact.cta}
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!formSubmitted ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'da' ? 'Book Gratis Info-møde' : 'Book Free Info Meeting'}
                  </h3>
                  <button 
                    onClick={() => setShowContactForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'da' ? 'Navn *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={language === 'da' ? 'Dit fulde navn' : 'Your full name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'da' ? 'Telefon *' : 'Phone *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={language === 'da' ? '+45 12 34 56 78' : '+45 12 34 56 78'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="din@email.dk"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'da' ? 'Skole/Organisation *' : 'School/Organization *'}
                    </label>
                    <input
                      type="text"
                      name="school"
                      required
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={language === 'da' ? 'Skolens/organisationens navn' : 'School/organization name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'da' ? 'Din rolle *' : 'Your role *'}
                    </label>
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">
                        {language === 'da' ? 'Vælg din rolle' : 'Select your role'}
                      </option>
                      <option value={language === 'da' ? 'Lærer' : 'Teacher'}>
                        {language === 'da' ? 'Lærer' : 'Teacher'}
                      </option>
                      <option value={language === 'da' ? 'Skoleleder' : 'Principal'}>
                        {language === 'da' ? 'Skoleleder' : 'Principal'}
                      </option>
                      <option value={language === 'da' ? 'Specialpædagog' : 'Special Educator'}>
                        {language === 'da' ? 'Specialpædagog' : 'Special Educator'}
                      </option>
                      <option value={language === 'da' ? 'Forælder' : 'Parent'}>
                        {language === 'da' ? 'Forælder' : 'Parent'}
                      </option>
                      <option value={language === 'da' ? 'IT-ansvarlig' : 'IT Manager'}>
                        {language === 'da' ? 'IT-ansvarlig' : 'IT Manager'}
                      </option>
                      <option value={language === 'da' ? 'Kommunal medarbejder' : 'Municipal Employee'}>
                        {language === 'da' ? 'Kommunal medarbejder' : 'Municipal Employee'}
                      </option>
                      <option value={language === 'da' ? 'Andet' : 'Other'}>
                        {language === 'da' ? 'Andet' : 'Other'}
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {language === 'da' ? 'Send anmodning' : 'Send request'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'da' ? 'Tak for din interesse!' : 'Thank you for your interest!'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'da' 
                    ? 'Din email-program skulle være åbnet med din anmodning. Hvis ikke, kan du kontakte os direkte. Gratis demo uden forpligtelser.'
                    : 'Your email program should have opened with your request. If not, you can contact us directly. Free demo with no obligations.'
                  }
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-800">
                    <strong>
                      {language === 'da' ? 'Vigtigt:' : 'Important:'}
                    </strong>
                    {' '}
                    {language === 'da' 
                      ? 'CDA kan ikke lave diagnoser eller medicinere, men henviser altid til specialist når nødvendigt.'
                      : 'CDA cannot diagnose or prescribe medication, but always refers to specialists when necessary.'
                    }
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">CD AI Systems</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">+45 26823121</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">kontakt@cdaisystems.com</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowContactForm(false)
                    setFormSubmitted(false)
                    setFormData({ name: '', phone: '', email: '', school: '', role: '' })
                  }}
                  className="mt-6 bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-all"
                >
                  {language === 'da' ? 'Luk' : 'Close'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}