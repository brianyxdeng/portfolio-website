import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 bg-(--bg-primary)">
            <p className="text-sm">
                © {new Date().getFullYear()} by <Link href="https://github.com/brianyxdeng/" target="_blank">Brian Deng.</Link> All rights reserved.
            </p>
        </footer>
    );
}
