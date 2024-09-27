"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

function ProjectChild({ carouselImages, projectName, projectDetails, avatars, infoLink }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return (
        <>
            <div className="relative w-full overflow-hidden lg:mt-14 mt-10">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {carouselImages.map((image, index) => (
                            <div key={index} className="embla__slide flex justify-center items-center bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100">
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={scrollPrev} className="absolute top-1/2 left-1 transform -translate-y-1/2 px-4 py-2 text-white bg-black rounded-full opacity-70">
                    <FontAwesomeIcon icon={faChevronLeft} fontSize={16} />
                </button>
                <button onClick={scrollNext} className="absolute top-1/2 right-1 transform -translate-y-1/2 px-4 py-2 text-white bg-black rounded-full opacity-70">
                    <FontAwesomeIcon icon={faChevronRight} fontSize={16} />
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg mb-4">
                {/* Left Section */}
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
                        {projectName}
                    </h2>
                </div>

                {/* Right Section */}
                <div className="md:w-2/3 flex flex-col gap-4">
                    <div className="flex items-center justify-start space-x-[-1rem] mb-4 lg:my-4">
                        {avatars.map((src, index) => (
                            <div key={index} className={`relative lg:w-16 lg:h-16 w-10 h-10 rounded-full overflow-hidden border border-gray-300 ${index > 0 ? '-ml-4' : ''}`}>
                                <Image src={src} alt={`Avatar ${index + 1}`} layout="fill" className="object-cover" />
                            </div>
                        ))}
                    </div>

                    <p className="text-base lg:text-center text-left">
                        {projectDetails}
                    </p>

                    <a href={infoLink} className="inline-flex items-center gap-2 py-2 mb-4 lg:mb-0 text-teal-500 bg-gray-800 hover:bg-gray-700 rounded-lg ">
                        <span className="text-base">Read case study</span>
                        <FontAwesomeIcon icon={faChevronRight} fontSize={14} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectChild