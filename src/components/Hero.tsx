import Image from "next/image";
import HeroButton from "@/components/ui/HeroButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
	return (
		<section className="home box-shadow flex min-h-screen items-center justify-center px-6 py-24 sm:px-8 lg:px-12" id="home">
			<div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left">
				<div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 text-white sm:items-start">
					<p className="text-lg font-normal">Hi, I'm</p>
					<h1 className="text-[40px] font-medium leading-[1.08] sm:text-5xl lg:text-7xl">Brian Deng</h1>
					<p className="text-lg font-normal sm:text-xl">Full stack developer based in Canada.</p>

					<div className="flex flex-row gap-3 pt-2">
						<HeroButton icon={faLinkedin} label="LinkedIn" href="https://www.linkedin.com/in/brianyxdeng/" />
						<HeroButton icon={faGithub} label="GitHub" href="https://github.com/brianyxdeng" />
						<HeroButton icon={faEnvelope} label="Email" href="mailto:brian.d3.2008@gmail.com" />
					</div>
				</div>

				<div>
					<Image src="/favicon.ico" alt="Headshot" width={250} height={250} className="rounded-full border-2 border-white shadow-lg" loading="eager" priority={true} />
				</div>
			</div>
		</section>
	);
}
