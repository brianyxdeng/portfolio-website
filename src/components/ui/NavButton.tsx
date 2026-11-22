import { useState } from "react";

export default function NavButton() {
    const [isShaderEnabled, setIsShaderEnabled] = useState(true);
    const [isBoxShadowEnabled, setIsBoxShadowEnabled] = useState(true);
    const toggleShader = () => {
        if (isShaderEnabled) {
            document.querySelector("canvas")?.classList.add("hidden");
        } else {
            document.querySelector("canvas")?.classList.remove("hidden");
        }
        setIsShaderEnabled(!isShaderEnabled);
    };

    const toggleBoxShadow = () => {
        const heroSection = document.querySelector(".home");
        if (isBoxShadowEnabled) {
            heroSection?.classList.remove("box-shadow");
        } else {
            heroSection?.classList.add("box-shadow");
        }
        setIsBoxShadowEnabled(!isBoxShadowEnabled);
    };

    const handleClick = () => {
        toggleShader();
        toggleBoxShadow();
    };

    return (
        <label className="background-toggle flex cursor-pointer select-none items-center gap-2 text-xs text-(--text-secondary)">
            <span className="hidden sm:inline">Background</span>
            <input
                type="checkbox"
                checked={isShaderEnabled}
                onChange={handleClick}
                aria-label="Toggle animated background"
                className="peer sr-only"
            />
            <span className="relative block h-6 w-11 rounded-full bg-(--bg-tertiary) transition-colors duration-150 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--purple)">
                <span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-150 ${isShaderEnabled ? "translate-x-5" : "translate-x-0"}`} />
            </span>
        </label>
    );
}
