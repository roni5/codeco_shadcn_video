import AnimatedPathDrawing, { PathShape } from "./AnimatedPathDrawing"

export function CustomExample() {
  const customShapes: PathShape[] = [
    { type: "circle", props: { cx: 150, cy: 150, r: 100 }, stroke: "#ff6b6b", delay: 0.5 },
    { type: "rect", props: { width: 200, height: 200, x: 300, y: 50, rx: 30 }, stroke: "#4ecdc4", delay: 1 },
    { type: "line", props: { x1: 150, y1: 300, x2: 400, y2: 300 }, stroke: "#ffe66d", delay: 1.5 },
  ]

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-gray-900 min-h-screen">
      <div>
        <h2 className="text-white text-2xl mb-4">Default Animation</h2>
      </div>  
      <div>
        <AnimatedPathDrawing
          shapes={customShapes}
          strokeWidth={15}
          springDuration={2}
          maxWidth="60vw"
        />
      </div>
    </div>
  )
}