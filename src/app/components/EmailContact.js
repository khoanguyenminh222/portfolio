import React from 'react'

function EmailContact() {
    return (
        <div className="flex flex-col items-center lg:p-8 p-4 mb-8 w-full max-w-screen-lg mx-auto relative bg-white border border-neutral-300 rounded-lg overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 filter contrast-150 bg-gradient-to-tr from-black via-black to-indigo-900" />
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-transparent opacity-20" />

            <h1 className="relative text-2xl lg:text-4xl font-bold mb-4 z-10 text-center">
                Subscribe to Selene's Newsletter
            </h1>
            <p className="relative text-base mb-6 max-w-md text-center z-10">
                I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.
            </p>
            <form
                action="https://url/subscribe/post?parameters"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="relative flex flex-col items-center w-full max-w-md z-10"
            >
                <div className="flex w-full gap-4">
                    <input
                        formNoValidate
                        required
                        id="mce-EMAIL"
                        placeholder="Email"
                        className="flex-1 p-3 border border-neutral-300 rounded-md"
                        aria-invalid="false"
                        type="email"
                        name="EMAIL"
                    />
                    <button
                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        id="mc-embedded-subscribe"
                        value="Subscribe"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmailContact