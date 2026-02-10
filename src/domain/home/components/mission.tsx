export default function Mission() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Global Access",
            description: "Breaking down geographical barriers to education worldwide"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Quality First",
            description: "Maintaining the highest standards in every course we offer"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Community Driven",
            description: "Building a supportive learning community for everyone"
        }
    ];

    return (
        <section id="mission" className="py-12 sm:py-16 lg:py-24 bg-linear-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#1C77C3]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F39237]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Our <span className="text-[#1C77C3]">Mission</span> & <span className="text-[#F39237]">Vision</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                        Empowering learners around the world to achieve their full potential through accessible, high-quality education.
                    </p>
                </div>

                {/* Main Mission Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
                    {/* What We Do */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1C77C3] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">What We Do</h3>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4">
                            At WanderLearn, we create transformative learning experiences that combine expert knowledge with innovative technology. We curate and develop courses that are practical, engaging, and designed to help you succeed in today's fast-paced world.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            From professional development to personal enrichment, we provide the tools, resources, and support you need to learn, grow, and achieve your goals. Our platform connects learners with world-class instructors and a global community of like-minded individuals.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="bg-[#1C77C3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                            To democratize education by making high-quality learning accessible to everyone, everywhere. We believe that education is the key to unlocking human potential and creating positive change in the world.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            We're committed to breaking down barriers, fostering innovation, and empowering individuals to transform their lives through continuous learning. Together, we're building a future where knowledge knows no boundaries.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                        Our Core <span className="text-[#D63230]">Values</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#1C77C3] group"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1C77C3] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                        {value.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg max-w-3xl mx-auto border-2 border-[#F39237]/20">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Join Us on This Journey
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            Be part of a global learning community that's shaping the future. Whether you're looking to advance your career, explore new interests, or transform your life, WanderLearn is here to support you every step of the way.
                        </p>
                        <button className="bg-[#1C77C3] text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Start Learning Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
