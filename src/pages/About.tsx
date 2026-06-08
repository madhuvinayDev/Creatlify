import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Target, Lightbulb, Users, ArrowRight, Zap, Target as TargetIcon, Flag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-50/50 py-24 sm:py-32 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl max-w-4xl mx-auto mb-6">
            Empowering Modern Creators with AI
          </h1>
          <p className="text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Creatlify is bridging the gap between raw ideas and professional execution by providing an ecosystem of AI-powered design tools.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                 <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><TargetIcon className="h-6 w-6" /></div>
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                To democratize professional design decisions with lightweight, browser-based tools. We believe that stunning, highly-effective design shouldn't require complex software setups or expensive subscriptions. Our free utilities are built to eliminate guesswork and speed up the creative workflow.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                 <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Lightbulb className="h-6 w-6" /></div>
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                To become the industry standard utility belt for visual creators. We envision a future where designers, developers, and marketers use Creatlify as their first step in brand creation, typography selection, and UI strategy.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                 <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Flag className="h-6 w-6" /></div>
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Creatlify Exists</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                Typography and color theory are historically difficult subjects that drastically impact the success of a digital product. Creatlify exists to turn those complex, subjective decisions into fast, easy-to-use, frontend tools that require zero setup and zero configuration. Just jump in and design.
              </p>
            </section>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
               <div className="p-2 bg-gray-900 text-white rounded-lg"><Users className="h-6 w-6" /></div>
               <h2 className="text-2xl font-bold tracking-tight text-gray-900">Who We Serve</h2>
            </div>
            
            <ul className="space-y-6">
               {[
                 { title: 'Designers', desc: 'Speed up client work, identify inspirations from the wild, and generate technical pairings.' },
                 { title: 'Developers & Indie Hackers', desc: 'Build better looking SaaS apps without needing to hire a dedicated UI/UX designer.' },
                 { title: 'Agencies', desc: 'Create cohesive brand style guides and maintain consistency across unlimited client projects.' },
                 { title: 'Content Creators', desc: 'Establish professional typography for thumbnails, assets, and personal brand setups.' }
               ].map((item, idx) =>(
                 <li key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mt-32 pt-16 border-t border-gray-100">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Product Roadmap</h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">We are rapidly expanding our ecosystem of free design utilities.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <Card className="bg-blue-50 border-blue-100 shadow-none relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10"><Zap className="h-24 w-24 text-blue-500"/></div>
                 <CardContent className="p-8 relative z-10">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Phase 1 (Current)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Core Utilities</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                       <li className="flex items-center">✓ Font Pairing Genius</li>
                       <li className="flex items-center">✓ Color Palette Generator</li>
                       <li className="flex items-center">✓ Browser-Based Execution</li>
                    </ul>
                 </CardContent>
               </Card>
               
               <Card className="shadow-none relative overflow-hidden">
                 <CardContent className="p-8 relative z-10">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phase 2 (Upcoming)</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Typography Ecosystem</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                       <li className="flex items-center px-1">Typography Scale Generator</li>
                       <li className="flex items-center px-1">Font Comparison Tool</li>
                       <li className="flex items-center px-1">Google Fonts Explorer</li>
                    </ul>
                 </CardContent>
               </Card>

               <Card className="bg-gray-50 shadow-none border-dashed border-gray-200 relative overflow-hidden">
                 <CardContent className="p-8 relative z-10">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phase 3</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Branding & Audits</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                       <li className="flex items-center px-1">Brand Style Guide Generator</li>
                       <li className="flex items-center px-1">Website Typography Advisor</li>
                    </ul>
                 </CardContent>
               </Card>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center bg-gray-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Start Building Better Designs Today</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Join thousands of creators who are using AI to make faster, more professional design decisions.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link to="/tools">
                   <Button size="lg" className="rounded-xl h-14 px-8 text-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-700 border-none">
                     Explore Design Tools
                   </Button>
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
