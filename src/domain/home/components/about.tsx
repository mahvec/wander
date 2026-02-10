export default function About() {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Diverse Course Library",
            description: "Access thousands of courses across multiple disciplines, from technology to arts, business to science.",
            color: "bg-[#1C77C3]"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Interactive Learning",
            description: "Engage with hands-on projects, quizzes, and real-world applications to reinforce your knowledge.",
            color: "bg-[#F39237]"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Expert Instructors",
            description: "Learn from industry professionals and subject matter experts who bring real-world experience.",
            color: "bg-[#D63230]"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Flexible Schedule",
            description: "Learn at your own pace, anytime and anywhere. Access courses on any device, 24/7.",
            color: "bg-[#1C77C3]"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: "Certifications",
            description: "Earn recognized certificates upon course completion to showcase your achievements.",
            color: "bg-[#F39237]"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Career Growth",
            description: "Build skills that matter in today's job market and advance your career with confidence.",
            color: "bg-[#D63230]"
        }
    ];

    return (
        <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        About <span className="text-[#1C77C3]">WanderLearn</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                        WanderLearn is your gateway to endless learning opportunities. We're dedicated to making quality education accessible to everyone, everywhere. Our platform combines cutting-edge technology with expert instruction to deliver an unparalleled learning experience.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-linear-to-r from-[#1C77C3] to-[#F39237] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20 shadow-xl">
                    <div className="text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-4 sm:mb-6">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                            To empower learners worldwide by providing high-quality, accessible education that transforms lives and opens doors to new opportunities. We believe that learning should be a journey of discovery, and we're here to guide you every step of the way.
                        </p>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="mb-10 sm:mb-12 lg:mb-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                        What <span className="text-[#F39237]">We Offer</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 hover:bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 text-center"
                            >
                                {/* Circular icon container */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                                        <div className="text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <svg
                                        className="w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                {/* <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C77C3] mb-2">
                                10K+
                            </div>
                            <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                                Active Students
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F39237] mb-2">
                                500+
                            </div>
                            <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                                Expert Courses
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D63230] mb-2">
                                98%
                            </div>
                            <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                                Success Rate
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C77C3] mb-2">
                                50+
                            </div>
                            <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                                Countries Reached
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
