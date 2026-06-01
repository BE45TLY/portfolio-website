import React from 'react';

const Achievements: React.FC = () => {
    const cards = [
        { type: 'Education', year: '2023', title: 'Daily Star Award', desc: 'Won this prestigious award for my outstanding A level grades', icon: 'graduation_cap' },
        { type: 'Award', year: '2019', title: 'Spelling Bee', desc: 'Won Spelling Bee competitions hosted locally in my school', icon: 'trophy' },
        { type: 'Certification', year: '2023', title: 'Python Certification', desc: 'Beginner level certificate of completion from Coursera', icon: 'code' },
        { type: 'General', year: '2015', title: 'Science Fair Winner', desc: 'Won the 5th grade science fair in what was a landslide victory', icon: 'science' },
    ];

    return (
        <div className="relative container mx-auto px-4 py-12 lg:py-20 flex flex-col items-center">
            <div className="text-center max-w-2xl mb-24">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-primary/20 rounded-full border border-primary/30">
                    Milestones & Awards
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    Short list of <span className="text-blue-400">Achievements</span> that mean a lot
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    A timeline of professional certifications, awards, and significant milestones in my life SO FAR
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                {cards.map((card, idx) => (
                    <div key={idx} className={`animate-float${idx % 2 === 1 ? '-delay-1' : ''} group relative bg-gray-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(17,50,212,0.2)]`}>
                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 text-primary-light">
                                <span className="material-icons text-4xl">emoji_events</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center text-xs text-primary font-medium tracking-wide uppercase mb-1">
                                    <span>{card.type}</span>
                                    <span>{card.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-2">{card.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
