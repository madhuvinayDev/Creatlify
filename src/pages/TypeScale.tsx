import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Copy, Check, Sliders, Type, ArrowUpRight, ZoomIn, TextCursorInput } from 'lucide-react';

interface RatioItem {
  name: string;
  value: number;
  label: string;
}

const RATIOS: RatioItem[] = [
  { name: 'Minor Second', value: 1.067, label: '1.067 (Mild Contrast)' },
  { name: 'Major Second', value: 1.125, label: '1.125 (Clean / Corporate)' },
  { name: 'Minor Third', value: 1.200, label: '1.200 (Excellent for Mobile)' },
  { name: 'Major Third', value: 1.250, label: '1.250 (Classic Editorial)' },
  { name: 'Perfect Fourth', value: 1.333, label: '1.333 (Dynamic Digital)' },
  { name: 'Augmented Fourth', value: 1.414, label: '1.414 (High Tension)' },
  { name: 'Perfect Fifth', value: 1.500, label: '1.500 (Dramatic Contrast)' },
  { name: 'Golden Ratio', value: 1.618, label: '1.618 (The Divine Proportion)' }
];

export default function TypeScale() {
  const [baseSize, setBaseSize] = useState<number>(16);
  const [selectedRatio, setSelectedRatio] = useState<number>(1.25); // Major Third default
  const [sampleText, setSampleText] = useState<string>('Designing beautiful experiences');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const calculateSize = (step: number): number => {
    return Math.round(baseSize * Math.pow(selectedRatio, step) * 10) / 10;
  };

  const getRemValue = (px: number): number => {
    return Math.round((px / 16) * 1000) / 1000;
  };

  const scaleSteps = [
    { step: 4, name: 'h1', label: 'H1 - Hero Display' },
    { step: 3, name: 'h2', label: 'H2 - Main Section Title' },
    { step: 2, name: 'h3', label: 'H3 - Subsection Title' },
    { step: 1, name: 'h4', label: 'H4 - Card Title' },
    { step: 0, name: 'p', label: 'Body Text (Base Size)' },
    { step: -1, name: 'small', label: 'Small Caption Text' },
    { step: -2, name: 'xs', label: 'Micro Accent Text' }
  ];

  const handleCopy = (cssValue: string, key: string) => {
    navigator.clipboard.writeText(cssValue);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getTailwindThemeConfig = () => {
    return `// tailwind.config.js theme settings
theme: {
  fontSize: {
    'xs': '${getRemValue(calculateSize(-2))}rem',       // ${calculateSize(-2)}px
    'sm': '${getRemValue(calculateSize(-1))}rem',       // ${calculateSize(-1)}px
    'base': '${getRemValue(calculateSize(0))}rem',      // ${calculateSize(0)}px
    'lg': '${getRemValue(calculateSize(1))}rem',        // ${calculateSize(1)}px
    'xl': '${getRemValue(calculateSize(2))}rem',        // ${calculateSize(2)}px
    '2xl': '${getRemValue(calculateSize(3))}rem',       // ${calculateSize(3)}px
    '3xl': '${getRemValue(calculateSize(4))}rem',       // ${calculateSize(4)}px
  }
}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Step Controls */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Layout Math</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Typography Scale Generator</h1>
            <p className="text-gray-500 text-sm">Compute flawless relative heading ratios derived from mathematical harmony.</p>
          </div>

          <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Base Font Size (px)</label>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  min="12"
                  max="32"
                  value={baseSize}
                  onChange={(e) => setBaseSize(Math.max(12, parseInt(e.target.value) || 16))}
                  className="h-11 rounded-xl font-semibold text-gray-900 border-gray-200"
                />
                <span className="text-sm font-bold text-gray-400">px</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Scale Ratio</label>
              <select
                value={selectedRatio}
                onChange={(e) => setSelectedRatio(parseFloat(e.target.value))}
                className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                {RATIOS.map((r) => (
                  <option key={r.name} value={r.value}>{r.name} — {r.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Custom Test Text</label>
              <div className="relative">
                <TextCursorInput className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Test text..."
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value || 'Designing beautiful experiences')}
                  className="pl-10 h-11 rounded-xl border-gray-200 text-sm"
                />
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-200/50">
            <CardContent className="p-5">
              <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-blue-700 mb-3">
                <Sliders className="h-4 w-4 mr-2" /> What is Modular Scale?
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                By multiplying a single base size with a consistent multiplier ratio, you ensure that every heading step feels architecturally aligned and visually proportioned on any resolution container.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dynamic Scale List & Live Visuals */}
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
               <div>
                  <h2 className="text-xl font-bold text-gray-900">Current Computed Scale</h2>
                  <p className="text-sm text-gray-500">Modular ratio: <span className="font-semibold text-blue-600">{selectedRatio}</span></p>
               </div>
               <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50">7 Responsive Steps</Badge>
            </div>

            <div className="space-y-8">
              {scaleSteps.map(({ step, name, label }) => {
                const pxSize = calculateSize(step);
                const remSize = getRemValue(pxSize);
                const uniqueKey = `step-${step}`;

                return (
                  <div key={step} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-gray-100/60 last:border-b-0 last:pb-0" id={`scale-step-${step}`}>
                    <div className="w-full md:w-1/3">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                          {name.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">{label}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="font-bold text-gray-900 text-sm">{pxSize}px</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 text-xs font-mono">{remSize}rem</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-hidden w-full">
                       <p 
                         style={{ fontSize: `${pxSize}px` }} 
                         className="text-gray-900 truncate font-semibold origin-left tracking-tight"
                       >
                         {sampleText}
                       </p>
                    </div>

                    <div className="shrink-0">
                       <Button
                         size="sm"
                         variant="ghost"
                         onClick={() => handleCopy(`/* ${name} */\nfont-size: ${remSize}rem; /* ${pxSize}px */`, uniqueKey)}
                         className="h-9 hover:bg-gray-100 text-gray-500"
                       >
                         {copiedIndex === uniqueKey ? (
                           <span className="flex items-center text-emerald-600">
                             <Check className="h-4 w-4 mr-1" /> Copied
                           </span>
                         ) : (
                           <span className="flex items-center">
                             <Copy className="h-4 w-4 mr-1" /> Code
                           </span>
                         )}
                       </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tailwind Configuration Card */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <div>
                   <h3 className="text-lg font-bold text-gray-900">Tailwind CSS Export</h3>
                   <p className="text-sm text-gray-500">Inject these sizes directly into your tailwind config to use modular utilities.</p>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleCopy(getTailwindThemeConfig(), 'tailwind')}
                  className="bg-gray-900 text-white hover:bg-gray-800"
                >
                   {copiedIndex === 'tailwind' ? (
                     <span className="flex items-center text-emerald-400"><Check className="h-4 w-4 mr-2" /> Copied</span>
                   ) : (
                     <span className="flex items-center"><Copy className="h-4 w-4 mr-2" /> Copy Config</span>
                   )}
                </Button>
             </div>
             
             <pre className="bg-gray-900 text-gray-200 p-6 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-gray-800">
                <code>{getTailwindThemeConfig()}</code>
             </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
