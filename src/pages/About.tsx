import React from 'react';
import profileImg from '../assets/profile.jpg';

const About: React.FC = () => {
    return (
        <div className="relative w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 max-w-7xl mx-auto">
            <div className="text-center mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    About <span className="text-primary">Me</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light">
                    Get to know me more
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 rounded-full opacity-70"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                    <div className="relative group max-w-sm w-full">
                        <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-800 aspect-[3/4]">
                            <img
                                alt="Portrait"
                                className="w-full h-full object-cover transition-all duration-500"
                                src={profileImg}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">SM Tazwar Islam Zafir</h2>
                        <p className="text-primary font-medium text-lg">University student and Freelancer</p>
                    </div>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base border-b border-white/5 pb-8">
                        <p>I am a good student, fast learner, and big Messi fan. I'm pretty competitive when it comes to challenges, whether it's in class or on the field. I'm also the type who gets along with everyone and enjoys figuring out new tech stuff just for fun.</p>
                        <p>Currently, I am exploring the world of AI and how it can make work faster, smarter, and more impactful. My goal is to keep learning, adapting, and finding ways to monetize these skills in meaningful projects.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Location</h3>
                            <div className="flex items-center text-white font-medium">Dhaka, Bangladesh</div>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Email</h3>
                            <div className="flex items-center text-white font-medium underline decoration-primary">t.islam752@gmail.com</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Canva', 'Python', 'Microsoft Tools', 'Node.js', 'Figma'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-md border border-white/10 hover:border-primary/50 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
