import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeroButtonProps {
    icon: IconDefinition;
    label: string;
    className?: string;
    href?: string;
}

export default function HeroButton({ icon, label, className, href }: HeroButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-11 w-11 items-center justify-center rounded-lg border border-(--outline) bg-(--bg-secondary) text-(--foreground) transition-colors duration-150 hover:bg-(--bg-tertiary) focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--purple) ${className ?? ""}`}
        >
            <FontAwesomeIcon icon={icon} aria-hidden="true" />
        </a>
    );
}
