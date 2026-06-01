import React from 'react';

const Timeline: React.FC = () => {
    const events = [
        { year: '2008', title: 'Schooling Life', sub: 'South Breeze School', desc: 'Countless memories, people who stuck with me and are still a massive part of my life now', side: 'left', color: 'purple' },
        { year: '2021', title: 'IGCSE', sub: 'South Breeze School', desc: 'Passed my IGCSEs with flying colors. Mix of Science and Business subjects.', side: 'right', color: 'blue', image: '/src/assets/school.jpg' },
        { year: '2023', title: 'International A Levels', sub: 'South Breze School', desc: 'Secured As in all 3 of my subjects: Maths, Economics and Accounting', side: 'left', color: 'blue' },
        { year: '2023', title: 'BBA in Finance', sub: 'North South University', desc: 'Currently I study here, enjoying life while looking for opportunities to enhance every aspect of it.', side: 'right', color: 'cyan', image: '/src/assets/nsu.jpg' },
    ];

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 py-16">
            <header className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                    Chronological <span className="text-blue-500 text-glow">Journey</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">Follow me through my academic life!</p>
            </header>

            <div className="relative w-full pb-24">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600/30"></div>

                {events.map((event, idx) => (
                    <div key={idx} className={`relative flex items-center justify-between w-full mb-32 group ${event.side === 'left' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-1/2 hidden md:block ${event.side === 'left' ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                            <span className={`text-6xl font-bold text-[#2a2b55] group-hover:opacity-100 transition-opacity duration-500`}>{event.year}</span>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className={`w-3 h-3 rounded-full bg-background-dark border-2 z-20 shadow-lg`} style={{ borderColor: event.color === 'purple' ? '#a855f7' : event.color === 'blue' ? '#3b82f6' : '#22d3ee' }}></div>
                        </div>

                        <div className="w-full md:w-1/2 md:px-16 pl-8 md:pl-0">
                            <div className="relative bg-[#0d0e25] border border-white/5 p-6 rounded-lg hover:border-white/10 transition-colors shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                <h4 className="font-medium mb-3 text-sm opacity-80" style={{ color: event.color === 'purple' ? '#a855f7' : event.color === 'blue' ? '#3b82f6' : '#22d3ee' }}>{event.sub}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{event.desc}</p>
                                {event.image && (
                                    <div className="mt-4 rounded-lg overflow-hidden border border-white/5 shadow-xl">
                                        <img src={event.image} alt={event.title} className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
