import ProjectsCard, { type ProjectsCardProps } from "./ui/ProjectsCard";

const projects: ProjectsCardProps[] = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React, Next.js, and Tailwind CSS",
    },
];

export default function Projects() {
    return (
        <section className="bg-(--bg-primary) px-6 pt-20 pb-20 sm:pt-24 sm:pb-24" id="projects">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-8 text-left text-3xl font-medium sm:mb-10 sm:text-4xl">Projects</h2>
                <div className="flex flex-col gap-4">
                    {projects.map((project) => (
                        <ProjectsCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
