import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto opacity-70 mb-8"></div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-6 animate-pulse">
                    <span className="block text-glow">Hello</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">and Welcome</span>
                </h1>
                <div className="relative group mt-12 max-w-2xl mx-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-background-dark/80 backdrop-blur-sm border border-white/10 p-8 rounded-lg shadow-2xl">
                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                            Quite a delight to see someone stumble across my page. Well I am just a university student bored out of his mind and in desperate need of stimulation, whether that be of work assigned to me or just hanging out. Well, hope you enjoy your stay and feel free to check out any of the sections!
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <a
                                href="/resume.pdf"
                                download="Resume-Tazwar-Islam.pdf"
                                className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded font-medium transition-all duration-300 shadow-[0_0_20px_rgba(17,50,212,0.3)] hover:shadow-[0_0_30px_rgba(17,50,212,0.5)] active:scale-95"
                            >
                                View My Work
                            </a>
                            <Link to="/contact" className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/50 text-white rounded font-medium transition-all duration-300 hover:bg-white/5 active:scale-95">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
