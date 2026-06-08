import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search, Type, Palette, Layers, Globe, SlidersHorizontal, BookOpen, Scaling } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function ToolsDirectory() {
  const categories = ['All', 'Typography', 'Color Tools', 'Website Design', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    { name: 'Font Pairing Genius', desc: 'Generate beautiful typography combinations tailored to your industry.', icon: Type, cat: 'Typography', path: '/tools/font-pairing', status: 'live', featured: true },
    { name: 'Color Palette Generator', desc: 'Generate harmonic matches and preview interactive landing layouts.', icon: Palette, cat: 'Color Tools', path: '/tools/color-palette', status: 'live', featured: true },
    { name: 'Typography Scale Generator', desc: 'Create perfect CSS modular type scales for H1-H6 and body text.', icon: Scaling, cat: 'Typography', path: '/tools/type-scale', status: 'live', featured: true },
    { name: 'Font Comparison Tool', desc: 'Compare typography readability, personality, and use cases side-by-side.', icon: Layers, cat: 'Typography', path: '/tools/font-compare', status: 'live', featured: false },
    { name: 'Brand Style Guide Generator', desc: 'Automatically generate complete brand standards, tone of voice, and custom color rules.', icon: BookOpen, cat: 'Branding', path: '/tools/style-guide', status: 'live', featured: false },
    { name: 'AI Font Identifier', desc: 'Upload images to instantly detect matching serif, sans-serif, and display fonts.', icon: Search, cat: 'Typography', status: 'soon', featured: false },
    { name: 'Website Color Extractor', desc: 'Scan any public URL and build a custom palette from their production designs.', icon: Globe, cat: 'Color Tools', status: 'soon', featured: false },
    { name: 'Website Typography Analyzer', desc: 'Analyze real-world contrast ratios, sizing schedules, and line heights in seconds.', icon: SlidersHorizontal, cat: 'Website Design', status: 'soon', featured: false },
    { name: 'Logo Color Analyzer', desc: 'Upload vector assets and analyze the harmonic spectrum and focus weights.', icon: BookOpen, cat: 'Branding', status: 'soon', featured: false },
    { name: 'Design Inspiration Library', desc: 'Browse successful responsive layouts and font schedules curated weekly.', icon: Layers, cat: 'Website Design', status: 'soon', featured: false },
    { name: 'Accessibility Checker', desc: 'Ensure that your font contrast ratios meet standard WCAG 2.1 compliance rules.', icon: Scaling, cat: 'Website Design', status: 'soon', featured: false }
  ];

  const filteredTools = tools.filter(t => 
    (activeCategory === 'All' || t.cat === activeCategory) &&
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const liveTools = filteredTools.filter(t => t.status === 'live');
  const soonTools = filteredTools.filter(t => t.status === 'soon');
  const featuredTools = tools.filter(t => t.featured);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": tools.map((tool, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": tool.name,
              "description": tool.desc,
              "applicationCategory": "DesignApplication",
              "url": `https://app.creatlify.com${tool.path || '/tools'}`
            }
          }))
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">Free Design Tools Directory</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our growing ecosystem of lightweight, browser-based design utilities.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
             <Input 
               placeholder="Search tools..." 
               className="pl-10 h-12 rounded-full border-gray-200 bg-white"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
        </div>

        {/* Featured Tools (Only show when not searching/filtering heavily) */}
        {activeCategory === 'All' && searchQuery === '' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Utilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {featuredTools.map((tool, idx) => (
                 <Card key={idx} className="bg-white border-gray-200 shadow-sm overflow-hidden group hover:border-blue-200 transition-colors">
                   <CardContent className="p-0">
                      <div className="p-6 bg-gradient-to-br from-gray-50 to-white flex items-center justify-between border-b border-gray-100">
                         <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <tool.icon className="h-6 w-6" />
                         </div>
                         {tool.status === 'live' ? (
                           <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none shadow-none">Available</Badge>
                         ) : (
                           <Badge variant="outline" className="bg-white text-gray-500 border-gray-200">Coming Soon</Badge>
                         )}
                      </div>
                      <div className="p-6">
                         <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                         <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.desc}</p>
                         {tool.status === 'live' && (
                           <Link to={tool.path || '#'} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                             Launch Tool &rarr;
                           </Link>
                         )}
                      </div>
                   </CardContent>
                 </Card>
               ))}
            </div>
          </div>
        )}

        {/* Live Tools */}
        {liveTools.length > 0 && (
          <div className="mb-16">
             <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Available Tools</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {liveTools.map((tool, idx) => (
                 <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                   <Link to={tool.path || '#'}>
                     <div className="h-full group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-200">
                        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <tool.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.desc}</p>
                        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">Launch Tool &rarr;</div>
                     </div>
                   </Link>
                 </motion.div>
               ))}
             </div>
          </div>
        )}

        {/* Soon Tools */}
        {soonTools.length > 0 && (
          <div>
             <div className="mb-6 flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
                <div className="h-px flex-1 bg-gray-200" />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {soonTools.map((tool, idx) => (
                 <div key={idx} className="h-full rounded-2xl border border-dashed border-gray-300 bg-gray-50/50 p-6 opacity-80">
                    <Badge variant="outline" className="mb-4 text-gray-500 border-gray-300">In Development</Badge>
                    <h3 className="text-lg font-bold text-gray-500 mb-2 group-hover:text-gray-900">{tool.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{tool.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        )}
        
        {filteredTools.length === 0 && (
           <div className="py-20 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your category filter or search query.</p>
           </div>
        )}

      </div>
    </div>
  );
}
