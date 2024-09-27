"use client"
import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import { usePathname } from 'next/navigation'

function Header() {
    const [time, setTime] = useState(null); // Start with null or some placeholder
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up timer on unmount
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Threshold for scrolling
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up scroll event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => pathname === path;
    if (!time) {
        return <LoadingSpinner />
    }

    return (
        <header className={`flex justify-between items-center w-full h-fit z-50 sticky top-0 ${isScrolled ? 'scrolled' : ''}`}>
            {/* Time Zone Section */}
            <div className="hidden sm:flex items-center text-lg">
                Asia/VietNam
            </div>

            {/* Navigation Section */}
            <div className="flex py-1 px-2 bg-surface-neutral border border-solid border-neutral-300 rounded-3xl shadow-lg justify-center bg-gradient-to-tr from-indigo-500 via-slate-900 to-indigo-600 bg-opacity-100">
                <div className="flex space-x-4 font-body text-lg">
                    {/* Home Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/"
                    >
                        <div className="flex items-center">
                            <span className="text-current text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path>
                                    <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                                </svg>
                            </span>
                            <div className="hidden sm:flex px-2">Home</div>
                        </div>
                    </a>

                    {/* About Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/about') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/about"
                    >
                        <div className="flex items-center">
                            <span className="text-current text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z" opacity="0.2"></path>
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                                </svg>
                            </span>
                            <div className="hidden sm:flex px-2">About</div>
                        </div>
                    </a>

                    {/* Work Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/project') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/project"
                    >
                        <div className="flex items-center">
                            <span className="text-current text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
                                </svg>
                            </span>
                            <div className="hidden sm:flex px-2">Project</div>
                        </div>
                    </a>

                    {/* Blog Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/blog') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/blog"
                    >
                        <div className="flex items-center">
                            <span className="text-current text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32h40v96l32-24,32,24V32Z" opacity="0.2"></path>
                                    <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM120,40h48v72L148.79,97.6a8,8,0,0,0-9.6,0L120,112Zm80,144H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40h32v88a8,8,0,0,0,12.8,6.4L144,114l27.21,20.4A8,8,0,0,0,176,136a8.1,8.1,0,0,0,3.58-.84A8,8,0,0,0,184,128V40h16Z"></path>
                                </svg>
                            </span>
                            <div className="hidden sm:flex px-2">Blog</div>
                        </div>
                    </a>

                    {/* Gallery Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/gallery') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/gallery"
                    >
                        <div className="flex items-center">
                            <span className="text-current text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
                                </svg>
                            </span>
                            <div className="hidden sm:flex px-2">Gallery</div>
                        </div>
                    </a>
                </div>
            </div>
            {/* Time Section */}
            <div className="flex items-center font-body text-lg">
                {time.toLocaleTimeString()}
            </div>
        </header>

    )
}

export default Header