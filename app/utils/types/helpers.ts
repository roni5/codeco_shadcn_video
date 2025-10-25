import type React from 'react'

export type SVGProps = React.SVGProps<SVGSVGElement>

export interface IPost {
  children: React.ReactNode
  authorId: number
  id: number
  title: string
  body: string
}

export interface IPosts {
  posts: IPost[]
}
