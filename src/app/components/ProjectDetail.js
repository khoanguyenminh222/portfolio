import Image from 'next/image'
import React from 'react'

function ProjectDetail() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-end w-full">
                <span className="font-semibold text-5xl" id="FLY">FLY</span>
                <span className="text-2xl text-neutral-300">2022 - Present</span>
            </div>
            <span className="text-2xl text-cyan-500 mb-4">Senior Design Engineer</span>
            <ul className="flex flex-col gap-4 list-disc ml-10">
                <li className="text-2xl text-cyan-500"><div className='text-white text-2xl'>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</div></li>
                <li className="text-2xl text-cyan-500"><div className='text-white text-2xl'>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</div></li>
            </ul>
            <div className="flex pl-10 pt-4 flex-wrap w-full">
                <div className="flex border border-neutral-300 rounded-md" style={{ minWidth: '16rem', height: '9rem' }}>
                    <div className="flex bg-neutral-200 w-full h-full relative overflow-hidden cursor-pointer rounded-md">
                        <Image
                            alt="Once UI Project"
                            loading="lazy"
                            decoding="async"
                            sizes="100vw"
                            srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=16&q=75 16w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=32&q=75 32w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=48&q=75 48w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=64&q=75 64w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=96&q=75 96w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=128&q=75 128w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=256&q=75 256w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=384&q=75 384w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-01.jpg&w=3840&q=75"
                            layout="fill"
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail