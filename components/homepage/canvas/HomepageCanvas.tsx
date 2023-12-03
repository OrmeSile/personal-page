'use client'
import {useEffect, useRef} from "react";
import homepageStyles from "@/styles/homepage/canvas.module.css"
import {initWebGL} from "@/utils/webGLHelper";

export const HomepageCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if(!canvasRef.current) return
    const context = canvasRef.current.getContext("webgl")
    if(!context) return
    initWebGL(canvasRef.current)
  },[]);
  return (
    <div className={homepageStyles.container}>
      <canvas key={'canvas'} ref={canvasRef} className={homepageStyles.canvas}></canvas>
    </div>
)
}
