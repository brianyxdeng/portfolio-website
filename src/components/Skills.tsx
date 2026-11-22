import SkillsCard from "./ui/SkillsCard";

export default function Skills() {
    return (
        <section className="relative flex justify-center bg-(--bg-primary) px-6 pt-20 pb-0 sm:pt-24" id="skills">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-8 sm:mb-10">
                    <h2 className="text-left text-3xl font-medium sm:text-4xl">Skills</h2>
                </div>
                <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                    <SkillsCard icon="/icons/js-icon.svg" text="JavaScript"/>
                    <SkillsCard icon="/icons/ts-icon.svg" text="TypeScript"/>
                    <SkillsCard icon="/icons/python-icon.svg" text="Python"/>
                    <SkillsCard icon="/icons/next-icon.svg" text="Next.js"/>
                    <SkillsCard icon="/icons/react-icon.svg" text="React.js"/>
                    <SkillsCard icon="/icons/tailwind-icon.svg" text="Tailwind CSS"/>
                    <SkillsCard icon="/icons/nodejs-icon.svg" text="Node.js"/>
                    <SkillsCard icon="/icons/express-icon.svg" text="Express.js"/>
                    <SkillsCard icon="/icons/git-icon.svg" text="Git"/>
                </div>
            </div>
        </section>
    );
}
