'use client'
import {useEffect, useRef} from "react";
import {
  initHomeBackgroundProgram, render,
  resizeCanvasToDisplaySize, setResizeObserver
} from "@/utils/webGLHelper";
import HomepageStyles from "@/styles/homepage/canvas.module.css"

export const HomepageCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const gl = canvasRef.current!.getContext("webgl")
    if (!gl) {
      window.alert("no webgl")
      return
    }
    const {program, buffers} = initHomeBackgroundProgram(gl)
    gl.useProgram(program)
    gl.enableVertexAttribArray(buffers.attributes.position)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.buffers.position)

    const size = 2
    const type = gl.FLOAT
    const normalize = false
    const stride = 0
    const offset = 0
    gl.vertexAttribPointer(
      buffers.attributes.position,
      size,
      type,
      normalize,
      stride,
      offset
    )
    gl.uniform2f(buffers.uniforms.resolution, gl.canvas.width, gl.canvas.height)
    render(gl)
    setResizeObserver(() => render(gl), gl.canvas)
  }, []);
  return (
    <canvas ref={canvasRef} className={HomepageStyles.canvas}></canvas>
  )
}