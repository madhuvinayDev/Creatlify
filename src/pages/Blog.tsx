import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Font Guides', 'Typography', 'Branding', 'Design Systems', 'UI Design', 'Website Design', 'Accessibility'];

  const posts = [
    { cat: 'Typography', title: 'Best Fonts for SaaS Websites', date: 'Oct 12, 2026', read: '5 min read', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Font Guides', title: 'Best Google Fonts for Startups', date: 'Oct 08, 2026', read: '8 min read', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Font Guides', title: 'Inter vs Poppins: Which Sans-Serif Wins?', date: 'Sep 29, 2026', read: '6 min read', img: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Font Guides', title: 'DM Sans vs Inter: Technical Comparison', date: 'Sep 15, 2026', read: '4 min read', img: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Branding', title: 'Best Font Pairings for Agencies', date: 'Sep 02, 2026', read: '10 min read', img: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Branding', title: 'Best Font Pairings for Churches', date: 'Aug 21, 2026', read: '7 min read', img: 'https://images.unsplash.com/photo-1510442650500-93217e634e4c?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Website Design', title: 'How Typography Impacts Conversion Rates', date: 'Aug 10, 2026', read: '6 min read', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
    { cat: 'Typography', title: 'Typography Trends for 2026', date: 'Jul 28, 2026', read: '5 min read', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(post => post.cat === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Creatlify Design Resources",
          "description": "Expert insights, tutorials, and inspiration for modern creators.",
          "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.img,
            "datePublished": new Date(post.date).toISOString(),
            "articleSection": post.cat
          }))
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 w-full">
           <div>
             <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">Design Resources</h1>
             <p className="text-xl text-gray-600 max-w-2xl">Expert insights, tutorials, and inspiration for modern creators.</p>
           </div>
           <div className="relative w-full md:w-80">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
             <Input placeholder="Search articles..." className="pl-10 h-12 bg-white border-gray-200 rounded-xl" />
           </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <Card key={i} className="overflow-hidden border border-gray-200 shadow-sm bg-white hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer rounded-2xl">
               <div className="aspect-[16/10] w-full overflow-hidden relative border-b border-gray-100">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                     <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-blue-700 shadow-sm">
                       {post.cat}
                     </div>
                  </div>
               </div>
               <CardContent className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                     <span>{post.date}</span>
                     <span>&middot;</span>
                     <span>{post.read}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm font-medium text-gray-600 group-hover:text-blue-600 mt-4 transition-colors">
                    Read Article <ArrowRight className="ml-1.5 h-4 w-4" />
                  </div>
               </CardContent>
            </Card>
          ))}
        </div>

        {/* Missing Results state if filtering */}
        {filteredPosts.length === 0 && (
           <div className="py-20 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">We couldn't find any articles in this category.</p>
              <Button variant="outline" className="mt-6" onClick={() => setActiveCategory('All')}>View All Articles</Button>
           </div>
        )}

      </div>
      
      {/* Blog CTA */}
      <section className="py-24 bg-blue-600 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Level up your typography skills</h2>
           <p className="mt-4 text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest design trends, font pairings, and UI/UX tips delivered straight to your inbox.</p>
           <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input type="email" placeholder="Enter your email" className="h-12 border-none bg-white/10 text-white placeholder:text-blue-200 focus-visible:ring-white" required />
              <Button type="button" className="h-12 bg-white text-blue-600 hover:bg-gray-50 font-bold px-8">Subscribe</Button>
           </form>
           <p className="mt-4 text-xs text-blue-200">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  );
}
