import { ReactLenis } from "lenis/react";

export default function Scroll() {
	return <ReactLenis root options={{ anchors: { offset: 0 } }} />;
}
