import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight, Type, Zap, CheckCircle2, 
  Palette, SlidersHorizontal, Moon, Shield, ChevronDown, 
  Layers, Globe, Scaling, BookOpen
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need an account to use Creatlify?",
      answer: "No. All of our current tools run entirely in your browser. There is no signup required, no login, and no passwords to remember."
    },
    {
      question: "Are the tools really free?",
      answer: "Yes, our core suite of design utilities—including Font Pairing Genius and the Color Palette Generator—are 100% free to use."
    },
    {
      question: "Can I use Google Fonts?",
      answer: "Absolutely. Our utilities are tightly integrated with the Google Fonts library, helping you discover and pair high-quality open-source fonts for your projects."
    },
    {
      question: "How does Font Pairing Genius work?",
      answer: "It uses pre-defined heuristic rules based on professional design principles (like x-height contrast, serif/sans-serif pairing, and geometric alignment) to generate beautiful combinations."
    },
    {
      question: "Are you adding new tools?",
      answer: "Yes! Creatlify is an actively growing ecosystem. We are continuously building and launching new browser-based utilities for designers, developers, and marketers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-purple-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8"
          >
            Free Design Tools for Modern Creators
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Discover perfect typography pairings, generate color palettes, and build stronger visual identities with our lightweight, browser-based utilities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/tools/font-pairing">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl">
                Try Font Pairing Genius <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl border-2">
                Explore All Tools
              </Button>
            </Link>
          </motion.div>

          {/* New Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 relative mx-auto max-w-4xl group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="rounded-2xl border border-gray-200/50 bg-white/80 p-2 lg:p-3 shadow-2xl backdrop-blur-xl ring-1 ring-gray-900/5 relative">
              <div className="rounded-xl border border-gray-200/80 bg-white overflow-hidden relative shadow-md">
                 <div className="bg-gray-50/80 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                       <CheckCircle2 className="h-5 w-5 text-purple-600" />
                       <span className="font-semibold text-gray-900">Font Pairing Successful</span>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">SaaS Industry</Badge>
                 </div>
                 <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/40 to-transparent"></div>
                          <div className="relative text-left w-full">
                             <div className="text-[4rem] font-bold text-white leading-tight mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Build faster,<br/>scale further.</div>
                             <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>The right typography combination establishes trust instantly.</p>
                          </div>
                       </div>
                       
                       <div className="flex flex-col justify-center">
                          <p className="text-sm font-medium text-gray-500 mb-1">Heading Font</p>
                          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Space Grotesk</h3>
                          <Badge variant="outline" className="mb-6 w-fit">Google Fonts</Badge>

                          <p className="text-sm font-medium text-gray-500 mb-1">Body Font</p>
                          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Inter</h3>
                          <Badge variant="outline" className="mb-6 w-fit">Google Fonts</Badge>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                'Built for Designers',
                'Built for Developers',
                'Built for Agencies',
                'Built for Creators'
              ].map((label, idx) => (
                <div key={idx} className="flex items-center text-gray-500 font-medium">
                   <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2" />
                   {label}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">See Creatlify in Action</h2>
             <p className="mt-4 text-lg text-gray-600">Experience our flagship tools through these interactive demos.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo 1: Font Pairing */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                 <div className="flex items-center mb-6">
                   <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-4">
                     <Type className="h-5 w-5" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Font Pairing Genius</h3>
                 </div>
                 
                 <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 shadow-sm ring-1 ring-gray-900/5">
                    <div className="px-6 py-4 border-b border-gray-100 flex gap-4 bg-gray-50/80 backdrop-blur-sm">
                       <Badge variant="outline" className="bg-white">Industry: SaaS</Badge>
                       <Badge variant="outline" className="bg-white">Style: Modern</Badge>
                    </div>
                    <div className="p-6">
                       <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                          <div>
                             <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Heading</p>
                             <p className="font-semibold text-gray-900">Space Grotesk</p>
                          </div>
                          <div className="text-gray-300">|</div>
                          <div className="text-right">
                             <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Body</p>
                             <p className="font-semibold text-gray-900">Inter</p>
                          </div>
                       </div>
                       
                       <div className="py-2">
                          <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Build faster, scale further.</h4>
                          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                             The right typography combination establishes trust instantly. Space Grotesk provides a technical edge, while Inter ensures maximum legibility.
                          </p>
                       </div>
                    </div>
                 </div>
                 <Link to="/tools/font-pairing">
                   <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-md">Generate Font Pairings</Button>
                 </Link>
              </div>

              {/* Demo 2: Color Palette Generator Preview */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                 <div className="flex items-center mb-6">
                   <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                     <Palette className="h-5 w-5" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Color Palette Generator</h3>
                 </div>
                 
                 <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 shadow-sm ring-1 ring-gray-900/5">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm font-medium text-gray-700">Theme: Modern Finance</div>
                    <div className="p-6">
                       <div className="grid grid-cols-5 gap-2 h-32 rounded-xl overflow-hidden mb-4">
                          <div className="bg-[#0f172a] group relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity"><span className="text-white text-xs font-mono">#0f172a</span></div>
                          </div>
                          <div className="bg-[#334155] group relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity"><span className="text-white text-xs font-mono">#334155</span></div>
                          </div>
                          <div className="bg-[#3b82f6] group relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity"><span className="text-white text-xs font-mono">#3b82f6</span></div>
                          </div>
                          <div className="bg-[#93c5fd] group relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity"><span className="text-black text-xs font-mono">#93c5fd</span></div>
                          </div>
                          <div className="bg-[#f8fafc] group relative border-l border-gray-100">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity"><span className="text-black text-xs font-mono">#f8fafc</span></div>
                          </div>
                       </div>
                       
                       <div className="flex gap-2 font-medium text-sm text-gray-600">
                          <span className="px-3 py-1 bg-gray-100 rounded-md">Primary</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-md">Secondary</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-md">Accent</span>
                       </div>
                    </div>
                 </div>
                 <Link to="/tools/color-palette">
                   <Button variant="outline" className="w-full bg-white shadow-sm hover:bg-gray-50 border-gray-200">Launch Color Palette Generator</Button>
                 </Link>
              </div>
           </div>

           <div className="mt-12 text-center">
             <Link to="/tools">
               <Button size="lg" className="rounded-xl h-12">
                 Explore All Tools <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Creatlify?</h2>
             <p className="mt-4 text-lg text-gray-400">Designed to eliminate guesswork and speed up your creative workflow without getting in your way.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'No Account Required', desc: 'Jump straight into the tools. We respect your time and don\'t force you through unnecessary sign-up flows.' },
                { icon: Layers, title: 'Smart Font Pairing', desc: 'Stop guessing which fonts look good together. Let our algorithms find the perfect matches.' },
                { icon: Globe, title: 'Google Fonts Ready', desc: 'Easily match and export font combinations that are readily available on Google Fonts.' },
                { icon: Shield, title: 'Privacy Focused', desc: 'Everything runs in your browser. We don\'t track your design choices or upload your assets to hidden servers.' },
                { icon: Scaling, title: 'Workflow Optimization', desc: 'Reduce the hours spent searching for the right typefaces and color pallets.' },
                { icon: CheckCircle2, title: 'Fast Visual Decisions', desc: 'Make confident design choices backed by data and professional design principles.' }
              ].map((benefit, idx) => (
                 <div key={idx} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <benefit.icon className="h-8 w-8 text-blue-400 mb-5" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                 </div>
              ))}
           </div>

           <div className="mt-16 text-center">
               <Link to="/tools/font-pairing">
                 <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 rounded-xl h-12 px-8">
                   Try Font Pairing Genius
                 </Button>
               </Link>
           </div>
        </div>
      </section>

      {/* Upcoming Tools Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">A Growing Utility Ecosystem</h2>
                <p className="text-lg text-gray-600">Explore our browser-based design tools designed to eliminate friction. Ready when you are with zero setup.</p>
              </div>
              <div>
                 <Link to="/tools">
                   <Button variant="outline">View Tools Directory &rarr;</Button>
                 </Link>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Color Palette Generator', desc: 'Generate custom color spaces and preview landing mockups.', icon: Palette, path: '/tools/color-palette', isLive: true },
                { name: 'Typography Scale', desc: 'Create flawless CSS modular font size variables.', icon: Scaling, path: '/tools/type-scale', isLive: true },
                { name: 'Font Comparer', desc: 'Analyse personality and legibility scores side-by-side.', icon: Layers, path: '/tools/font-compare', isLive: true },
                { name: 'Brand Style Guide', desc: 'Build stylebooks detailing custom colors, type, and tones.', icon: BookOpen, path: '/tools/style-guide', isLive: true }
              ].map((tool, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-blue-300 transition-colors">
                    <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-none">Active Tool</Badge>
                    <tool.icon className="h-6 w-6 text-blue-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link to={tool.path} className="text-sm font-bold text-blue-600 hover:text-blue-700">Launch Utility &rarr;</Link>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                     className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left font-bold text-gray-900"
                   >
                      {faq.question}
                      <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>
                     {openFaq === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                       >
                          <div className="px-6 pb-5 pt-1 text-gray-600 bg-white">
                             {faq.answer}
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
             <Link to="/contact">
                <Button variant="outline" className="rounded-xl h-12 px-8 text-gray-600">Have more questions? Contact us.</Button>
             </Link>
           </div>
        </div>
      </section>
      
    </div>
  );
}
