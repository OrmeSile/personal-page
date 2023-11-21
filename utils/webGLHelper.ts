import {fragment} from "@/shaders/homepage/canvas/fragment";
import {vertex} from "@/shaders/homepage/canvas/vertex";

const createShader = (
  gl: WebGLRenderingContext,
  type: FragmentShaderType | VertexShaderType,
  source: string
) => {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader
  }
  window.alert(gl.getShaderInfoLog(shader))
  gl.deleteShader(shader)
}

const createProgram = (
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) => {
  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if(gl.getProgramParameter(program, gl.LINK_STATUS)){
    return program
  }
  window.alert(gl.getProgramInfoLog(program))
  gl.deleteProgram(program)
}

export const initHomeBackgroundProgram = (gl: WebGLRenderingContext) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex)!
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment)!
  const program = createProgram(gl, vertexShader, fragmentShader)!
  const buffers = initBuffers(gl, program)
  return {program, buffers}
}

const initBuffers = (gl: WebGLRenderingContext, program: WebGLProgram) => {
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
  const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution")
  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  const positions = [
    10, 20,
    80, 20,
    10, 30,
    10, 30,
    80, 20,
    80, 30,
  ]
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
  return {
    attributes: {
      position: positionAttributeLocation,
    },
    uniforms: {
      resolution: resolutionUniformLocation,
    },
    buffers: {
      position: positionBuffer,
    }
  }
}

export const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement | OffscreenCanvas) => {
  if(canvas instanceof OffscreenCanvas) return false
  const displayWidth = canvas.clientWidth
  const displayHeight = canvas.clientHeight

  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight

  if(needResize) {
    canvas.width = displayWidth
    canvas.height = displayHeight
  }

  return needResize
}

export const setResizeObserver = (render: () => void, canvas: HTMLCanvasElement | OffscreenCanvas) => {
  if(canvas instanceof OffscreenCanvas) return
  const resizeObserver = new ResizeObserver(render)
  resizeObserver.observe(canvas, {box: "content-box"})
}

export const render = (gl: WebGLRenderingContext) => {
  resizeCanvasToDisplaySize(gl.canvas)
  gl.viewport(0,0,gl.canvas.width, gl.canvas.height)
  gl.clearColor(0,0,0,1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  const primitiveType = gl.TRIANGLES
  const vertexOffset = 0
  const count = 6
  gl.drawArrays(primitiveType, vertexOffset, count)
}