import Image from 'next/image'
import React from 'react'

function ProjectDetail() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-end w-full">
                <span className="font-semibold lg:text-4xl text-2xl" id="FLY">FLY</span>
                <span className="lg:text-xl text-sm text-neutral-300">2022 - Present</span>
            </div>
            <span className="lg:text-xl text-sm text-cyan-500 mb-4">Senior Design Engineer</span>
            <ul className="flex flex-col gap-4 list-disc ml-10">
                <li className="text-2xl text-cyan-500"><div className='text-white lg:text-xl text-sm'>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</div></li>
                <li className="text-2xl text-cyan-500"><div className='text-white lg:text-xl text-sm'>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</div></li>
            </ul>
            <div className="flex pl-10 pt-4 flex-wrap w-full">
                <div className="flex border border-neutral-300 rounded-md" style={{ minWidth: '16rem', height: '9rem' }}>
                    <div className="flex bg-neutral-200 w-full h-full relative overflow-hidden cursor-pointer rounded-md">
                        <Image
                            alt="Once UI Project"
                            loading="lazy"
                            decoding="async"
                            sizes="100vw"
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail