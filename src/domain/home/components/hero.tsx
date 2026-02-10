
import heroImage from "@/assets/herobg.jpg";


export default function Hero() {
    return (
        <section id="home" className="relative bg-linear-to-br from-cyan-50 via-blue-50 to-orange-50 overflow-hidden min-h-screen md:min-h-0">
            {/* Decorative elements - Responsive sizing and positioning */}
            <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 sm:border-4 border-[#1C77C3]/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 sm:border-4 border-[#F39237]/20 rounded-full hidden sm:block"></div>
            <div className="absolute top-1/4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 sm:border-4 border-[#D63230]/20 rounded-full animate-bounce hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#1C77C3] text-white px-4 sm:px-6 py-2 rounded-full shadow-lg">
                            <span className="text-base sm:text-xl">👋</span>
                            <span className="font-semibold text-xs sm:text-sm">Welcome To Learn World</span>
                            <span className="text-base sm:text-xl">🎓</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
                            Your Learning Journey{' '}
                            <span className="text-[#1C77C3]">Starts Here</span>{' '}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                            We pride ourselves staying at the front of innovation, constantly pushing Shaping the Digital World Together boundaries a redefining what's possible. Proin id nisi odio.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                            <Link
                                to="/courses"
                                className="inline-flex items-center justify-center gap-2 bg-[#1C77C3] hover:bg-[#F39237] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                            >
                                Explore Courses
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#D63230] text-[#1C77C3] hover:text-white border-2 border-[#1C77C3] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                            >
                                Contact Us
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </Link>
                        </div> */}
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
                        <div className="relative">
                            {/* Decorative Circle Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#1C77C3] to-[#F39237] rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>

                            {/* Main Circle Frame - Responsive sizing */}
                            <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 sm:border-6 md:border-8 border-[#1C77C3] overflow-hidden shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt="Learning Journey"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative accent circle - Responsive sizing and positioning */}
                            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#F39237] rounded-full shadow-xl flex items-center justify-center animate-bounce">
                                <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>

                            {/* Lightning bolt decoration - Hidden on small screens */}
                            <div className="absolute -top-4 right-8 sm:-top-6 sm:right-12 text-[#D63230] opacity-60 hidden sm:block">
                                <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration - Responsive */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#1C77C3" fillOpacity="0.1" />
                </svg>
            </div>
        </section>
    );
}
