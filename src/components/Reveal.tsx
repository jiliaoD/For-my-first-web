import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 28,
        filter: reduceMotion ? 'none' : 'blur(10px)',
      }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.72, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
