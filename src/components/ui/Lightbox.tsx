import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  title?: string
  subtitle?: string
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
  subtitle
}: LightboxProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowRight':
        onNext()
        break
      case 'ArrowLeft':
        onPrev()
        break
    }
  }, [isOpen, onClose, onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95" />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <img
                src={images[currentIndex]}
                alt={title || `Image ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image info overlay */}
              {(title || subtitle) && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  {title && (
                    <h3 className="text-xl font-heading font-semibold text-white mb-1">
                      {title}
                    </h3>
                  )}
                  {subtitle && (
                    <p className="text-white/80">{subtitle}</p>
                  )}
                </div>
              )}
            </motion.div>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className={clsx(
                    'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 rounded-full',
                    'bg-white/10 hover:bg-white/20 text-white transition-all',
                    'hidden md:flex items-center justify-center'
                  )}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={onNext}
                  className={clsx(
                    'absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-full',
                    'bg-white/10 hover:bg-white/20 text-white transition-all',
                    'hidden md:flex items-center justify-center'
                  )}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}

            {/* Mobile navigation */}
            {images.length > 1 && (
              <div className="flex md:hidden justify-center gap-4 mt-4">
                <button
                  onClick={onPrev}
                  className="p-3 rounded-full bg-white/10 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={onNext}
                  className="p-3 rounded-full bg-white/10 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
