'use client'

export default function Spinner() {
  return (
    <>
      {/* The @keyframes animation is defined globally but scoped
        by the component, keeping it clean and self-contained.
      */}
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: '10vh',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            border: '5px solid rgba(255, 255, 255, 0.2)',
            borderTopColor: '#d1d1d1',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      </div>
    </>
  )
}