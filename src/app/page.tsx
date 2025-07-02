'use client'

import { useState } from 'react'

export default function Page() {
  const [language, setLanguage] = useState<'da' | 'en'>('da')

  const switchLanguage = (lang: 'da' | 'en') => {
    setLanguage(lang)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border">
          <div className="flex items-center gap-1">
            <button
              onClick={() => switchLanguage('da')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'da' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Dansk
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'en' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'da' ? 'Children Diagnosis Adviser' : 'Children Diagnosis Adviser'}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              {language === 'da' 
                ? 'Verdens første komplette AI-baserede specialpædagogiske operativsystem'
                : 'World\'s first complete AI-based special education operating system'
              }
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg">
              {language === 'da' ? 'Book Gratis Info-møde' : 'Book Free Info Meeting'}
            </button>
          </div>
        </div>
      </div>

      {/* Simple Message */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'da' ? 'Test Version' : 'Test Version'}
          </h2>
          <p className="text-lg text-gray-700">
            {language === 'da' 
              ? 'Dette er en minimal testversion for at identificere mobile problemer.'
              : 'This is a minimal test version to identify mobile issues.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}