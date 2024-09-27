"use client"
import React from 'react';
import ProjectChild from './ProjectChild/ProjectChild';

function Project() {
    

    return (
        <div className='w-full max-w-screen-lg mx-auto'>
            <ProjectChild
                carouselImages={[
                    "/carousel/carousel1.png",
                    "/carousel/carousel2.png",
                    "/carousel/carousel3.png"
                ]}
                projectName="Building an adaptive design system for Archlight"
                projectDetails="In this project, I developed a flexible and scalable design system using Next.js for front-end development and Figma for design collaboration."
                avatars={[
                    "/images/avatar.jpg",
                    "/images/avatar.jpg"
                ]}
                infoLink="/work/adaptive-design-system-for-archlight"
            />
        </div>
    );
}

export default Project;
