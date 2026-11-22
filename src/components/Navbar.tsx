"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import NavButton from "./ui/NavButton";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 75);
    });

    return (
        <motion.header
            className="nav-shell fixed left-4 right-4 top-4 z-50 mx-auto flex h-14 max-w-4xl items-center rounded-xl border border-(--outline) px-3 font-medium sm:px-5"
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex shrink-0 items-center justify-center pr-3 sm:pr-6">
                <Link href="/" className="text-sm font-medium text-(--text-primary)">Home</Link>
            </div>
            <ul className="flex min-w-0 flex-1 items-center justify-center gap-3 sm:gap-8">
                <li>
                    <Link href="#about" className="text-sm text-(--text-secondary) transition-colors duration-150 hover:text-(--text-primary)">About</Link>
                </li>
                <li>
                    <Link href="#skills" className="text-sm text-(--text-secondary) transition-colors duration-150 hover:text-(--text-primary)">Skills</Link>
                </li>
                <li>
                    <Link href="#projects" className="text-sm text-(--text-secondary) transition-colors duration-150 hover:text-(--text-primary)">Projects</Link>
                </li>
            </ul>

            <div className="flex items-center justify-center">
                <NavButton />
            </div>
        </motion.header>
    );
}
