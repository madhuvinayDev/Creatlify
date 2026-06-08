import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <BrandLogo size={32} />
              <span className="text-xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-gray-900 to-indigo-950 bg-clip-text">Creatlify</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-Powered Design Tools for Modern Creators. Identify fonts, generate palettes, and build stronger visual brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-3 pl-0">
              <li><Link to="/tools/font-pairing" className="text-sm text-gray-600 hover:text-blue-600">Font Pairing Genius</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600">Color Palette Generator</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600">Typography Scale Generator</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600">Google Fonts Explorer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-3 pl-0">
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600">Design Inspiration</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-blue-600">Brand Guidelines</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3 pl-0">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Creatlify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
