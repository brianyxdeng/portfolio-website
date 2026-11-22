import Image from "next/image";

export interface ProjectsCardProps {
    title: string;
    description: string;
    demoUrl?: string;
    thumbnail?: string;
}

export default function ProjectsCard({ title, description, demoUrl, thumbnail }: ProjectsCardProps) {
    return (
        <article className="flex items-center justify-between gap-4 rounded-xl border border-(--outline) bg-(--bg-secondary) p-5 sm:p-6">
            <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-xl font-medium text-(--text-primary) sm:text-2xl">{title}</h3>
                <p className="max-w-2xl text-sm text-(--text-secondary) sm:text-base">{description}</p>
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex text-sm font-medium text-(--accent) underline-offset-4 transition-colors hover:underline"
                    >
                        View demo
                    </a>
                )}
            </div>
            {thumbnail && (
                <Image
                    src={thumbnail}
                    alt={`${title} preview`}
                    width={128}
                    height={96}
                    sizes="(min-width: 640px) 128px, 80px"
                    className="h-16 w-20 shrink-0 rounded-md border border-(--outline) object-cover sm:h-24 sm:w-32"
                />
            )}
        </article>
    );
}
