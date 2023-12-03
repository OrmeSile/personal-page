export const render = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  resizeCanvasViewportToCurrentSize(canvas)
  context.lineWidth = 1
  generateGrid(context, canvas)
}

const generateGrid = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const gap = 8
  const width = 20
  const height = 20
  const elementsPerLine = Math.ceil(canvas.clientWidth / (gap + width))
  const elementsPerColumn = Math.ceil(canvas.clientHeight / (gap + height))
  for(let i = 0; i < elementsPerColumn; i++){
    for(let j = 0; j < elementsPerLine; j++){
      generatePath(context, j * (gap + width), i * (gap + height), width, height)
    }
  }
}

const generatePath = (context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
  const opacityNormalized = (x + y) / (context.canvas.width + context.canvas.height)
  context.strokeStyle = `rgba(0,0,0,${opacityNormalized})`
  console.log(opacityNormalized)
  context.beginPath()
  context.moveTo(x, y)
  context.lineTo(x + width, y)
  context.lineTo(x + width, y + height)
  context.lineTo( x, y + height)
  context.lineTo(x, y)
  context.stroke()

}

export const resizeCanvasViewportToCurrentSize = (canvas: HTMLCanvasElement) => {
  if (canvas.clientWidth !== canvas.width) canvas.width = canvas.clientWidth
  if (canvas.clientHeight !== canvas.height) canvas.height = canvas.clientHeight
}

export const setResizeObserver = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const observer = new ResizeObserver(() => render(context, canvas))
  observer.observe(canvas, {box: "border-box"})
}