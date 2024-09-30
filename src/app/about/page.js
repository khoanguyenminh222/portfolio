import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sidebar';
import ProjectDetail from '../components/ProjectDetail';

function AboutPage() {
    return (
        <div className='flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto justify-center gap-20 py-10'>
            <aside className="hidden sm:block">
                <Sidebar />
            </aside>
            {/* Avatar and Language */}
            <div className="flex flex-col items-center">
                <div className="flex bg-white border border-gray-300 rounded-full p-1 mb-4">
                    <div className="flex bg-gray-200 rounded-full w-40 h-40 relative overflow-hidden">
                        <Image
                            alt="Avatar"
                            src="/images/avatar.jpg"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <FontAwesomeIcon icon={faEarthAsia} fontSize={16} />
                    <span className="text-xl">Asia/Jakarta</span>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <div className="flex gap-2 items-center rounded-lg bg-white border border-gray-300 p-2">
                        <span className="text-xs font-semibold text-teal-700">English</span>
                    </div>
                    <div className="flex gap-2 items-center rounded-lg bg-white border border-gray-300 p-2">
                        <span className="text-xs font-semibold text-teal-700">Tiếng việt</span>
                    </div>
                </div>
            </div>
            {/* Information */}
            <div className="flex flex-col">
                <section id="introduction" className="mb-10">
                    <div className="flex flex-col">

                        <p className='text-3xl lg:text-6xl font-bold mb-2'>
                            Khoa Ryo <br />
                            <small className='text-2xl lg:text-4xl text-slate-400'>Technical</small>
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <div className="flex gap-2 rounded-lg bg-white border border-gray-300 p-2">
                                <span className="text-xs font-semibold text-teal-700">English</span>
                            </div>
                            <div className="flex gap-2 rounded-lg bg-white border border-gray-300 p-2">
                                <span className="text-xs font-semibold text-teal-700">Tiếng việt</span>
                            </div>
                        </div>
                        <div className="mt-10 text-xl lg:text-2xl">
                            Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.
                        </div>
                    </div>
                </section>
                <section id="work-experience" className="mb-20">
                    <h2 className="lg:text-5xl text-3xl font-bold mb-4">Work Experience</h2>
                    {/* Nội dung của Work Experience */}
                    <ProjectDetail />
                </section>
                <section id="studies" className="mb-20">
                    <h2 className="lg:text-5xl text-3xl font-bold mb-4">Studies</h2>
                    {/* Nội dung của Studies */}
                    <div className="flex flex-col justify-between items-start w-full">
                        <span className="font-semibold lg:text-4xl text-2xl">Tôn Đức Thắng University</span>
                        <span className="lg:text-xl text-sm text-neutral-300">Software Engineering</span>
                    </div>
                </section>
                <section id="technical-skills" className="mb-20">
                    <h2 className="lg:text-5xl text-3xl font-bold mb-4">Technical Skills</h2>
                    {/* Nội dung của Technical Skills */}
                    <div className="flex flex-col justify-between items-start w-full">
                        <span className="font-semibold lg:text-4xl text-2xl">Front-end</span>
                        <span className="lg:text-xl text-sm text-neutral-300">HTML, CSS, JS, REACT</span>
                    </div>
                    <div className="flex flex-col justify-between items-start w-full">
                        <span className="font-semibold lg:text-4xl text-2xl">Back-end</span>
                        <span className="lg:text-xl text-sm text-neutral-300">Nodejs express, C#, Java, JS</span>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default AboutPage