import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { BookOpen, Sparkles, Copy, Check, MessageSquare, Palette, Type, Printer, Download, Eye, Terminal } from 'lucide-react';
import LogoImage from '../assets/images/creatlify_monogram_logo_1780927248375.png';

interface BrandStyleGuideResult {
  titleFont: string;
  bodyFont: string;
  bgFontFamily: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkColor: string;
  lightColor: string;
  voice: string;
  vibe: string;
  editorialRules: string[];
}

const BRAND_GUIDE_DB: Record<string, Record<string, BrandStyleGuideResult>> = {
  Technology: {
    Bold: {
      titleFont: 'Space Grotesk',
      bodyFont: 'Inter',
      bgFontFamily: '"Space Grotesk", sans-serif',
      primaryColor: '#7c3aed', // Purple
      secondaryColor: '#f43f5e', // Rose
      accentColor: '#3b82f6', // Blue
      darkColor: '#0f172a',
      lightColor: '#f8fafc',
      vibe: 'Cutting-edge hyper-modernity, high creative confidence, tech-forward authority.',
      voice: 'Direct, assertive, visionary, and hyper-transparent. Avoids passive marketing jargon.',
      editorialRules: [
        'Use simple, concrete nouns over conceptual flowery phrases.',
        'Adopt action verbs to emphasize technological velocity.',
        'Address the builder directly ("you") with high-energy instructions.'
      ]
    },
    Professional: {
      titleFont: 'Inter',
      bodyFont: 'Inter',
      bgFontFamily: 'sans-serif',
      primaryColor: '#1e3a8a', // Blue
      secondaryColor: '#0ea5e9', // Slate
      accentColor: '#10b981', // Green
      darkColor: '#0f172a',
      lightColor: '#f8fafc',
      vibe: 'Corporate absolute reliability, analytical safety, technological governance.',
      voice: 'Calm, expert-level, structural, composed. Speaks from a perspective of protective mastery.',
      editorialRules: [
        'Maintain a balanced, helpful declarative tone.',
        'Ground claims with analytical references or concrete metrics.',
        'Keep headings structured, logical, and clear of hype.'
      ]
    }
  },
  Fashion: {
    Elegance: {
      titleFont: 'Playfair Display',
      bodyFont: 'Lora',
      bgFontFamily: '"Playfair Display", Georgia, serif',
      primaryColor: '#1c1917', // Dark Grey
      secondaryColor: '#d97706', // Gold / Amber Accent
      accentColor: '#78716c', // Stone Grey
      darkColor: '#0c0a09',
      lightColor: '#fafaf9',
      vibe: 'Timeless luxury, bespoke artisanal heritage, minimal prestige.',
      voice: 'Poetic, highly sophisticated, exclusive. Speaks slowly and with artistic intention.',
      editorialRules: [
        'Focus on sensory description of material and aesthetics.',
        'Avoid shouting or exclamation marks strictly.',
        'Preserve wide visual breathing space and brief statements.'
      ]
    }
  },
  Education: {
    Playful: {
      titleFont: 'Montserrat',
      bodyFont: 'Inter',
      bgFontFamily: 'sans-serif',
      primaryColor: '#f43f5e', // Coral Pink
      secondaryColor: '#f59e0b', // Glowing Orange
      accentColor: '#6366f1', // Indigo Accent
      darkColor: '#1e1b4b',
      lightColor: '#fff1f2',
      vibe: 'Approachable youth, organic curiosity, dynamic inclusive growth.',
      voice: 'Warm, encouraging, enthusiastic, and curious. Emphasizes interactive discovery.',
      editorialRules: [
        'Adopt highly supportive, friendly introductory lines.',
        'Break complex subjects into narrative chunks or metaphors.',
        'Utilize active, positive reinforcement.'
      ]
    }
  }
};

const DEFAULT_GUIDE: BrandStyleGuideResult = {
  titleFont: 'Space Grotesk',
  bodyFont: 'Inter',
  bgFontFamily: '"Space Grotesk", sans-serif',
  primaryColor: '#7c3aed',
  secondaryColor: '#f43f5e',
  accentColor: '#3b82f6',
  darkColor: '#0f172a',
  lightColor: '#f8fafc',
  vibe: 'Cutting-edge hyper-modernity, high creative confidence, tech-forward authority.',
  voice: 'Direct, assertive, visionary, and hyper-transparent. Avoids passive marketing jargon.',
  editorialRules: [
    'Use simple, concrete nouns over conceptual flowery phrases.',
    'Adopt action verbs to emphasize technological velocity.',
    'Address the builder directly ("you") with high-energy instructions.'
  ]
};

export default function BrandStyleGuide() {
  const [brandName, setBrandName] = useState<string>('Creatlify');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Technology');
  const [selectedPersonality, setSelectedPersonality] = useState<string>('Bold');
  const [currentGuide, setCurrentGuide] = useState<BrandStyleGuideResult>(DEFAULT_GUIDE);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const industries = Object.keys(BRAND_GUIDE_DB);
  const personalitiesForIndustry = BRAND_GUIDE_DB[selectedIndustry]
    ? Object.keys(BRAND_GUIDE_DB[selectedIndustry])
    : ['Bold', 'Professional', 'Elegance', 'Playful'];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const matchIndustry = BRAND_GUIDE_DB[selectedIndustry];
      let newGuide = DEFAULT_GUIDE;

      if (matchIndustry) {
        if (matchIndustry[selectedPersonality]) {
          newGuide = matchIndustry[selectedPersonality];
        } else {
          const firstKey = Object.keys(matchIndustry)[0];
          newGuide = matchIndustry[firstKey];
        }
      }

      setCurrentGuide(newGuide);
      setIsGenerating(false);
    }, 800);
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedKey(hex);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Controls */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Identity Master</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Brand Style Guide</h1>
            <p className="text-gray-500 text-sm">Create comprehensive aesthetic directives, tone of voice blueprints, and colors from raw inputs.</p>
          </div>

          <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Brand/Product Name</label>
              <Input
                value={brandName}
                onChange={(e) => setBrandName(e.target.value || 'My Brand')}
                placeholder="e.g. Creatlify"
                className="h-11 rounded-xl border-gray-200 text-sm font-semibold text-gray-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Industry Sector</label>
              <select
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  const availablePersonalities = Object.keys(BRAND_GUIDE_DB[e.target.value] || {});
                  if (!availablePersonalities.includes(selectedPersonality)) {
                    setSelectedPersonality(availablePersonalities[0] || 'Bold');
                  }
                }}
                className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Identity Personality</label>
              <select
                value={selectedPersonality}
                onChange={(e) => setSelectedPersonality(e.target.value)}
                className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                {personalitiesForIndustry.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <Button
              className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md flex items-center justify-center font-bold"
              onClick={handleGenerate}
              isLoading={isGenerating}
            >
              {!isGenerating && (
                <span className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Generate Guide
                </span>
              )}
            </Button>
          </div>

          <Card className="bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-200/50">
            <CardContent className="p-5">
              <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-indigo-700 mb-3">
                <Sparkles className="h-4 w-4 mr-2" /> Complete Cohesion
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Brand style guides unify engineering and creative departments, ensuring consistent color values and content messaging across every interface.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Style Guide Output Canvas */}
        <div className="flex-1 space-y-8">
           {/* Guidelines Arena */}
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-3xl border border-gray-250 shadow-lg overflow-hidden relative"
             id="brand-guide-print-area"
           >
              {/* Cover Stripe */}
              <div 
                className="h-4 w-full" 
                style={{ backgroundColor: currentGuide.primaryColor }}
              />

              {/* Guide Header */}
              <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                 <div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                       {brandName}
                    </h2>
                    <div className="flex items-center gap-2">
                       <Badge variant="outline" className="text-gray-500">{selectedIndustry}</Badge>
                       <span className="text-gray-300">|</span>
                       <span className="text-sm text-gray-500 font-medium font-mono">Brand Identity Standards</span>
                    </div>
                 </div>

                 {/* Print Button mockup */}
                 <Button 
                   variant="outline" 
                   size="sm"
                   onClick={() => window.print()}
                   className="rounded-xl border-gray-200 text-gray-600 font-bold"
                 >
                    <Printer className="mr-2 h-4 w-4" /> Export / Print
                 </Button>
              </div>

              {/* Core Guide details */}
              <div className="p-8 md:p-12 space-y-12">
                 {/* 1. Brand personality block */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <h3 className="md:col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">
                       01. Personality Vibe
                    </h3>
                    <div className="md:col-span-9 space-y-2">
                       <p className="text-lg font-bold text-gray-900 leading-snug">{currentGuide.vibe}</p>
                    </div>
                 </div>

                 <hr className="border-gray-100" />

                 {/* 2. Color Palette Swatches */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <h3 className="md:col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">
                       02. Identity Colors
                    </h3>
                    <div className="md:col-span-9">
                       <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                          {[
                            { label: 'Primary Brand', hex: currentGuide.primaryColor },
                            { label: 'Secondary', hex: currentGuide.secondaryColor },
                            { label: 'Accent Highlight', hex: currentGuide.accentColor },
                            { label: 'Dark Charcoal', hex: currentGuide.darkColor },
                            { label: 'Cloud Neutral', hex: currentGuide.lightColor }
                          ].map((item, index) => (
                             <div key={index} className="rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm hover:border-gray-200 transition-colors">
                                <div 
                                  className="h-14 w-full relative cursor-pointer group"
                                  style={{ backgroundColor: item.hex }}
                                  onClick={() => copyHex(item.hex)}
                                >
                                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                      {copiedKey === item.hex ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4 text-white" />}
                                   </div>
                                </div>
                                <div className="p-3">
                                   <span className="text-[9px] font-bold text-gray-400 block truncate">{item.label}</span>
                                   <span className="font-mono text-[11px] font-black tracking-tight text-indigo-600">{item.hex}</span>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-100" />

                 {/* 3. Typography pairing recommendations */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <h3 className="md:col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">
                       03. Corporate Type
                    </h3>
                    <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                          <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">Recommended Heading Font</span>
                          <h4 className="text-3xl font-extrabold text-gray-900 mb-2 truncate" style={{ fontFamily: currentGuide.bgFontFamily }}>
                             {currentGuide.titleFont}
                          </h4>
                          <Badge variant="secondary">Display & Titles</Badge>
                       </div>
                       
                       <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                          <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">Recommended Body Font</span>
                          <h4 className="text-3xl font-bold text-gray-900 mb-2 truncate" style={{ fontFamily: 'Georgia, serif' }}>
                             {currentGuide.bodyFont}
                          </h4>
                          <Badge variant="secondary">Interface & Paragraph copy</Badge>
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-100" />

                 {/* 4. Tone of voice instructions */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <h3 className="md:col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">
                       04. Editorial Tone
                    </h3>
                    <div className="md:col-span-9 space-y-6">
                       <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Tone & Communication Identity</span>
                          <p className="text-base text-gray-700 leading-relaxed leading-normal">{currentGuide.voice}</p>
                       </div>

                       <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-3">Copywriting Directives</span>
                          <ul className="space-y-3">
                             {currentGuide.editorialRules.map((r, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                   <span className="h-5 w-5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mr-3 shrink-0">{i+1}</span>
                                   <span>{r}</span>
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </div>

                 <hr className="border-gray-100" />

                 {/* 5. Dynamic Brand Monogram Logo Showcase */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <h3 className="md:col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">
                       05. Brand Monogram
                    </h3>
                    <div className="md:col-span-9 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Live Vector Procedural Monogram */}
                          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                             <div>
                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-3">Procedural Monogram (Dynamic SVG)</span>
                                <div className="flex justify-center py-6 bg-white rounded-xl border border-gray-100 shadow-inner min-h-[160px] items-center">
                                   <svg viewBox="0 0 100 100" className="w-28 h-28" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.06))' }}>
                                      <defs>
                                         <linearGradient id="dyn-monogram-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor={currentGuide.primaryColor} />
                                            <stop offset="100%" stopColor={currentGuide.secondaryColor} />
                                         </linearGradient>
                                      </defs>
                                      {/* Technical design blueprint circles */}
                                      <circle cx="50" cy="50" r="44" stroke="url(#dyn-monogram-grad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                                      <circle cx="50" cy="50" r="38" stroke="url(#dyn-monogram-grad)" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.2" />
                                      {/* Star marker at coordinate */}
                                      <path d="M 50 16 L 52 20 L 56 20 L 53 22 L 54 26 L 50 24 L 46 26 L 47 22 L 44 20 L 48 20 Z" fill={currentGuide.secondaryColor} opacity="0.8" />
                                      
                                      {/* Centered monogram character */}
                                      <text 
                                         x="50" 
                                         y="64" 
                                         textAnchor="middle" 
                                         fill="url(#dyn-monogram-grad)" 
                                         fontSize="44" 
                                         fontWeight="900" 
                                         fontFamily={`${currentGuide.titleFont}, "Space Grotesk", sans-serif`}
                                         letterSpacing="-0.04em"
                                      >
                                         {brandName.trim().charAt(0).toUpperCase() || 'C'}
                                      </text>
                                   </svg>
                                </div>
                             </div>
                             <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-mono">Letter &lsquo;{brandName.trim().charAt(0).toUpperCase() || 'C'}&rsquo; Grid-Aligned</span>
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => {
                                     const svgString = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="${currentGuide.primaryColor}"/><stop offset="100%" stopColor="${currentGuide.secondaryColor}"/></linearGradient></defs><circle cx="50" cy="50" r="44" stroke="url(#g)" strokeWidth="1" strokeDasharray="3 3"/><text x="50" y="64" textAnchor="middle" fill="url(#g)" fontSize="44" fontWeight="900" fontFamily="sans-serif">${brandName.trim().charAt(0).toUpperCase() || 'C'}</text></svg>`;
                                     navigator.clipboard.writeText(svgString);
                                     alert('SVG Code copied to clipboard!');
                                  }}
                                  className="h-8 text-xs font-semibold"
                                >
                                   Copy SVG Code
                                </Button>
                             </div>
                          </div>

                          {/* Premium AI Monogram Asset */}
                          <div className="p-6 rounded-2xl bg-gray-50 border border-indigo-100/50 flex flex-col justify-between">
                             <div>
                                <div className="flex items-center justify-between mb-3">
                                   <span className="text-[10px] font-black uppercase tracking-wider text-indigo-500 flex items-center">
                                      <Sparkles className="h-3 w-3 mr-1" /> Premium Curated Monogram
                                   </span>
                                   <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 text-[9px] border-none">Active Asset</Badge>
                                </div>
                                <div className="flex justify-center py-4 bg-white rounded-xl border border-indigo-50/50 min-h-[160px] items-center relative overflow-hidden group">
                                   <img 
                                     src={LogoImage} 
                                     alt="Creatlify Handcrafted Monogram Logo"
                                     className="h-28 w-28 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
                                     referrerPolicy="no-referrer"
                                   />
                                </div>
                             </div>
                             <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs text-gray-500 font-semibold truncate leading-none">Designed Emblem Asset</span>
                                <a 
                                  href={LogoImage} 
                                  download="creatlify_monogram_logo.png"
                                  className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 h-8 px-3 rounded-lg hover:bg-indigo-50 transition-colors"
                                >
                                   <Download className="h-3.5 w-3.5 mr-1" /> Download PNG
                                </a>
                             </div>
                          </div>
                       </div>
                       
                       {/* SVG Logo Embedding Guideline snippet */}
                       <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                          <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono mb-3">
                             <Terminal className="h-4 w-4 text-indigo-400" />
                             <span>SVG Monogram Usage Guide</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed mb-1">
                             Use standard HTML or React vectors to embed this Monogram on your landing navbar or dashboard header for maximum crispness and zero layout shift.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
