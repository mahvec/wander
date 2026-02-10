import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Mission from "./components/mission";


export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Mission />
            <Contact />
        </div>
    )
}
