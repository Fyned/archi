import { type ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={clsx('aspect-video overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('p-6', className)}>
      {children}
    </div>
  )
}
