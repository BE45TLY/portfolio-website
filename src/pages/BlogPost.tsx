import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-32 text-center">
                <span className="material-icons text-6xl text-red-500 mb-4 font-light">error_outline</span>
                <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
                <p className="text-slate-400 mb-8">The thoughts you are looking for have drifted into the void.</p>
                <Link 
                    to="/blog" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                    <span className="material-icons text-sm mr-2">arrow_back</span>
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <main>
                {/* Back Link */}
                <div className="mb-8">
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center text-slate-400 hover:text-primary transition-colors duration-200 group text-sm font-medium"
                    >
                        <span className="material-icons text-sm mr-1.5 transform group-hover:-translate-x-1.5 transition-transform duration-200">arrow_back</span>
                        Back to all transmissions
                    </Link>
                </div>

                <article>
                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="text-primary font-semibold tracking-wider uppercase text-xs">{post.category}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="text-slate-500 font-mono text-xs">{post.readTime}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <time className="text-slate-400 text-sm font-light block">{post.date}</time>
                    </header>

                    {/* Featured Image */}
                    {post.img && (
                        <div className="w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5 mb-10">
                            <img 
                                src={post.img} 
                                alt={post.title} 
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-base sm:text-lg font-light tracking-wide space-y-6">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="whitespace-pre-line">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Footer Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <footer className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-2">Tags:</span>
                                {post.tags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/10"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </footer>
                    )}
                </article>
            </main>
        </div>
    );
};

export default BlogPost;
