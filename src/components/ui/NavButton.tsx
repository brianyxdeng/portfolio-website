import { useBackgroundEffects } from "@/components/utils/BackgroundEffects";

export default function NavButton() {
	const { enabled, toggle } = useBackgroundEffects();

    return (
        <label className="background-toggle flex cursor-pointer select-none items-center gap-2 text-xs text-(--text-secondary)">
            <span className="hidden sm:inline">Background</span>
            <input
                type="checkbox"
				checked={enabled}
				onChange={toggle}
                aria-label="Toggle animated background"
                className="peer sr-only"
            />
            <span className="relative block h-6 w-11 rounded-full bg-(--bg-tertiary) transition-colors duration-150 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--purple)">
				<span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-150 ${enabled ? "translate-x-5" : "translate-x-0"}`} />
            </span>
        </label>
    );
}
