'use client';

import React, { useState } from 'react';
import { 
  Brain, Users, CheckCircle, ArrowRight, Play, School, Shield, 
  FileText, Target, Award, Star, AlertTriangle, Clock, Lightbulb, 
  TrendingUp, Pause, ChevronLeft, ChevronRight, Mail, Phone, 
  Building, MessageSquare, User, X 
} from 'lucide-react';

const CDASystem = () => {
  const [activeDemo, setActiveDemo] = useState('konflikt');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [counters, setCounters] = useState({
    testers: 0,
    testCases: 0,
    satisfaction: 0,
    readiness: 0
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Marie A.",
      role: "Specialpædagog, Test-bruger",
      text: "CDA-systemets trafiklys-metode gav mig endelig et konkret værktøj til konflikter. Det virker fantastisk!",
      rating: 5
    },
    {
      name: "Lars N.",
      role: "Psykolog, Pilot-projekt", 
      text: "Jeg har testet systemet i 3 måneder. Det er præcis hvad vi har manglet - strukturerede løsninger der virker.",
      rating: 5
    },
    {
      name: "Sofie H.",
      role: "Lærer, Test-fase",
      text: "De sensoriske løsninger hjalp med at skabe ro i mit klasselokale. Børnene blev meget mere fokuserede.",
      rating: 5
    },
    {
      name: "Peter J.",
      role: "Fagperson, Pilot-test",
      text: "Skolevægring-modulet er gennemtænkt og praktisk. Jeg glæder mig til den endelige version!",
      rating: 5
    }
  ];
  // Counter animation
  React.useEffect(() => {
    const targets = { testers: 34, testCases: 87, satisfaction: 100, readiness: 95 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        testers: Math.floor(targets.testers * progress),
        testCases: Math.floor(targets.testCases * progress), 
        satisfaction: Math.floor(targets.satisfaction * progress),
        readiness: Math.floor(targets.readiness * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Testimonial auto-rotation
  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length]);

  // Contact Modal Component
  const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: '',
      interest: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '', email: '', phone: '', organization: '', role: '',
          interest: '', message: ''
        });
        onClose();
      }, 4000);
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-xl max-w-2xl w-full my-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Kontakt CD AI Systems</h2>
              <p className="text-gray-600">Vi kontakter dig hurtigst muligt</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="p-6">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tak for din henvendelse!</h3>
                <p className="text-gray-600 mb-6">
                  Vi har modtaget dine oplysninger og kontakter dig hurtigst muligt.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-blue-800 font-semibold mb-3">📞 Eller kontakt os direkte:</h4>
                  <div className="space-y-2">
                    <p className="text-blue-700 flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href="mailto:kontakt@cdaisystems.com" className="hover:underline font-medium">
                        kontakt@cdaisystems.com
                      </a>
                    </p>
                    <p className="text-blue-700 flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href="tel:+4526823121" className="hover:underline font-medium">
                        26 82 31 21
                      </a>
                    </p>
                  </div>
                  <p className="text-blue-600 text-sm mt-3">
                    Ring eller skriv for hurtigste svar!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Fulde navn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Dit fulde navn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="din@email.dk"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="26 82 31 21"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Skole/Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Skole/Institution"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Din rolle
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Vælg din rolle</option>
                    <option value="lærer">Lærer</option>
                    <option value="pædagog">Pædagog</option>
                    <option value="specialpædagog">Specialpædagog</option>
                    <option value="skoleleder">Skoleleder</option>
                    <option value="teamleder">Teamleder</option>
                    <option value="psykolog">Psykolog</option>
                    <option value="andet">Andet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Hvad interesserer dig mest?
                  </label>
                  <div className="space-y-2">
                    {[
                      'Konflikthåndtering og eskalering',
                      'Sensoriske udfordringer i klasselokalet', 
                      'Skolevægring og fravær',
                      'Tidsoptimering og workflow',
                      'Generel CDA-implementering',
                      'Andet'
                    ].map((area) => (
                      <label key={area} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value={area}
                          checked={formData.interest === area}
                          onChange={(e) => handleInputChange('interest', e.target.value)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-3 text-gray-700">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Besked
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Beskriv gerne jeres situation eller hvad I gerne vil vide mere om..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name.trim() || !formData.email.trim() || isSubmitting}
                    className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sender...
                      </>
                    ) : (
                      'Send henvendelse'
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Vi kontakter dig inden for 24 timer
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-gray-800 font-semibold mb-2 text-center">
                      🚀 Vil du i kontakt hurtigere?
                    </h4>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a 
                        href="mailto:kontakt@cdaisystems.com"
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        kontakt@cdaisystems.com
                      </a>
                      <a 
                        href="tel:+4526823121"
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        26 82 31 21
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const demoTypes = [
    {
      id: 'konflikt',
      title: 'Konflikter eskalerer',
      icon: '🚦',
      description: 'Trafiklys-kort til at navigere gennem konflikter',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'sensorisk',
      title: 'Urolige klasseværelser',
      icon: '🎧',
      description: 'Sensoriske løsninger til bedre læringsmiljø',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'skolevaegring',
      title: 'Skolevægring',
      icon: '🏠',
      description: 'Trinvis plan for at få barnet tilbage i skolen',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'tid',
      title: 'Manglende tid',
      icon: '⚡',
      description: 'Hurtige løsninger når tiden er knap',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const getDemoContent = (type) => {
    const content = {
      konflikt: {
        title: 'Trafiklys-kort til konflikthåndtering',
        steps: [
          { color: 'red', label: 'STOP', action: 'Anerkend følelser og få overblik' },
          { color: 'yellow', label: 'VENT', action: 'Find årsagen sammen med barnet' },
          { color: 'green', label: 'KØR', action: 'Løs problemet og lær af situationen' }
        ],
        implementation: 'Dette kort hjælper dig med at navigere gennem konflikter på en struktureret måde, hvor barnet føler sig hørt og forstået.'
      },
      sensorisk: {
        title: 'Sensoriske løsninger til urolige rum',
        solutions: [
          '🎧 Støjreducerende hovedtelefoner',
          '💡 Dæmpet belysning og rolige farver',
          '🪑 Fleksible siddepladser (puf, stående bord)',
          '🌿 Roligt hjørne med bløde materialer',
          '🔄 Bevægelsespauser hver 20. minut'
        ],
        implementation: 'Disse løsninger skaber et mere inkluderende miljø for børn med sensoriske udfordringer.'
      },
      skolevaegring: {
        title: 'Trinvis plan mod skolevægring',
        phases: [
          { phase: 1, title: 'Kortlæg årsager', description: 'Forstå hvad der skaber modstand' },
          { phase: 2, title: 'Byg tillid', description: 'Skab sikre relationer først' },
          { phase: 3, title: 'Små skridt', description: 'Start med korte besøg' },
          { phase: 4, title: 'Gradvis udvidelse', description: 'Øg tiden og aktiviteterne' },
          { phase: 5, title: 'Vedligehold', description: 'Sikr stabil deltagelse' }
        ],
        implementation: 'En struktureret tilgang der respekterer barnets tempo og bygger på succesoplevelser.'
      },
      tid: {
        title: 'Hurtige løsninger til travle dage',
        quickFixes: [
          '⚡ 2-minutters åndedrætsøvelse',
          '🎯 "3 gode ting" øvelse',
          '🤝 Hurtig check-in med barnet',
          '📝 Notér udfordringer til senere',
          '🔄 Brug bevægelse som pause'
        ],
        implementation: 'Værktøjer du kan bruge med det samme, også når kalenderen er fyldt.'
      }
    };
    return content[type] || content.konflikt;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">CDA-System</h1>
                <p className="text-sm text-gray-600 px-2">Inklusionsværktøj til skoler</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#challenges" className="text-gray-700 hover:text-blue-600">Udfordringer</a>
              <a href="#solution" className="text-gray-700 hover:text-blue-600">Løsning</a>
              <a href="#why" className="text-gray-700 hover:text-blue-600">Hvorfor CDA</a>
              <a href="#demo" className="text-gray-700 hover:text-blue-600">Demo</a>
            </nav>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Kontakt os
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Bygget indefra - ikke fra forskningsbøger, men fra levede erfaringer
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Verdens mest effektive<br />
            <span className="text-blue-600">inklusionsværktøj</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            CDA er ikke bygget på teori, men på <strong>hvad et barn med diagnoser savnede</strong>. 
            Skabt med barnets øjne - for at sikre ingen andre børn skal opleve at føle sig misforstået. 
            Det er derfor CDA ser og løser ting, andre systemer slet ikke opdager.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Se CDA løse konflikter
            </button>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50"
            >
              Book demo til jeres skole
            </button>
          </div>
        </div>
      </section>
      {/* Live Statistics Counter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 rounded-2xl">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-4">
                CDA-systemet under udvikling
              </h2>
              <p className="text-center text-blue-100 mb-12 text-lg">
                Aktuelle test-resultater fra vores pilotprojekt
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{counters.testers}</div>
                  <div className="flex items-center justify-center text-blue-200">
                    <Users className="h-5 w-5 mr-2" />
                    Test-brugere
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    Lærere, psykologer, speciallærere
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{counters.testCases}+</div>
                  <div className="flex items-center justify-center text-blue-200">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Test-cases
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    Afprøvede situationer
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{counters.satisfaction}%</div>
                  <div className="flex items-center justify-center text-blue-200">
                    <Star className="h-5 w-5 mr-2" />
                    Siger "JA tak"
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    Ønsker systemet ved frigivelse
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{counters.readiness}%</div>
                  <div className="flex items-center justify-center text-blue-200">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Udvikling
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    Næsten klar til lancering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Teacher Challenges */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Kender I disse udfordringer?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hver dag oplever lærere og pædagoger situationer, hvor de eksisterende værktøjer kommer til kort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoTypes.map((demo) => (
              <div
                key={demo.id}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${demo.color} p-6 text-white cursor-pointer transform transition-all hover:scale-105 ${
                  activeDemo === demo.id ? 'ring-4 ring-white ring-opacity-60' : ''
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{demo.title}</h4>
                <p className="text-white/90 mb-4">{demo.description}</p>
                <div className="flex items-center text-white/80">
                  <span className="text-sm">Se løsning</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Demo Content */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            {(() => {
              const content = getDemoContent(activeDemo);
              return (
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">{content.title}</h4>
                  
                  {content.steps && (
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      {content.steps.map((step, index) => (
                        <div key={index} className={`bg-white p-4 rounded-lg border-l-4 ${
                          step.color === 'red' ? 'border-red-500' :
                          step.color === 'yellow' ? 'border-yellow-500' : 'border-green-500'
                        }`}>
                          <div className={`text-lg font-bold ${
                            step.color === 'red' ? 'text-red-600' :
                            step.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {step.label}
                          </div>
                          <p className="text-gray-700 mt-2">{step.action}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {content.solutions && (
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Konkrete løsninger:</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {content.solutions.map((solution, index) => (
                          <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                            <span className="text-2xl mr-3">{solution.split(' ')[0]}</span>
                            <span className="text-gray-700">{solution.substring(solution.indexOf(' ') + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {content.phases && (
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">5-trins plan:</h5>
                      <div className="space-y-4">
                        {content.phases.map((phase, index) => (
                          <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                              {phase.phase}
                            </div>
                            <div>
                              <h6 className="font-semibold text-gray-900">{phase.title}</h6>
                              <p className="text-gray-700">{phase.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {content.quickFixes && (
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Øjeblikkelige værktøjer:</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {content.quickFixes.map((fix, index) => (
                          <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                            <span className="text-2xl mr-3">{fix.split(' ')[0]}</span>
                            <span className="text-gray-700">{fix.substring(fix.indexOf(' ') + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800">{content.implementation}</p>
                  </div>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Kontakt os for fuld demo
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
      {/* Testimonial Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 py-16 rounded-2xl">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Hvad siger vores test-brugere?
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Feedback fra pædagoger, psykologer og speciallærere der tester systemet
              </p>
              
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 mx-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div> 
                {/* Navigation */}
                <button
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <button
                  onClick={() => setCurrentTestimonial(prev => 
                    (prev + 1) % testimonials.length
                  )}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why CDA Works - The Inside Story */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Autentisk udvikling
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Hvorfor CDA virker, hvor andre fejler
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Bygget af dem der bruger det</h4>
                    <p className="text-gray-600">Ikke akademikere der aldrig har stået i et klasselokale, men af dem der lever med udfordringerne hver dag.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Testet i virkeligheden</h4>
                    <p className="text-gray-600">Hver løsning er afprøvet i rigtige situationer med rigtige børn og voksne.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Fokus på det der virker</h4>
                    <p className="text-gray-600">Vi bruger ikke tid på teori, men giver jer værktøjer I kan tage i brug i morgen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Hvad gør CDA anderledes?</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">Andre systemer</span>
                    <span className="text-red-600">Teori først</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <span className="font-medium text-gray-900">CDA</span>
                    <span className="text-blue-600">Praksis først</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">Andre systemer</span>
                    <span className="text-red-600">Lange kurser</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <span className="font-medium text-gray-900">CDA</span>
                    <span className="text-blue-600">Øjeblikkelige værktøjer</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">Andre systemer</span>
                    <span className="text-red-600">One-size-fits-all</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <span className="font-medium text-gray-900">CDA</span>
                    <span className="text-blue-600">Tilpasset situation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Vil du være med fra starten?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            CDA-systemet lanceres snart. Kontakt os for at høre mere om pilotprojektet og komme på ventelisten
          </p>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg"
          >
            📞 Kontakt os for early access
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-lg font-bold">CDA-System</h3>
                  <p className="text-gray-400 text-sm">Inklusionsværktøj</p>
                </div>
              </div>
              <p className="text-gray-400">
                Skabt med barnets øjne for at sikre ingen børn føler sig misforstået.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Løsninger</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konflikthåndtering</li>
                <li>Sensoriske udfordringer</li>
                <li>Skolevægring</li>
                <li>Tidsbesparende værktøjer</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Om CDA</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Vores historie</li>
                <li>Test-program</li>
                <li>Dokumentation</li>
                <li>Forskningsbase</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 kontakt@cdaisystems.com</li>
                <li>📞 26 82 31 21</li>
                <li>🌐 cdaisystems.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CD AI Systems. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default CDASystem;
