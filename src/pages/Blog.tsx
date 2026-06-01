import React from 'react';

const Blog: React.FC = () => {
    // Empty array for future posts
    const posts: any[] = [];

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
                        Exploring the intersection of design, engineering, and the occasional existential crisis. Documenting my journey through the digital void.
                    </p>
                </header>

                <div className="space-y-12">
                    {posts.length > 0 ? (
                        posts.map((post, idx) => (
                            <article key={idx} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-white/10">
                                <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-800 flex-shrink-0">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 text-sm mb-3">
                                        <span className="text-primary font-semibold">{post.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <time className="text-slate-500 font-mono text-xs">{post.date}</time>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                        Read article <span className="material-icons text-sm ml-1">arrow_forward</span>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
                            <span className="material-icons text-5xl text-slate-600 mb-4">auto_stories</span>
                            <p className="text-slate-500 font-light italic">Incoming signals detected... New transmissions reaching resonance soon.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Blog;
