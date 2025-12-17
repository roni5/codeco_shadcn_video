"use client"

import { motion, Variants } from "framer-motion"

export interface PathShape {
  type: "circle" | "line" | "rect"
  props: {
    cx?: number
    cy?: number
    r?: number
    x1?: number
    y1?: number
    x2?: number
    y2?: number
    x?: number
    y?: number
    width?: number
    height?: number
    rx?: number
  }
  stroke: string
  delay: number
}

interface AnimatedPathDrawingProps {
  shapes?: PathShape[]
  width?: number
  height?: number
  viewBox?: string
  strokeWidth?: number
  springDuration?: number
  springBounce?: number
  maxWidth?: string
}

const defaultShapes: PathShape[] = [
  { type: "circle", props: { cx: 100, cy: 100, r: 80 }, stroke: "#ff0088", delay: 1 },
  { type: "line", props: { x1: 220, y1: 30, x2: 360, y2: 170 }, stroke: "#8df0cc", delay: 2 },
  { type: "line", props: { x1: 220, y1: 170, x2: 360, y2: 30 }, stroke: "#8df0cc", delay: 2.5 },
  { type: "rect", props: { width: 140, height: 140, x: 410, y: 30, rx: 20 }, stroke: "#0d63f8", delay: 3 },
  { type: "circle", props: { cx: 100, cy: 300, r: 80 }, stroke: "#0d63f8", delay: 2 },
  { type: "line", props: { x1: 220, y1: 230, x2: 360, y2: 370 }, stroke: "#ff0088", delay: 3 },
  { type: "line", props: { x1: 220, y1: 370, x2: 360, y2: 230 }, stroke: "#ff0088", delay: 3.5 },
  { type: "rect", props: { width: 140, height: 140, x: 410, y: 230, rx: 20 }, stroke: "#8df0cc", delay: 4 },
  { type: "circle", props: { cx: 100, cy: 500, r: 80 }, stroke: "#8df0cc", delay: 3 },
  { type: "line", props: { x1: 220, y1: 430, x2: 360, y2: 570 }, stroke: "#0d63f8", delay: 4 },
  { type: "line", props: { x1: 220, y1: 570, x2: 360, y2: 430 }, stroke: "#0d63f8", delay: 4.5 },
  { type: "rect", props: { width: 140, height: 140, x: 410, y: 430, rx: 20 }, stroke: "#ff0088", delay: 5 },
]

export default function AnimatedPathDrawing({
  shapes = defaultShapes,
  width = 600,
  height = 600,
  viewBox = "0 0 600 600",
  strokeWidth = 10,
  springDuration = 1.5,
  springBounce = 0,
  maxWidth = "80vw",
}: AnimatedPathDrawingProps) {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: springDuration, bounce: springBounce },
        opacity: { delay, duration: 0.01 },
      },
    }),
  }

  const shapeStyle: React.CSSProperties = {
    strokeWidth,
    strokeLinecap: "round",
    fill: "transparent",
  }

  const renderShape = (shape: PathShape, index: number) => {
    const commonProps = {
      stroke: shape.stroke,
      variants: draw,
      custom: shape.delay,
      style: shapeStyle,
    }

    switch (shape.type) {
      case "circle":
        return <motion.circle key={index} {...commonProps} {...shape.props} />
      case "line":
        return <motion.line key={index} {...commonProps} {...shape.props} />
      case "rect":
        return <motion.rect key={index} {...commonProps} {...shape.props} />
      default:
        return null
    }
  }

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={viewBox}
      initial="hidden"
      animate="visible"
      style={{ maxWidth }}
    >
      {shapes.map(renderShape)}
    </motion.svg>
  )
}