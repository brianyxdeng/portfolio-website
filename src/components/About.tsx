import Link from "next/link";
import Card from "./ui/Card";

export default function About() {
    return (
        <Card
            title="About"
            id="about"
            description={[
                <>
                    Hey 👋, I&apos;m Brian Deng, a full stack developer currently living in {" "}
                    <Link className="hover:underline" href={"https://www.google.ca/maps?q=vancouver+bc+canada"} target="_blank" rel="noopener noreferrer">
                        Vancouver
                    </Link>. 
                    Click {" "}
                    <Link className="font-bold hover:underline" href="" target="_blank" rel="noopener noreferrer">
                        here
                    </Link>
                    {" "} for my resume.
                </>,
                <>
                    I&apos;m also a computer science student at UBC with over six years of combined experience with full-stack development, JavaScript/TypeScript, and Python. 
                    My stack includes Next.js, React, Express, MongoDB, and Redux. 
                </>,
                <>
                    I&apos;m always looking for new opportunities to learn and improve. Feel free to reach out at {" "}
                    <Link className="font-bold hover:underline" href={"mailto:brian.d3.2008@gmail.com"} target="_blank" rel="noopener noreferrer">
                        brian.d3.2008@gmail.com
                    </Link>
                    !
                </>
            ]}
        />
    );
}


