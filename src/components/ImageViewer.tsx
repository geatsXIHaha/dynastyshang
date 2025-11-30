import { useState } from 'react'
import './ImageViewer.css'

interface ImageViewerProps {
  src: string
  alt: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  showMagnifierAlways?: boolean
  zoomLevel?: number   // ← NEW
}

const ImageViewer = ({
  src,
  alt,
  className = 'subpoint-image',
  size = 'medium',
  showMagnifierAlways = false,
  zoomLevel = 1         // default = normal size
}: ImageViewerProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const sizeClass = `image-${size}`

  return (
    <>
      {/* Thumbnail + Magnifier */}
      <div className={`image-wrapper ${sizeClass} ${showMagnifierAlways ? 'magnifier-always-visible' : ''}`}>
        <img src={src} alt={alt} className={className} />

        <button
          className="magnifier-btn"
          onClick={() => setIsModalOpen(true)}
          title="Click to enlarge"
          aria-label="Enlarge image"
        >
          🔍
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="image-modal" onClick={() => setIsModalOpen(false)}>

    {/* Close button fixed to screen */}
    <button
      className="close-btn"
      onClick={() => setIsModalOpen(false)}
      aria-label="Close modal"
    >
      ✕
    </button>

    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={src}
        alt={alt}
        className="modal-image"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
      />
    </div>
  </div>
)}

    </>
  )
}

export default ImageViewer
