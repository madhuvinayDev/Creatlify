import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Loader2, Palette, RefreshCw, Save, Share2, Type } from 'lucide-react';

export default function FontPairing() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pairing, setPairing] = useState<null | any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setPairing({
        heading: 'Playfair Display',
        body: 'Inter',
        subheading: 'Playfair Display Italic',
        reasoning: 'The high contrast and elegant serifs of Playfair Display create a luxurious feel, grounded by the exceptional legibility of Inter for body copy. Perfect for editorial, fashion, or premium SaaS.',
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Controls */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-8">
           <div>
             <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">AI Pairing</Badge>
             <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Font Pairing Genius</h1>
             <p className="text-gray-500 text-sm">Generate beautiful, harmonious typography combinations.</p>
           </div>

           <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                  {['SaaS', 'Startup', 'Agency', 'Ecommerce', 'Healthcare', 'Finance', 'Portfolio', 'Blog'].map(i =>(
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Design Style</label>
                <select className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                  {['Modern', 'Minimal', 'Luxury', 'Corporate', 'Creative', 'Bold'].map(i =>(
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleGenerate} isLoading={isGenerating}>
                 {!isGenerating && <span className="flex items-center"><Palette className="mr-2 h-5 w-5" /> Generate Pairing</span>}
              </Button>
           </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-50 border border-gray-100 rounded-3xl p-4 md:p-8 relative min-h-[600px] flex flex-col">
           {!pairing && !isGenerating && (
             <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="h-24 w-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6">
                   <Type className="h-10 w-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to mix & match</h3>
                <p className="text-gray-500 max-w-sm">Select your industry and style on the left, then click generate to craft your perfect pairing.</p>
             </div>
           )}

           {isGenerating && (
             <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Loader2 className="h-12 w-12 text-purple-600 animate-spin mb-4" />
                <h3 className="text-xl font-medium text-gray-900">Curating the perfect blend...</h3>
             </div>
           )}

           {pairing && !isGenerating && (
             <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                   <div className="flex items-center space-x-4">
                      <div className="text-sm">
                         <span className="text-gray-500 mr-2">Heading:</span>
                         <span className="font-semibold text-gray-900">{pairing.heading}</span>
                      </div>
                      <div className="text-gray-300">|</div>
                      <div className="text-sm">
                         <span className="text-gray-500 mr-2">Body:</span>
                         <span className="font-semibold text-gray-900">{pairing.body}</span>
                      </div>
                   </div>
                   <div className="flex space-x-2">
                     <Button variant="ghost" size="icon"><Save className="h-4 w-4 text-gray-500" /></Button>
                     <Button variant="ghost" size="icon"><Share2 className="h-4 w-4 text-gray-500" /></Button>
                   </div>
                </div>

                <div className="flex-1 p-10 md:p-16 overflow-y-auto">
                   <div className="max-w-3xl mx-auto space-y-12">
                      <div style={{ fontFamily: 'Georgia, serif' }}>
                         <Badge variant="outline" className="mb-6">{pairing.subheading}</Badge>
                         <h1 className="text-6xl md:text-8xl font-medium leading-tight tracking-tight text-gray-900 mb-8 max-w-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                            Design that demands attention.
                         </h1>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
                         <div className="md:col-span-4">
                            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4" style={{ fontFamily: 'sans-serif' }}>About the Pairing</h3>
                            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                               {pairing.reasoning}
                            </p>
                         </div>
                         <div className="md:col-span-8 space-y-6">
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif', fontWeight: 300 }}>
                               Typography is the foundation of digital design. A great pairing doesn't just read well; it sets the emotional tone for the entire experience.
                            </p>
                            <p className="text-base text-gray-500 leading-loose" style={{ fontFamily: 'sans-serif' }}>
                               By combining contrasting typographic elements—such as a commanding serif with a utilitarian sans-serif, or a geometric grotesque with a humanist italic—designers can establish clear visual hierarchy, guide user attention, and build trust seamlessly.
                            </p>
                            
                            <div className="flex gap-4 pt-4">
                               <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">Primary Action</Button>
                               <Button variant="outline" size="lg">Secondary</Button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           )}
        </div>
      </div>
    </div>
  );
}