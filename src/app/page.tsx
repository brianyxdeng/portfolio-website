import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/utils/Gradient";
import Scroll from "@/components/utils/Scroll";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

/* TODO
	Add more to the projects section
	Add resume to about section
	Figure out props / and better project layout and structure
	change the noscript tag to make the box shadow and shader disappear, keep everything else the same, remove navbar button, etc.
	compatible on mobile (center the divs and make it overlap)
*/

export default function Home() {
	return (
		<>
			<Scroll />
			<Navbar />
			<Gradient />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
}
