type FragmentShaderType = 35632
type VertexShaderType = 35633
type ProgramInfo = {
  attributes: {
    position: number,
  },
  uniforms: {
    resolution: WebGLUniformLocation,
    color: WebGLUniformLocation
  },
  buffers: {
    position: WebGLBuffer,
  }
}