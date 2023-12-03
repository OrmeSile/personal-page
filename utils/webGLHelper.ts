import {fragment} from "@/shaders/homepage/canvas/fragment";
import {vertex} from "@/shaders/homepage/canvas/vertex";

export const initWebGL = (canvas: HTMLCanvasElement | OffscreenCanvas) => {
  const gl = canvas.getContext("webgl")
  if (!gl) {
    window.alert("no webgl")
    return
  }
  const {program, programInfo} = initHomeBackgroundProgram(gl)
  gl.useProgram(program)
  render(gl, programInfo)
  setResizeObserver(() => render(gl, programInfo), gl.canvas)
}

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
  const programInfo = initBuffers(gl, program)
  return {program, programInfo}
}

const initBuffers = (gl: WebGLRenderingContext, program: WebGLProgram) : ProgramInfo => {
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
  const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution")!
  const colorUniformLocation = gl.getUniformLocation(program, "u_color")!
  const positionBuffer = gl.createBuffer()!
  return {
    attributes: {
      position: positionAttributeLocation,
    },
    uniforms: {
      resolution: resolutionUniformLocation,
      color: colorUniformLocation,
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

export const render = (gl: WebGLRenderingContext, programInfo : ProgramInfo) => {
  gl.clearColor(0.1,0.1,0.1,1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  resizeCanvasToDisplaySize(gl.canvas)
  gl.uniform2f(programInfo.uniforms.resolution, gl.canvas.width, gl.canvas.height)
  gl.viewport(0,0,gl.canvas.width, gl.canvas.height)
  drawGrid(gl, programInfo)
}

const drawGrid = (gl: WebGLRenderingContext, programInfo: ProgramInfo) => {
  const gap = 9
  const width = 5
  const height = 5
  let yOffset = 0
  let xOffset = 0
  const canvasHeight = gl.canvas.height
  const canvasWidth = gl.canvas.width
  const widthIterations = Math.ceil(canvasWidth/(gap + width)) + 1
  const heightIterations = Math.ceil(canvasHeight/(gap + height)) + 1
  let positions : number[] = []
  for(let i = 0; i < heightIterations; i++){
    for(let j = 0; j < widthIterations; j++){
      gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffers.position)
      const size = 2;          // 2 components per iteration
      const type = gl.FLOAT;   // the data is 32bit floats
      const normalize = false; // don't normalize the data
      const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
      const offset = 0;        // start at the beginning of the buffer
      gl.enableVertexAttribArray(programInfo.attributes.position)
      gl.vertexAttribPointer(
        programInfo.attributes.position, size, type, normalize, stride, offset)

      positions = [
        gap + xOffset, gap + yOffset,
        gap + width + xOffset, gap + yOffset,
        gap + xOffset , gap + height + yOffset,
        gap + xOffset , gap + height + yOffset,
        gap + width + xOffset, gap + yOffset,
        gap + width + xOffset,gap + height + yOffset
      ]
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
      if(Math.random() > i / j) {
        gl.uniform4f(programInfo.uniforms.color, (Math.random() / 10) + 0.1, (Math.random() / 4) + 0.25, (Math.random() / 2) + 0.5, 1)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }
      xOffset = j * (gap + width)
    }
    yOffset = i * (gap + height)
  }
}

