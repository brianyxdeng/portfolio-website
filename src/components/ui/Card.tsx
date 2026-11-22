import { ReactNode } from "react";

interface CardProps {
    title: string;
    id: string;
    description: ReactNode[];
}

// Separate each description with a fragment (<>, </>) when using this component
export default function Card({ title, description, id }: CardProps) {
    return (
        <section className="bg-(--bg-primary) h-full px-4 pt-36 text-white sm:px-6" id={id}>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center rounded-xl bg-(--bg-tertiary) p-6 sm:p-8 lg:p-10">
                    <div className="w-full text-left">
                        <h1 className="text-4xl font-semibold mb-8">
                            {title}
                        </h1>
                    </div>
                    <div className="w-full font-normal gap-6 flex flex-col">
                        {description.map((descriptions, index) => (
                            <p key={index} className="text-lg">
                                {descriptions}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
