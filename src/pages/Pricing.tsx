import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">Simple utilities, completely free.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Creatlify is a growing suite of lightweight design utilities. Explore our browser-based tools without any signup or subscriptions required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Free Plan */}
           <Card className="border-gray-200 shadow-sm relative overflow-hidden flex flex-col h-full">
              <CardContent className="p-8 md:p-12 flex flex-col h-full">
                 <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Tools</h3>
                    <p className="text-gray-500">Perfect for making quick design decisions.</p>
                 </div>
                 <div className="mb-8">
                    <span className="text-5xl font-black text-gray-900">$0</span>
                    <span className="text-gray-500 font-medium">/forever</span>
                 </div>
                 
                 <ul className="space-y-4 mb-10 flex-1">
                    {[
                      'Font Pairing Genius',
                      'No Account Required',
                      'Unlimited Usage',
                      'Browser-based generation',
                      'Export CSS/Tailwind variables'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                         <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                         <span>{feature}</span>
                      </li>
                    ))}
                 </ul>
                 
                 <Link className="w-full" to="/tools">
                   <Button className="w-full h-12 text-lg">Explore Free Tools</Button>
                 </Link>
              </CardContent>
           </Card>

           {/* Pro Plan (Coming Soon) */}
           <Card className="border-gray-200 bg-gray-50 text-gray-400 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 p-8"><Zap className="h-10 w-10 text-gray-200" /></div>
              <CardContent className="p-8 md:p-12 flex flex-col h-full">
                 <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Coming In 2027</div>
                    <h3 className="text-2xl font-bold text-gray-500 mb-2">Pro Ecosystem</h3>
                    <p className="text-gray-400">Advanced professional features for teams.</p>
                 </div>
                 <div className="mb-8">
                    <span className="text-5xl font-black text-gray-400">TBD</span>
                 </div>
                 
                 <ul className="space-y-4 mb-10 flex-1">
                    {[
                      'Complete Brand Style Guide Generator',
                      'Figma Plugin Integration',
                      'Cloud saves & team syncing',
                      'Accessibility Audit Suite',
                      'Website Typography Advisor'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                         <CheckCircle2 className="h-5 w-5 text-gray-300 mr-3 shrink-0" />
                         <span>{feature}</span>
                      </li>
                    ))}
                 </ul>
                 
                 <Button variant="outline" className="w-full h-12 text-lg border-gray-300 text-gray-400 hover:bg-transparent" disabled>
                   Available Soon
                 </Button>
              </CardContent>
           </Card>
        </div>

        {/* FAQ about Pricing */}
        <div className="mt-32 max-w-3xl mx-auto">
           <h3 className="text-2xl font-bold text-center mb-12">Frequent Questions</h3>
           <div className="space-y-8">
              <div>
                 <h4 className="text-lg font-bold text-gray-900 mb-2">Do I need an account to use the tools?</h4>
                 <p className="text-gray-600">No, all currently available tools are entirely browser-based and do not require any signup or login.</p>
              </div>
              <div>
                 <h4 className="text-lg font-bold text-gray-900 mb-2">Are there API limits?</h4>
                 <p className="text-gray-600">Our free suite operates purely on the frontend, meaning there are no backend API calls or limits attached to your usage. You can experiment as much as you like.</p>
              </div>
              <div>
                 <h4 className="text-lg font-bold text-gray-900 mb-2">Will the free tools always be free?</h4>
                 <p className="text-gray-600">Yes, the basic utility tools launching today will remain free. We plan to introduce a professional suite of tools later for agencies and teams that will carry a price point.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
