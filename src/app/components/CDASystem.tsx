import React, { useState } from 'react';
import { Brain, Users, CheckCircle, ArrowRight, Play, School, Shield, FileText, Target, Award, Star, AlertTriangle, Clock, Lightbulb } from 'lucide-react';

const CDASystem = () => {
  const [activeDemo, setActiveDemo] = useState('konflikt');

  const teacherChallenges = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      problem: "Konflikter eskalerer",
      solution: "CDA giver trin-for-trin konfliktløsning i øjeblikket",
      demo: "konflikt"
    },
    {
      icon: <Users className="w-6 h-6" />,
      problem: "Urolige klasseværelser",
      solution: "Sensoriske løsninger og strukturerede pauser",
      demo: "ro"
    },
    {
      icon: <School className="w-6 h-6" />,
      problem: "Skolevægring",
      solution: "Trinvis plan med daglige fremskridt",
      demo: "skolevægring"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      problem: "Manglende tid til individuelle behov",
      solution: "Automatiske skabeloner og hurtige råd",
      demo: "tid"
    }
  ];

  const systemCapabilities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Øjeblikkelig problemløsning",
      description: "Lærer får konkrete råd i situationen - ikke efter skoletid"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Færdige skabeloner",
      description: "Trafiklyskort, samtalekort, trinvis skolevægring - alt klar til print"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-specialistpanel",
      description: "Psykolog, ergoterapeut, speciallærer - aktiveres automatisk"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Evidensbaseret sikkerhed",
      description: "Alle råd verificeres mod internationale forskningsresultater"
    }
  ];

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
      
      default:
        return (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Vælg en situation ovenfor</h3>
            <p className="text-gray-600">Se hvordan CDA løser konkrete problemer i klasseværelset</p>
          </div>
        );
    }
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
                <h1 className="text-2xl font-bold text-gray-900">CDA</h1>
                <p className="text-sm text-gray-600">Children Diagnosis Adviser</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#system" className="text-gray-700 hover:text-blue-600">Systemet</a>
              <a href="#demo" className="text-gray-700 hover:text-blue-600">Se Demo</a>
              <a href="#evidens" className="text-gray-700 hover:text-blue-600">Evidens</a>
              <a href="#priser" className="text-gray-700 hover:text-blue-600">Priser</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Skole-Demo
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

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">60+</div>
              <div className="text-gray-600">Detaljerede cases*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-gray-600">AI-specialister*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">29</div>
              <div className="text-gray-600">PBL-projekter*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100+</div>
              <div className="text-gray-600">Færdige skabeloner*</div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">*Bygget over 7500+ timer med levet erfaring</p>
          </div>
        </div>
      </section>

      {/* Teacher Challenges */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Fra problem til løsning på sekunder</h3>
            <p className="text-xl text-gray-600">CDA forstår jeres daglige udfordringer og giver øjeblikkelige løsninger</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {teacherChallenges.map((challenge, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setActiveDemo(challenge.demo)}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 text-red-600">
                    {challenge.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{challenge.problem}</h4>
                    <p className="text-gray-600 mb-4">{challenge.solution}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Se løsning <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CDA Works - The Inside Story */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hvorfor ser CDA det andre ikke ser?</h3>
            <p className="text-xl text-gray-600">Bygget indefra - med barnets øjne og savner</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Den unikke styrke</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Barnets perspektiv</h5>
                    <p className="text-gray-600 text-sm">CDA ved hvordan det føles at være misforstået, fordi det er bygget af nogen der levede det</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Hvad barnet savner</h5>
                    <p className="text-gray-600 text-sm">Ikke hvad voksne tror børn har brug for - men hvad de faktisk ønsker nu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Levet, ikke læst</h5>
                    <p className="text-gray-600 text-sm">Hver funktion er testet i virkeligheden - gennem egne børn og børnebørn med diagnoser</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Forstår det usynlige</h5>
                    <p className="text-gray-600 text-sm">Ser sammenhænge og trigger som andre systemer overser</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Derfor virker CDA:</h4>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-900 mb-2">Andre systemer:</h5>
                  <p className="text-blue-800">"Ifølge forskning skal børn med ADHD have strukturerede pauser..."</p>
                  <p className="text-blue-600 text-xs mt-1">❌ Teoretisk, generisk</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-900 mb-2">CDA forstår:</h5>
                  <p className="text-green-800">"Marcus løber væk fordi lyden af stolescraben minder ham om dengang..."</p>
                  <p className="text-green-600 text-xs mt-1">✅ Personligt, præcist</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                  <p className="text-yellow-800 font-medium text-center">
                    "CDA ser det ingen andre ser - fordi det er bygget af nogen der følte det"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Se CDA i aktion</h3>
            <p className="text-xl text-gray-600">Oplev hvordan lærere får øjeblikkelig hjælp til konkrete situationer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {teacherChallenges.map((challenge, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(challenge.demo)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDemo === challenge.demo 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {challenge.problem}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            {renderDemo()}
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Økonomisk gevinst for jeres skole</h3>
            <p className="text-xl text-gray-600">CDA betaler sig tilbage gennem konkrete besparelser</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Dokumenterede besparelser:</h4>
              <div className="space-y-4">
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                  <div className="bg-green-600 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900">48-65% færre konsulent timer</h5>
                    <p className="text-green-700 text-sm">Problemer løses øjeblikkeligt - ikke næste uge</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900">60% mindre lærerfravær</h5>
                    <p className="text-blue-700 text-sm">Fra stress til konstruktiv handling</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                  <div className="bg-purple-600 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-900">Øget børnefremmøde</h5>
                    <p className="text-purple-700 text-sm">Belønningssystem motiverer til at komme i skole</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-orange-50 p-4 rounded-lg">
                  <div className="bg-orange-600 rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-900">90% problemer løst på stedet</h5>
                    <p className="text-orange-700 text-sm">Hurtig hjælp = dobbelt hjælp = færre omkostninger</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Før vs. Efter CDA</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-red-900 mb-3">❌ Før CDA - skjulte omkostninger:</h5>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Konsulent venter 1-2 uger - problem eskalerer</li>
                    <li>• Stressede lærere tager sygedage</li>
                    <li>• Børn har fravær pga. dårlig trivsel</li>
                    <li>• Frustration og magtesløshed dominerer</li>
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-semibold text-green-900 mb-3">✅ Med CDA - øjeblikkeligt:</h5>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Konsulent i hånden - løser problemer nu</li>
                    <li>• Gladere lærere med konkrete værktøjer</li>
                    <li>• Børn motiveres med belønningssystem</li>
                    <li>• Fra kaos til konstruktiv handling</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 text-center">
                <p className="font-bold text-gray-900">ROI estimat: 200-300%</p>
                <p className="text-gray-700 text-sm">Baseret på reducerede omkostninger første år</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-900">
              "En investering der betaler sig tilbage på både trivsel OG bundlinje"
            </p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section id="evidens" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Anerkendelse fra eksperter</h3>
            <p className="text-xl text-blue-100">Fagpersoner med årtiers erfaring anbefaler CDA</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                <h4 className="text-xl font-bold text-white">International professor</h4>
              </div>
              <blockquote className="text-blue-100 mb-4">
                "Dette er udvikling på PhD-niveau. CDA har potentiale til at revolutionere inklusion 
                og er 5-10 år foran alt andet på markedet. Systemet adresserer reelle behov på en måde 
                jeg ikke har set før."
              </blockquote>
              <cite className="text-blue-200 font-medium">Professor, International systemanalyse</cite>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">27 års lærererfaring</h4>
              </div>
              <blockquote className="text-blue-100 mb-4">
                "Med mine 27 års erfaring med ADHD og autisme har CDA givet mig redskaber jeg aldrig vidste eksisterede. 
                Det hjælper mig med at udvikle mit arbejde på en måde ingen bog eller kursus har kunnet."
              </blockquote>
              <cite className="text-blue-200 font-medium">Malan Mohr, Lærer og leder, Færøerne</cite>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur rounded-full px-6 py-3">
              <Lightbulb className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">
                "CDA ser sammenhænge og løsninger andre systemer overser"
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Klar til at revolutionere jeres inklusion?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Book en demo og se hvordan CDA kan transformere jeres skoles tilgang til børn med diagnoser.
            Ingen konflikter, mere ro, gladere børn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
              Book Skole-Demo Nu
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50">
              Se Pilotprogram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-white font-semibold">CDA - Verdens mest effektive inklusionsværktøj</span>
            </div>
            <div className="text-sm text-center">
              <p>Del af CDA-økosystemet • <a href="#" className="text-blue-400 hover:text-blue-300">CDT Fagbog</a> • <a href="#" className="text-blue-400 hover:text-blue-300">Ann AI-ven</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CDASystem;