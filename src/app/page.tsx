'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
import { 
  Brain, Users, CheckCircle, ArrowRight, Play, School, Shield, 
  FileText, Target, Award, Star, AlertTriangle, Clock, Lightbulb, 
  TrendingUp, Pause, ChevronLeft, ChevronRight, Mail, Phone, 
  Building, MessageSquare, User, X 
} from 'lucide-react';

const CDASystem = () => {
  const [activeDemo, setActiveDemo] = useState('konflikt');
  const [counters, setCounters] = useState({
    testers: 0,
    testCases: 0,
    satisfaction: 0,
    readiness: 0
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
=======
import { Brain, Users, CheckCircle, ArrowRight, Play, School, Shield, FileText, Target, Award, Star, AlertTriangle, Clock, Lightbulb, X } from 'lucide-react';

const CDASystem = () => {
  const [activeDemo, setActiveDemo] = useState('konflikt');
const [isKonfliktOpen, setIsKonfliktOpen] = useState(false);
const [isSkolevægringOpen, setIsSkolevægringOpen] = useState(false);
const [isDialogOpen, setIsDialogOpen] = useState(false);
const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-2xl w-full my-8 flex flex-col max-h-[calc(100vh-4rem)]">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto flex-1">{children}</div>
        </div>
      </div>
    );
  };
  
const TrafiklysKort = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800">Trafiklys-Kort – Konfliktløsning</h3>
        <p className="text-sm text-blue-600 mt-1">Se Victors situation løst med CDA's metode</p>
      </div>
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
            <div className="text-4xl">🟢</div>
            <div><h4 className="font-bold text-green-800">Grøn - Jeg har det godt</h4><p className="text-green-600">Giv opgaver og ros</p></div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
            <div className="text-4xl">🟡</div>
            <div><h4 className="font-bold text-yellow-800">Gul - Jeg er stresset</h4><p className="text-yellow-600">Hjælp med pause og ro</p></div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
            <div className="text-4xl">🔴</div>
            <div><h4 className="font-bold text-red-800">Rød - Jeg er overvældet</h4><p className="text-red-600">Giv ro og hjælp væk fra situation</p></div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">🎯 Se alle 50+ skabeloner</h4>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">📅 Book Demo</button>
      </div>
    </div>
  );

  const SkolevægringPlan = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-orange-800">Trinvis Plan mod Skolevægring</h3>
        <p className="text-sm text-orange-600 mt-1">Se hvordan Sofie kom tilbage til skolen</p>
      </div>
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-800 mb-3">🏁 Trin 1: Skab tryghed hjemme</h4>
          <ul className="space-y-1 text-green-700 text-sm">
            <li>• Fasthold daglige rutiner</li>
            <li>• Kontakt med skolen gennem log</li>
            <li>• Identificer triggers og bekymringer</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-800 mb-3">🚶 Trin 2: Gradvis eksponering</h4>
          <ul className="space-y-1 text-blue-700 text-sm">
            <li>• Kør forbi skolen</li>
            <li>• Besøg legeplads i weekend</li>
            <li>• Møde med lærer i trygge rammer</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">🎯 Se den komplette 4-trins plan</h4>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 font-semibold">📅 Book Demo</button>
      </div>
    </div>
  );

  const DialogSkabeloner = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800">Sensoriske Løsninger</h3>
        <p className="text-sm text-blue-600 mt-1">Rolige klasseværelser med CDA's metoder</p>
      </div>
      <div className="grid gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">💚 Miljøtilpasninger</h4>
          <ul className="text-green-700 text-sm space-y-1">
            <li>• Dæmp lys 20% for bedre ro</li>
            <li>• Soft baggrungsmusik</li>
            <li>• Fjern unødige visuelle stimuli</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">⏰ Strukturerede pauser</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Pause hver 15 minutter</li>
            <li>• Etabler roligt hjørne</li>
            <li>• Visuel dagsplan på tavlen</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">🎯 Se alle sensoriske værktøjer</h4>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">📅 Book Demo</button>
      </div>
    </div>
  );

  const SuccessStories = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <h3 className="text-lg font-semibold text-green-800">Hurtige Løsninger med CDA</h3>
        <p className="text-sm text-green-600 mt-1">Automatiske skabeloner sparer tid</p>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">⚡ Øjeblikkelig hjælp</h4>
          <p className="text-blue-700 text-sm">I stedet for at vente på specialister, får læreren øjeblikkeligt:</p>
          <ul className="text-blue-700 text-sm mt-2 space-y-1">
            <li>• Færdige skabeloner til print</li>
            <li>• Konkrete handlingsplaner</li>
            <li>• Specialistrådgivning på stedet</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-bold text-yellow-800 mb-2">📊 Dokumenterede resultater</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• 65% færre konsulent-timer</li>
            <li>• 90% problemer løst på stedet</li>
            <li>• Gladere lærere og børn</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">🎯 Se alle tidsbesparende værktøjer</h4>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-semibold">📅 Book Demo</button>
      </div>
    </div>
  );
  
  const handleModalOpen = (demo) => {
    switch(demo) {
      case 'konflikt':
        setIsKonfliktOpen(true);
        break;
      case 'ro':
        setIsDialogOpen(true);
        break;
      case 'skolevægring':
        setIsSkolevægringOpen(true);
        break;
      case 'tid':
        setIsSuccessOpen(true);
        break;
    }
  };
  
  const teacherChallenges = [
>>>>>>> b56baba84602b2e84937224e4822c03e88fabf13
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

<<<<<<< HEAD
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
=======
  const renderDemo = () => {
            switch(activeDemo) {
      case 'konflikt':
        return (
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">Akut situation - Case SP1: Victor, 5 år:</h4>
              <p className="text-red-800">"Victor holder sig for ørerne og skriger under samling. Han løber væk når der bliver for støjende."</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">CDA matcher fra 60+ cases og aktiverer specialister:</h4>
              <div className="space-y-2 text-blue-800 text-sm">
                <p><strong>AI-Ergoterapeut Maja:</strong> "Auditiv overbelastning. Reducer stimuli øjeblikkeligt."</p>
                <p><strong>AI-Speciallærer Jonas:</strong> "Brug Lydkompasset og pausekassen fra skabelonbiblioteket."</p>
                <p><strong>Valida verificerer:</strong> Strategi understøttet af 3 specialister og international forskning.</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">Øjeblikkelige materialer fra skabelonbibliotek:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Til nu:</strong>
                  <ul className="text-green-800 list-disc list-inside mt-1">
                    <li>Lydkompasset (visuel støjguide)</li>
                    <li>Min Pausekasse (sensorisk værktøj)</li>
                    <li>Overgangskort med billeder</li>
                  </ul>
                </div>
                <div>
                  <strong>Til fremtiden:</strong>
                  <ul className="text-green-800 list-disc list-inside mt-1">
                    <li>PBL-projekt: Sensory Nature Journal</li>
                    <li>Trinvis plan for samlinger</li>
                    <li>Forældrekommunikation pakke</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'ro':
        return (
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-2">Udfordring:</h4>
              <p className="text-yellow-800">"Klassen er konstant urolig. Børnene kan ikke koncentrere sig, og jeg bruger al min tid på at få ro."</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">CDA's analyse og løsning:</h4>
              <div className="text-blue-800 text-sm space-y-2">
                <p><strong>Årsag identificeret:</strong> Sensorisk overbelastning + manglende struktur</p>
                <p><strong>Plan:</strong> 3-trins sensorisk ro-strategi</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Trin 1: Miljø</h5>
                <ul className="text-green-800 text-xs space-y-1">
                  <li>• Dæmp lys 20%</li>
                  <li>• Soft musik i baggrund</li>
                  <li>• Ryd unødige visuelle stimuli</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Trin 2: Struktur</h5>
                <ul className="text-green-800 text-xs space-y-1">
                  <li>• Pause hver 15 min</li>
                  <li>• Roligt hjørne etableres</li>
                  <li>• Visuel dagsplan på tavlen</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Trin 3: Værktøjer</h5>
                <ul className="text-green-800 text-xs space-y-1">
                  <li>• Fidget-tools til 3 børn</li>
                  <li>• Støjdæmpende høreværn</li>
                  <li>• Bevægelseskort til alle</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'skolevægring':
        return (
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-2">Situation:</h4>
              <p className="text-red-800">"Sofie, 8 år, har ikke været i skole i 3 uger. Forældrene er desperate, og hun får angst ved tanken om skolen."</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">CDA's trinvise plan:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-blue-900">Uge 1 - Genkendt tryghed:</strong>
                  <ul className="text-blue-800 list-disc list-inside mt-1">
                    <li>Dag 1-2: Kør forbi skolen</li>
                    <li>Dag 3-4: Parkér og se på skolegård</li>
                    <li>Dag 5: Gå til hovedindgang</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-900">Uge 2 - Lille kontakt:</strong>
                  <ul className="text-blue-800 list-disc list-inside mt-1">
                    <li>15 min i bibliotek</li>
                    <li>Hente noget fra lærerens bord</li>
                    <li>Spise frokost i mælkekøkken</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">Daglige materialer genereres automatisk:</h4>
              <div className="text-green-800 text-sm">
                <p>• Social historie for Sofie • Bekræftelseskort til forældre • Progressions-skema • Trygheds-plan for lærer</p>
              </div>
            </div>
          </div>
        );

          case 'tid':
  return (
    <div className="space-y-4">
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-900 mb-2">Udfordring:</h4>
        <p className="text-purple-800">"Jeg har 28 børn og 3 med diagnoser. Der er ikke tid til at lave individuelle planer til alle."</p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-2">CDA's automatiske løsning:</h4>
        <div className="text-blue-800 text-sm space-y-2">
          <p><strong>På 30 sekunder genererer CDA:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Individuel handlingsplan baseret på diagnose</li>
            <li>Færdige skabeloner til print</li>
            <li>Forældrekommunikation</li>
            <li>Evalueringsskema</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-900 mb-2">Tidsbesparelse dokumenteret:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-green-900">Før CDA:</strong>
            <ul className="text-green-800 list-disc list-inside mt-1">
              <li>2-3 timer per barn</li>
              <li>Vente på specialister</li>
              <li>Lave alt fra bunden</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-900">Med CDA:</strong>
            <ul className="text-green-800 list-disc list-inside mt-1">
              <li>30 sekunder per barn</li>
              <li>Øjeblikkelig eksperthjælp</li>
              <li>Færdige skabeloner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );      
      
      default:
        return (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Vælg en situation ovenfor</h3>
            <p className="text-gray-600">Se hvordan CDA løser konkrete problemer i klasseværelset</p>
          </div>
        );
    }
>>>>>>> b56baba84602b2e84937224e4822c03e88fabf13
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">CDA-System</h1>
                <p className="text-sm text-gray-600">Inklusionsværktøj til skoler</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#challenges" className="text-gray-700 hover:text-blue-600">Udfordringer</a>
              <a href="#solution" className="text-gray-700 hover:text-blue-600">Løsning</a>
              <a href="#why" className="text-gray-700 hover:text-blue-600">Hvorfor CDA</a>
              <a href="#demo" className="text-gray-700 hover:text-blue-600">Demo</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Se CDA løse konflikter
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50">
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
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Se fuld demo af denne løsning
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
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg">
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
    </div>
  );
};

export default CDASystem;
