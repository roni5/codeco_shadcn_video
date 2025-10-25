
// components/MyPageSkeleton.js
// npm install react-loading-skeleton
// pnpm add 
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MyPageSkeleton() {
  return (
    <div>
      <h1>
        <Skeleton width={300} />
      </h1>
      <p>
        <Skeleton count={4} />
      </p>
      <Skeleton height={200} />
    </div>
  )
}