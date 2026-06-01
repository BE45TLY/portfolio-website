import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="relative z-10 flex-grow flex items-center justify-center p-6 lg:p-12 min-h-[calc(100vh-160px)]">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-12 md:col-span-7 flex flex-col justify-center space-y-8 mb-12">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span>Open to Work</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">conversation.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                            I'm currently available for freelance projects and full-time roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative flex items-center bg-gray-900/60 backdrop-blur-md rounded-xl p-8 border border-white/5 shadow-2xl">
                            <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                                <span className="material-icons text-3xl">email</span>
                            </div>
                            <div className="ml-5 flex-grow">
                                <h3 className="text-xs font-medium text-slate-500 uppercase tracking-widest">Primary Email</h3>
                                <a className="text-xl font-semibold text-white hover:text-blue-400 transition-colors block mt-1" href="mailto:t.islam752@gmail.com">
                                    t.islam752@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {['LinkedIn', 'Discord', 'Instagram', 'Messenger'].map((social) => (
                            <div key={social} className="bg-gray-900/40 p-6 rounded-xl border border-white/5 hover:border-primary/40 transition-all cursor-pointer group shadow-xl">
                                <h4 className="text-white font-bold group-hover:text-primary transition-colors">{social}</h4>
                                <p className="text-xs text-slate-500 font-light mt-1">Connect Here</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
