'use client'

const HoverText = ({
  text = 'Hover Word',
  className = '',
  fontSize = 'text-8xl',
}) => {
  const styles: React.CSSProperties = {
    WebkitTextFillColor: 'transparent',
    WebkitTextStrokeColor: 'currentColor',
    WebkitTextStrokeWidth: '0.012em',
    position: 'relative',
    display: 'inline-block',
    margin: 0,
  }

  return (
    <div className="w-full text-center">
      <style jsx global>{`
        .text-outline-hover::before {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 0;
          width: 100%;
          overflow: hidden;
          margin-bottom: 9px;
          white-space: nowrap;
          content: attr(data-text);
          transition: max-width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
          -webkit-text-fill-color: currentColor;
        }
        
        .text-outline-hover:hover::before {
          max-width: 100%;
          padding: 2px;
        }
      `}</style>

      <h1
        className={`text-outline-hover ${fontSize} ${className}`}
        style={styles}
        data-text={text}
      >
        {text}
      </h1>
    </div>
  )
}

export { HoverText }
