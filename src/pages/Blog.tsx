import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Get unique list of categories for filtering
    const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    // Filter posts based on selection
    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <main>
                <header className="mb-12 text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                        Transmission Log
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Thoughts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Updates</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-light">
                        Exploring the intersection of finance, AI, and my personal learning journey. Documenting my thoughts as I navigate the digital void.
                    </p>
                </header>

                {/* Categories Filter */}
                <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                                selectedCategory === category
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="space-y-12">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-white/10"
                            >
                                {post.img && (
                                    <Link to={`/blog/${post.id}`} className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-800 flex-shrink-0">
                                        <img 
                                            src={post.img} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                                        />
                                    </Link>
                                )}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 text-sm mb-3">
                                        <span className="text-primary font-semibold tracking-wider text-xs uppercase">{post.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span className="text-slate-500 font-mono text-xs">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        <Link to={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
                                        {post.excerpt}
                                    </p>
                                    <Link 
                                        to={`/blog/${post.id}`} 
                                        className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1.5 transition-transform duration-200"
                                    >
                                        Read article 
                                        <span className="material-icons text-sm ml-1">arrow_forward</span>
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
                            <span className="material-icons text-5xl text-slate-600 mb-4">auto_stories</span>
                            <p className="text-slate-500 font-light italic">No posts found in this category.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Blog;
