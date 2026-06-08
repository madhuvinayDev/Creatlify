import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Palette, Copy, Check, RefreshCw, Sparkles, Layout as LayoutIcon, Eye, Download } from 'lucide-react';

interface PaletteColor {
  hex: string;
  name: string;
  role: string;
}

interface PaletteData {
  primary: PaletteColor;
  secondary: PaletteColor;
  accent: PaletteColor;
  dark: PaletteColor;
  light: PaletteColor;
  industry: string;
  mood: string;
  description: string;
}

const PALETTE_DATABASE: Record<string, Record<string, PaletteData>> = {
  SaaS: {
    Tech: {
      primary: { hex: '#2563eb', name: 'Vibrant Blue', role: 'Brand & Hero Actions' },
      secondary: { hex: '#4f46e5', name: 'Indigo Purple', role: 'Secondary UI & Hover' },
      accent: { hex: '#06b6d4', name: 'Electric Cyan', role: 'Focus & Badges' },
      dark: { hex: '#0f172a', name: 'Deep Slate', role: 'Typography & Cards' },
      light: { hex: '#f8fafc', name: 'Sky Neutral', role: 'Background Canvas' },
      industry: 'SaaS',
      mood: 'Tech',
      description: 'A modern, high-contrast digital look using electric primary cold colors mixed with neutral slates for interfaces.'
    },
    Calm: {
      primary: { hex: '#0d9488', name: 'Teal Forest', role: 'Primary Focus & Headers' },
      secondary: { hex: '#0f766e', name: 'Pine Teal', role: 'Navigation & Accents' },
      accent: { hex: '#f59e0b', name: 'Sun Golden', role: 'CTA & Highlights' },
      dark: { hex: '#0f172a', name: 'Deep Sea Black', role: 'Text & Dark Elements' },
      light: { hex: '#f4f6f6', name: 'Soft Gray-Teal', role: 'Canvas Base' },
      industry: 'SaaS',
      mood: 'Calm',
      description: 'Soothing organic greens paired with glowing warm indicators, providing focus and ease of mind.'
    },
    Energetic: {
      primary: { hex: '#d946ef', name: 'Cosmic Fuchsia', role: 'Brand Core' },
      secondary: { hex: '#8b5cf6', name: 'Neon Violet', role: 'Secondary Links' },
      accent: { hex: '#f43f5e', name: 'Cyber Rose', role: 'Error & Play Actions' },
      dark: { hex: '#1e1b4b', name: 'Midnight Violet', role: 'Typography' },
      light: { hex: '#faf5ff', name: 'Lavender Mist', role: 'Canvas' },
      industry: 'SaaS',
      mood: 'Energetic',
      description: 'High-octane synthwave styling for digital builders, streaming interfaces, and bold tech startups.'
    },
    Trustworthy: {
      primary: { hex: '#1e3a8a', name: 'Royal Sapphire', role: 'Primary Actions' },
      secondary: { hex: '#3b82f6', name: 'Azure Sky', role: 'Secondary Elements' },
      accent: { hex: '#10b981', name: 'Emerald Mint', role: 'Success Alerts' },
      dark: { hex: '#0d1117', name: 'Onyx Black', role: 'Rich Text' },
      light: { hex: '#f0f4f8', name: 'Air Light Blue', role: 'Background Canvas' },
      industry: 'SaaS',
      mood: 'Trustworthy',
      description: 'Corporate stability and clear information hierarchy established through standard royal blues and crisp greens.'
    }
  },
  Startup: {
    Bold: {
      primary: { hex: '#ea580c', name: 'Bright Orange', role: 'Bold Callouts' },
      secondary: { hex: '#b45309', name: 'Burnt Amber', role: 'Subtitles & Borders' },
      accent: { hex: '#10b981', name: 'Vibrant Teal', role: 'Feature Indicators' },
      dark: { hex: '#1c1917', name: 'Warm Charcoal', role: 'Main Text' },
      light: { hex: '#fffaf8', name: 'Peach Warmth', role: 'Canvas Backing' },
      industry: 'Startup',
      mood: 'Bold',
      description: 'An aggressive, startup-ready orange and amber theme designed to capture immediate interest.'
    },
    Playful: {
      primary: { hex: '#f43f5e', name: 'Bubblegum Rose', role: 'Core CTA' },
      secondary: { hex: '#f59e0b', name: 'Warm Amber', role: 'Decorative Bubbles' },
      accent: { hex: '#10b981', name: 'Tropical Green', role: 'Alerts & Labels' },
      dark: { hex: '#312e81', name: 'Royal Indigo', role: 'Titles & Shadows' },
      light: { hex: '#fff1f2', name: 'Cherry Blossom', role: 'Core Canvas' },
      industry: 'Startup',
      mood: 'Playful',
      description: 'Optimistic colors with deep dark indigo typography to create a youthful, approachable startup personality.'
    }
  },
  Agency: {
    Luxury: {
      primary: { hex: '#1c1917', name: 'Basalt Black', role: 'Corporate Identity' },
      secondary: { hex: '#78716c', name: 'Platinum Grey', role: 'Subtitles' },
      accent: { hex: '#b45309', name: 'Polished Bronze', role: 'Borders & Icons' },
      dark: { hex: '#0c0a09', name: 'Obsidian Black', role: 'Primary Typography' },
      light: { hex: '#fafaf9', name: 'Alabaster White', role: 'Background Canvas' },
      industry: 'Agency',
      mood: 'Luxury',
      description: 'Elegant, high-end stone shades combined with bronzed highlights. Perfect for high-end boutique creative agencies.'
    },
    Creative: {
      primary: { hex: '#7c3aed', name: 'Electric Amethyst', role: 'Core Branding' },
      secondary: { hex: '#ec4899', name: 'Neon Magenta', role: 'Creative Accents' },
      accent: { hex: '#fbbf24', name: 'Warm Marigold', role: 'CTA Details' },
      dark: { hex: '#111827', name: 'Absolute Dark', role: 'Main Text' },
      light: { hex: '#fbfbfe', name: 'Clean White', role: 'Canvas Base' },
      industry: 'Agency',
      mood: 'Creative',
      description: 'Highly expressive colors utilizing neon purples, pinks, and yellows ideal for portfolios and digital design studios.'
    }
  },
  Ecommerce: {
    Trustworthy: {
      primary: { hex: '#059669', name: 'Jade Emerald', role: 'Buy Now CTA' },
      secondary: { hex: '#0284c7', name: 'Oceanic Blue', role: 'Cart & Badges' },
      accent: { hex: '#f59e0b', name: 'Golden Marigold', role: 'Star Ratings & Deals' },
      dark: { hex: '#1f2937', name: 'Slate Dark', role: 'Product Titles' },
      light: { hex: '#f9fafb', name: 'Alabaster', role: 'Page Backing' },
      industry: 'Ecommerce',
      mood: 'Trustworthy',
      description: 'High-conversion organic green CTA buttons balanced with reliable safe blue branding for digital stores.'
    }
  },
  Finance: {
    Trustworthy: {
      primary: { hex: '#0284c7', name: 'Global Slate', role: 'Header & Links' },
      secondary: { hex: '#0369a1', name: 'Marine Navy', role: 'Menu Items' },
      accent: { hex: '#15803d', name: 'Growth Green', role: 'Upward Charts & Logs' },
      dark: { hex: '#0f172a', name: 'Deep Titanium', role: 'Body Texts' },
      light: { hex: '#f0fdf4', name: 'Safe Green Tint', role: 'Background Panels' },
      industry: 'Finance',
      mood: 'Trustworthy',
      description: 'Professional marine blue paired with financial growth green, evoking stability, wealth, and analytical confidence.'
    }
  }
};

const DEFAULT_PALETTE: PaletteData = {
  primary: { hex: '#2563eb', name: 'Vibrant Blue', role: 'Brand & Hero Actions' },
  secondary: { hex: '#4f46e5', name: 'Indigo Purple', role: 'Secondary UI & Hover' },
  accent: { hex: '#06b6d4', name: 'Electric Cyan', role: 'Focus & Badges' },
  dark: { hex: '#0f172a', name: 'Deep Slate', role: 'Typography & Cards' },
  light: { hex: '#f8fafc', name: 'Sky Neutral', role: 'Background Canvas' },
  industry: 'SaaS',
  mood: 'Tech',
  description: 'A modern, high-contrast digital look using electric primary cold colors mixed with neutral slates for interfaces.'
};

export default function ColorPalette() {
  const [selectedIndustry, setSelectedIndustry] = useState('SaaS');
  const [selectedMood, setSelectedMood] = useState('Tech');
  const [currentPalette, setCurrentPalette] = useState<PaletteData>(DEFAULT_PALETTE);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'css'>('preview');

  const industries = Object.keys(PALETTE_DATABASE);
  const moodsForIndustry = PALETTE_DATABASE[selectedIndustry] 
    ? Object.keys(PALETTE_DATABASE[selectedIndustry]) 
    : ['Tech', 'Calm', 'Energetic', 'Trustworthy'];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Find exact match
      const industryMatch = PALETTE_DATABASE[selectedIndustry];
      let newPalette = DEFAULT_PALETTE;

      if (industryMatch) {
        if (industryMatch[selectedMood]) {
          newPalette = industryMatch[selectedMood];
        } else {
          // Fallback to first available mood for that industry
          const firstMood = Object.keys(industryMatch)[0];
          newPalette = industryMatch[firstMood];
        }
      }
      setCurrentPalette(newPalette);
      setIsGenerating(false);
    }, 800);
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getCSSVariables = () => {
    return `:root {
  --color-primary: ${currentPalette.primary.hex};
  --color-secondary: ${currentPalette.secondary.hex};
  --color-accent: ${currentPalette.accent.hex};
  --color-dark: ${currentPalette.dark.hex};
  --color-light: ${currentPalette.light.hex};
}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Controls */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Interactive Suite</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">Color Palette Generator</h1>
            <p className="text-gray-500 text-sm">Design tailored color schemes matching your brand requirements instantly.</p>
          </div>

          <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Industry Focus</label>
              <select
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  const availableMoods = Object.keys(PALETTE_DATABASE[e.target.value] || {});
                  if (!availableMoods.includes(selectedMood)) {
                    setSelectedMood(availableMoods[0] || 'Trustworthy');
                  }
                }}
                className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Aesthetic Mood</label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
              >
                {moodsForIndustry.map((mood) => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
            </div>

            <Button
              className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md flex items-center justify-center font-bold"
              onClick={handleGenerate}
              isLoading={isGenerating}
            >
              {!isGenerating && (
                <span className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" /> Generate Palette
                </span>
              )}
            </Button>
          </div>

          <Card className="bg-gradient-to-br from-teal-500/10 to-transparent border-teal-200/50">
            <CardContent className="p-5">
              <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-teal-700 mb-3">
                <Sparkles className="h-4 w-4 mr-2" /> Design Insight
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Color psychology shapes user conversion. A matching dynamic pairing reduces cognitive load and directs focus effortlessly toward actions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Development Canvas */}
        <div className="flex-1 space-y-8">
          {/* Main Color Swatches */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Color Swatches</h2>
            <p className="text-sm text-gray-500 mb-6">{currentPalette.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { key: 'primary', label: 'Primary Brand', data: currentPalette.primary },
                { key: 'secondary', label: 'Secondary Tone', data: currentPalette.secondary },
                { key: 'accent', label: 'Accent Alert', data: currentPalette.accent },
                { key: 'dark', label: 'Neutral Dark', data: currentPalette.dark },
                { key: 'light', label: 'Neutral Light', data: currentPalette.light },
              ].map(({ key, label, data }) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between"
                  id={`color-swatch-${key}`}
                >
                  <div
                    className="h-28 w-full relative group cursor-pointer transition-transform"
                    style={{ backgroundColor: data.hex }}
                    onClick={() => copyToClipboard(data.hex)}
                  >
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      {copiedColor === data.hex ? (
                        <Check className="h-6 w-6 text-white" />
                      ) : (
                        <Copy className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                      {label}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 truncate">{data.name}</h4>
                    <span className="font-mono text-xs font-semibold text-teal-600 block mb-2">{data.hex}</span>
                    <p className="text-[11px] text-gray-400 leading-tight">{data.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Preview Tabs */}
          <div className="bg-white rounded-3xl border border-gray-100/80 shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${
                    activeTab === 'preview'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Eye className="mr-2 h-4 w-4" /> Live Dashboard Mockup
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${
                    activeTab === 'css'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <LayoutIcon className="mr-2 h-4 w-4" /> Export CSS Variables
                </button>
              </div>

              {activeTab === 'preview' && (
                <span className="text-xs text-gray-500 font-medium">Rendered using selected palette dynamically</span>
              )}
            </div>

            <div className="p-6 md:p-8 bg-gray-50/50 min-h-[380px]">
              <AnimatePresence mode="wait">
                {activeTab === 'preview' ? (
                  <motion.div
                    key="preview-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Mock Website Preview Card */}
                    <div
                      className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm max-w-2xl mx-auto"
                      style={{ backgroundColor: currentPalette.light.hex }}
                    >
                      {/* Nav */}
                      <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: `${currentPalette.dark.hex}15` }}>
                        <span className="font-extrabold text-sm" style={{ color: currentPalette.dark.hex }}>
                          ⚡ BrandCore
                        </span>
                        <div className="flex gap-4 text-xs font-semibold" style={{ color: `${currentPalette.dark.hex}bb` }}>
                          <span>Products</span>
                          <span>Features</span>
                          <span>About</span>
                        </div>
                      </div>

                      {/* Hero */}
                      <div className="p-8 text-center space-y-6">
                        <span
                          className="inline-block px-3 py-1 font-bold text-[10px] rounded-full uppercase tracking-wider"
                          style={{
                            backgroundColor: `${currentPalette.accent.hex}22`,
                            color: currentPalette.accent.hex,
                          }}
                        >
                          New Launch Suite &rarr;
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: currentPalette.dark.hex }}>
                          Accelerate your creative velocity.
                        </h3>
                        <p className="text-xs max-w-md mx-auto leading-relaxed" style={{ color: `${currentPalette.dark.hex}90` }}>
                          Align headers, balance color frequencies, and deploy styled variables across directories seamlessly without lag.
                        </p>

                        <div className="flex justify-center gap-3">
                          <button
                            className="px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all hover:brightness-110"
                            style={{
                              backgroundColor: currentPalette.primary.hex,
                              color: '#ffffff',
                            }}
                          >
                            Get Started
                          </button>
                          <button
                            className="px-5 py-2.5 rounded-xl font-bold text-xs border transition-colors hover:bg-black/5"
                            style={{
                              borderColor: `${currentPalette.dark.hex}40`,
                              color: currentPalette.dark.hex,
                            }}
                          >
                            Explore Tools
                          </button>
                        </div>
                      </div>

                      {/* Small Footer/Feature Row */}
                      <div className="px-6 py-4 bg-white border-t flex items-center justify-between" style={{ borderColor: `${currentPalette.dark.hex}10` }}>
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentPalette.accent.hex }} />
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active nodes</span>
                        </div>
                        <span
                          style={{
                            backgroundColor: currentPalette.secondary.hex,
                            color: '#ffffff',
                          }}
                          className="text-[10px] inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold"
                        >
                          PRO VERSION
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="css-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="max-w-2xl mx-auto relative"
                  >
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800 shadow-lg overflow-x-auto leading-relaxed">
                      <code>{getCSSVariables()}</code>
                    </pre>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                        onClick={() => copyToClipboard(getCSSVariables())}
                      >
                        {copiedColor === getCSSVariables() ? (
                          <span className="flex items-center text-emerald-400">
                            <Check className="h-4 w-4 mr-2" /> Copied
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Copy className="h-4 w-4 mr-2" /> Copy CSS
                          </span>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
