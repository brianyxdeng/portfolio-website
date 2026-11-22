import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/utils/Gradient";
import Scroll from "@/components/utils/Scroll";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { BackgroundEffectsProvider } from "@/components/utils/BackgroundEffects";

/* TODO
	Add more to the projects section
	Add resume to about section
	Figure out props / and better project layout and structure
*/

export default function Home() {
	return (
		<BackgroundEffectsProvider>
			<Scroll />
			<Navbar />
			<Gradient />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</BackgroundEffectsProvider>
	);
}
