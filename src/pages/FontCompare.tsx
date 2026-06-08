import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Layers, HelpCircle, Columns, Sparkles, BookOpen, AlertCircle, Quote } from 'lucide-react';

interface FontDetails {
  family: string;
  category: string;
  readability: string;
  personality: string;
  useCases: string;
  xHeight: string;
  contrast: string;
  fallbackFamily: string;
}

const FONTS_DB: Record<string, FontDetails> = {
  'Inter': {
    family: 'Inter',
    category: 'Humanist Sans-Serif',
    readability: '9.8 / 10 (Outstanding)',
    personality: 'Neutral, highly professional, clean, utilitarian',
    useCases: 'SaaS interfaces, mobile app dashboards, heavy copy paragraphs, developer portals.',
    xHeight: 'Tall (creates exceptional readability)',
    contrast: 'Low (excellent for continuous reading)',
    fallbackFamily: 'ui-sans-serif, system-ui, sans-serif'
  },
  'Playfair Display': {
    family: 'Playfair Display',
    category: 'Transitional Serif',
    readability: '7.5 / 10 (Best for big headings only)',
    personality: 'Elegant, luxurious, scholarly, editorial',
    useCases: 'Fashion headlines, high-end editorial portals, portfolio titles, food & hotel design.',
    xHeight: 'Normal-tall',
    contrast: 'Very High (extremely elegant at scale)',
    fallbackFamily: 'Georgia, serif'
  },
  'Space Grotesk': {
    family: 'Space Grotesk',
    category: 'Geometric Grotesque',
    readability: '8.8 / 10 (Good for UI & Subheadings)',
    personality: 'Tech-forward, brutally clean, quirky, modern',
    useCases: 'Crypto tools, modern tech startups, developer portfolios, technical banners.',
    xHeight: 'High',
    contrast: 'Minimal (flat, sleek geometric stems)',
    fallbackFamily: 'sans-serif'
  },
  'JetBrains Mono': {
    family: 'JetBrains Mono',
    category: 'Monospace',
    readability: '8.5 / 10 (Excellent for technical data)',
    personality: 'Precise, logical, computational, clean',
    useCases: 'Code blocks, pricing tables, logs, analytics cards, design statistics.',
    xHeight: 'High',
    contrast: 'Balanced (deliberate readability stems)',
    fallbackFamily: 'monospace'
  },
  'Lora': {
    family: 'Lora',
    category: 'Contemporary Serif',
    readability: '9.4 / 10 (Excellent long-form)',
    personality: 'Warm, humanist, literary, cozy, trustworthy',
    useCases: 'Digital blogs, online journals, long informational essays, newsletters.',
    xHeight: 'Tall',
    contrast: 'Medium-low (soft round serifs for light contrast)',
    fallbackFamily: 'Georgia, serif'
  },
  'Montserrat': {
    family: 'Montserrat',
    category: 'Geometric Sans-Serif',
    readability: '9.0 / 10 (Highly versatile)',
    personality: 'Chic, structural, authoritative, circular',
    useCases: 'Real estate websites, marketing headings, product cards, retail visual banners.',
    xHeight: 'Normal',
    contrast: 'Low (wide, stable architectural letters)',
    fallbackFamily: 'sans-serif'
  }
};

export default function FontCompare() {
  const [fontA, setFontA] = useState<string>('Space Grotesk');
  const [fontB, setFontB] = useState<string>('Inter');
  const [customText, setCustomText] = useState<string>('Creatlifiers assemble to build perfect designs.');
  const [fontSize, setFontSize] = useState<number>(32);

  const dataA = FONTS_DB[fontA] || FONTS_DB['Space Grotesk'];
  const dataB = FONTS_DB[fontB] || FONTS_DB['Inter'];

  // Dynamically load selected fonts via @import inside JSX is fine, or we can use default web safes as fallback
  // The system guidelines state that we can import these fonts inside src/index.css or let standard styles process.
  // To ensure the preview works beautiful, we will inline standard styles with fontFamily settings.

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Side-by-Side Arena</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">Font Comparison Tool</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Compare typography personality, readability metrics, and layout parameters head-to-head.</p>
      </div>

      {/* Control Workspace Card */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="md:col-span-2">
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Compare Custom Text</label>
               <Input 
                 placeholder="Type test sequence..."
                 value={customText}
                 onChange={(e) => setCustomText(e.target.value || 'Creatlifiers assemble to build perfect designs.')}
                 className="h-11 rounded-xl font-medium border-gray-200 focus:ring-purple-500"
               />
            </div>
            <div>
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Preview Font Size</label>
               <div className="flex items-center space-x-2">
                  <input 
                    type="range"
                    min="16"
                    max="72"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full accent-purple-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <span className="text-xs font-bold text-gray-500 shrink-0">{fontSize}px</span>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-1/2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Font A</label>
                  <select
                    value={fontA}
                    onChange={(e) => setFontA(e.target.value)}
                    className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
                  >
                     {Object.keys(FONTS_DB).map(f => (
                       <option key={f} value={f}>{f}</option>
                     ))}
                  </select>
               </div>
               <div className="w-1/2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Font B</label>
                  <select
                    value={fontB}
                    onChange={(e) => setFontB(e.target.value)}
                    className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
                  >
                     {Object.keys(FONTS_DB).map(f => (
                       <option key={f} value={f}>{f}</option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
      </div>

      {/* Arena Comparer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
         {/* Font A Canvas */}
         <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full hover:border-purple-200 transition-colors">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
               <div className="flex items-center space-x-2">
                  <Badge className="bg-purple-100 text-purple-700">FONT A</Badge>
                  <span className="font-extrabold text-gray-900">{fontA}</span>
               </div>
               <span className="text-xs font-mono text-gray-400">{dataA.category}</span>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-center min-h-[220px]" style={{ fontFamily: dataA.fallbackFamily }}>
               <p style={{ fontSize: `${fontSize}px` }} className="text-gray-950 font-normal leading-tight tracking-tight break-words">
                  {customText}
               </p>
            </div>

            <div className="p-6 bg-gray-50/50 border-t border-gray-100 space-y-4">
               <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Readability Rating</h4>
                  <p className="text-sm font-semibold text-gray-900">{dataA.readability}</p>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Stylistic Personality</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{dataA.personality}</p>
               </div>
            </div>
         </div>

         {/* Font B Canvas */}
         <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full hover:border-purple-200 transition-colors">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
               <div className="flex items-center space-x-2">
                  <Badge className="bg-purple-100 text-purple-700">FONT B</Badge>
                  <span className="font-extrabold text-gray-900">{fontB}</span>
               </div>
               <span className="text-xs font-mono text-gray-400">{dataB.category}</span>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-center min-h-[220px]" style={{ fontFamily: dataB.fallbackFamily }}>
               <p style={{ fontSize: `${fontSize}px` }} className="text-gray-950 font-normal leading-tight tracking-tight break-words">
                  {customText}
               </p>
            </div>

            <div className="p-6 bg-gray-50/50 border-t border-gray-100 space-y-4">
               <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Readability Rating</h4>
                  <p className="text-sm font-semibold text-gray-900">{dataB.readability}</p>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Stylistic Personality</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{dataB.personality}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Structural Metric Comparison Matrix */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Structural Metric Matrix</h2>
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-12">
         <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 py-4 px-6 md:px-8">
            <div>Style Attribute</div>
            <div className="mt-2 md:mt-0">{fontA} (A)</div>
            <div className="mt-2 md:mt-0">{fontB} (B)</div>
         </div>

         {[
           { attr: 'Structural Class', valA: dataA.category, valB: dataB.category },
           { attr: 'Relative x-Height', valA: dataA.xHeight, valB: dataB.xHeight },
           { attr: 'Stroke Contrast Ratio', valA: dataA.contrast, valB: dataB.contrast },
           { attr: 'Target Use Environments', valA: dataA.useCases, valB: dataB.useCases }
         ].map((row, idx) => (
           <div key={idx} className="grid grid-cols-1 md:grid-cols-3 border-b last:border-0 border-gray-100 py-5 px-6 md:px-8 items-start hover:bg-gray-50/50 transition-colors">
              <div className="font-bold text-gray-900 text-sm">{row.attr}</div>
              <div className="text-gray-600 text-sm mt-1 md:mt-0 leading-relaxed pr-4">{row.valA}</div>
              <div className="text-gray-600 text-sm mt-1 md:mt-0 leading-relaxed pr-4">{row.valB}</div>
           </div>
         ))}
      </div>

      {/* Professional Advice Card */}
      <Card className="bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border-purple-200/50">
         <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
               <Quote className="h-6 w-6" />
            </div>
            <div>
               <h3 className="text-sm font-black uppercase tracking-widest text-purple-700 mb-1">Aesthetic Recommendation</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                  When matching a high-contrast serif structure with a neutral humanist sans-serif, always pair the serif exclusively for leading headlines above 32px, allowing the sans-serif to resolve smaller body elements to prevent fatigue on prolonged user scans.
               </p>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
