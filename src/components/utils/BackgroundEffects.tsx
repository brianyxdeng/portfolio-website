"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BackgroundEffectsContextValue {
	enabled: boolean;
	toggle: () => void;
}

const BackgroundEffectsContext = createContext<BackgroundEffectsContextValue | null>(null);

export function BackgroundEffectsProvider({ children }: { children: ReactNode }) {
	const [enabled, setEnabled] = useState(true);
	const toggle = () => setEnabled((current) => !current);

	return (
		<BackgroundEffectsContext.Provider value={{ enabled, toggle }}>
			<div className={enabled ? undefined : "background-effects-disabled"}>{children}</div>
		</BackgroundEffectsContext.Provider>
	);
}

export function useBackgroundEffects() {
	const context = useContext(BackgroundEffectsContext);
	if (!context) {
		throw new Error("useBackgroundEffects must be used within BackgroundEffectsProvider");
	}
	return context;
}
