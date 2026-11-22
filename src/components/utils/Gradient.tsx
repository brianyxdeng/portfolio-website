"use client";

import { CanvasHTMLAttributes, DetailedHTMLProps, useLayoutEffect, useRef } from "react";
import shader from "@/utils/shader";

import styles from "@/styles/gradient.module.css";

interface ShaderDimensions {
	width: number;
	height: number;
}

interface ShaderWebBackground {
	shade: (options: {
		canvas: HTMLCanvasElement;
		shaders: {
			Image: {
				uniforms: {
					iTime: (gl: WebGLRenderingContext, loc: WebGLUniformLocation | null) => void;
					iResolution: (gl: WebGLRenderingContext, loc: WebGLUniformLocation | null, ctx: ShaderDimensions) => void;
				};
			};
		};
	}) => void;
}

declare global {
	let shaderWebBackground: ShaderWebBackground;
}

export default function Gradient(props: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const shaderRef = useRef<HTMLScriptElement>(null);

	function shade() {
		const canvas = canvasRef.current;
		if (!canvas) return;

		shaderWebBackground.shade({
			canvas,
			shaders: {
				Image: {
					uniforms: {
						iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
						iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
					},
				},
			},
		});
	}

	useLayoutEffect(shade, [canvasRef]);

	return (
		<>
			<script src="https://xemantic.github.io/shader-web-background/dist/shader-web-background.min.js" defer={true}/>
			<script ref={shaderRef} type="x-shader/x-fragment" id="Image" dangerouslySetInnerHTML={{ __html: shader }} />
			<canvas {...props} className={`shader-background ${styles.canvas} ${styles.fallback}`} ref={canvasRef} />
		</>
	);
}
