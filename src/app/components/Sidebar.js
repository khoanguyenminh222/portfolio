'use client';
import React from 'react';

const Sidebar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 shadow-lg p-6">
            <div className="flex flex-col gap-12">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('introduction')}>
                    <div className="flex bg-gray-300" style={{ width: '2rem', height: '0.25rem' }}></div>
                    <span className="text-lg font-semibold">Introduction</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('work-experience')}>
                    <div className="flex bg-gray-300" style={{ width: '2rem', height: '0.25rem' }}></div>
                    <span className="text-lg font-semibold">Work Experience</span>
                </div>
                <div className="flex flex-col gap-12 pl-10">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('studies')}>
                        <div className="flex bg-gray-300" style={{ width: '1rem', height: '0.25rem' }}></div>
                        <span className="text-sm">Studies</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('technical-skills')}>
                        <div className="flex bg-gray-300" style={{ width: '1rem', height: '0.25rem' }}></div>
                        <span className="text-sm">Technical Skills</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
