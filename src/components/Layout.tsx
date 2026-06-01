import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="dark">
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 antialiased selection:bg-primary selection:text-white min-h-screen overflow-x-hidden relative">
                {/* Background Decor */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[100px] opacity-60"></div>
                    <div className="stars fixed inset-0 z-0 pointer-events-none opacity-20"></div>
                </div>

                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-background-dark/20 backdrop-blur-sm border-b border-white/5">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="group p-2 -ml-2 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        <div className="space-y-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-7 rotate-45 translate-y-2' : 'w-6 group-hover:w-7'}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6 group-hover:w-5 ml-auto'}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-7'}`}></span>
                        </div>
                    </button>

                    <div className="hidden md:flex items-center space-x-12 text-sm tracking-widest font-light text-slate-300">
                        {[
                            { name: 'HOME', path: '/' },
                            { name: 'ABOUT ME', path: '/about' },
                            { name: 'TIMELINE', path: '/timeline' },
                            { name: 'ACHIEVEMENTS', path: '/achievements' },
                            { name: 'BLOG', path: '/blog' },
                            { name: 'CONTACT', path: '/contact' }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative group py-2 hover:text-white transition-colors duration-300 ${isActive ? 'text-white font-medium' : ''}`
                                }
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full box-border shadow-[0_0_8px_rgba(17,50,212,0.8)]"></span>
                            </NavLink>
                        ))}
                    </div>

                    <div className="font-bold text-xl tracking-tighter text-white">
                        <Link to="/">PORTFOLIO<span className="text-primary">.</span></Link>
                    </div>
                </nav>

                {/* Sidebar */}
                <aside className={`fixed top-0 left-0 h-full w-80 bg-[#0c0f1d] z-40 border-r border-white/5 shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-8 pt-24">
                        <div className="space-y-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Timeline', path: '/timeline' },
                                { name: 'Achievements', path: '/achievements' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-2xl font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                        <div className="mt-12 pt-12 border-t border-white/10">
                            <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest">Connect</p>
                            <div className="flex space-x-4">
                                {['GH', 'LI', 'TW'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-400">
                                        <span className="text-sm font-bold">{social}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="relative z-10 pt-20">
                    {children}
                </main>

                {/* Footer */}
                <footer className="relative z-10 border-t border-white/5 bg-background-dark/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            © 2026 Portfolio. All rights reserved. Built with Galaxy Theme.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Twitter</a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
