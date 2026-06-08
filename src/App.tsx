/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import ToolsDirectory from './pages/ToolsDirectory';
import FontPairing from './pages/FontPairing';
import ColorPalette from './pages/ColorPalette';
import TypeScale from './pages/TypeScale';
import FontCompare from './pages/FontCompare';
import BrandStyleGuide from './pages/BrandStyleGuide';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsDirectory />} />
          <Route path="/tools/font-pairing" element={<FontPairing />} />
          <Route path="/tools/color-palette" element={<ColorPalette />} />
          <Route path="/tools/type-scale" element={<TypeScale />} />
          <Route path="/tools/font-compare" element={<FontCompare />} />
          <Route path="/tools/style-guide" element={<BrandStyleGuide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
