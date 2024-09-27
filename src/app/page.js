import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Project from "./components/Project";
import EmailContact from "./components/EmailContact";
export default function Home() {
    return (
        <div className="bg-gradient-to-tr from-black via-black to-indigo-900 text-white font-mono">
            <Header />
            <div className="px-6 lg:px-40 py-16">
                <div className="w-full max-w-screen-lg mx-auto">
                    <span
                        aria-hidden="true"
                        className="transition-transform duration-2000 transform translate-y-0"
                    >
                        <h1 className="font-display font-bold lg:text-8xl mb-6 text-6xl">
                            Design engineer <br/> and builder
                        </h1>
                    </span>
                    <span
                        aria-hidden="true"
                        className="transition-transform duration-2000 transform translate-y-0"
                    >
                        <p className="text-2xl mb-6">
                            I'm Selene, a design engineer at <span className="font-mono">FLY</span>, where I craft intuitive
                            <br /> user experiences. After hours, I build my own projects.
                        </p>
                    </span>
                    <span
                        aria-hidden="true"
                        className="transition-transform duration-2000 transform translate-y-0"
                    >
                        <a
                            href="/about"
                            className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="flex items-center">
                                <div className="relative h-8 w-8 rounded-full overflow-hidden border border-gray-500">
                                    <img
                                        src="/images/avatar.jpg"
                                        alt="Avatar"
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                                <span className="mx-2 text-xl">About me</span>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={16} />
                            </div>
                        </a>
                    </span>
                </div>
                <Project />
                <EmailContact />
            </div>

        </div>
    );
}
