"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faHomeAlt, faUserCircle, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
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

    return (
        <header className={`flex justify-between items-center w-full h-fit z-50 sticky top-0 ${isScrolled ? 'scrolled' : ''}`}>
            {/* Time Zone Section */}
            <div className="hidden sm:flex items-center text-xs">
                Asia/VietNam
            </div>

            {/* Navigation Section */}
            <div className="flex py-1 px-2 bg-surface-neutral border border-solid border-neutral-300 rounded-3xl shadow-lg justify-center bg-gradient-to-tr from-indigo-500 via-slate-900 to-indigo-600 bg-opacity-100">
                <div className="flex space-x-4 font-body text-xs">
                    {/* Home Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/"
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHomeAlt} fontSize={12} />
                            <div className="hidden sm:flex px-2">Home</div>
                        </div>
                    </a>

                    {/* About Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/about') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/about"
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUserCircle} fontSize={12} />
                            <div className="hidden sm:flex px-2">About</div>
                        </div>
                    </a>

                    {/* Work Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/project') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/project"
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPuzzlePiece} fontSize={12} />
                            <div className="hidden sm:flex px-2">Project</div>
                        </div>
                    </a>

                    {/* Blog Button */}
                    <a
                        className={`flex items-center text-decoration-none focus:outline-none relative p-2 rounded-3xl border ${isActive('/blog') ? 'border-gray-300' : 'border-transparent'} hover:border-gray-300 transition-colors duration-300`}
                        href="/blog"
                    >
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faMicrophoneAlt} fontSize={12} />
                            <div className="hidden sm:flex px-2">Other Ability</div>
                        </div>
                    </a>
                </div>
            </div>
            {/* Time Section */}
            <div className="flex items-center font-body text-xs">
                {time && time.toLocaleTimeString()}
            </div>
        </header>

    )
}

export default Header