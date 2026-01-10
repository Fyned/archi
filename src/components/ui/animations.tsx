import { motion, type HTMLMotionProps, type Transition } from 'framer-motion'
import { type ReactNode } from 'react'

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
}

// Transition presets
export const springTransition: Transition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 15
}

export const smoothTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut'
}

// Motion components with common animations
interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

export function FadeInUp({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={smoothTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInDown({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInDown}
      transition={smoothTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInLeft}
      transition={smoothTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInRight}
      transition={smoothTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleIn}
      transition={springTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends MotionDivProps {
  fast?: boolean
}

export function StaggerContainer({ children, fast = false, ...props }: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={fast ? staggerContainerFast : staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover animations for cards
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5 }
}

export function HoverCard({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      transition={springTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
interface ParallaxProps extends MotionDivProps {
  offset?: number
}

export function ParallaxSection({ children, offset = 50, ...props }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Counter animation for stats
export function CountUp({
  value,
  suffix = ''
}: {
  value: number
  suffix?: string
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  )
}

// Pulse animation for CTAs
export function PulseGlow({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(230, 126, 34, 0.4)',
          '0 0 0 10px rgba(230, 126, 34, 0)',
          '0 0 0 0 rgba(230, 126, 34, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop'
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
