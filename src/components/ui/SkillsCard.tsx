import Image from "next/image";

interface SkillsCardProps {
    icon: string;
    text: string;
}

export default function SkillsCard({ icon, text }: SkillsCardProps) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-(--outline) bg-(--bg-secondary) px-4 py-3">
            <Image src={icon} alt={`${text} logo`} width={24} height={24} className="h-6 w-6 shrink-0 object-contain" />
            <p className="text-sm font-medium text-(--text-primary)">{text}</p>
        </div>
    );
}
