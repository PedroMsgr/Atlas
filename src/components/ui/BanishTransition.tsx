import { AnimatePresence, motion, AnimatePresenceProps, MotionProps } from 'framer-motion';
import React from 'react';

interface BanishTransitionProps extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
  show: boolean; // Condición para mostrar/ocultar
  /**
   * Animation duration in seconds (default: 1)
   */
  duration?: number;
  /**
   * Optional: motion.div props for customizing the animation
   */
  motionProps?: MotionProps;
  /**
   * Optional: className for the motion.div
   */
  className?: string;
}

/**
 * BanishTransition: animación fade out/fade in condicional.
 *
 * Ejemplo de uso:
 * <BanishTransition show={isVisible}>
 *   <ContenidoAnimado />
 * </BanishTransition>
 */
export default function BanishTransition({
  children,
  show,
  duration = 1,
  motionProps = {},
  className = '',
  ...presenceProps
}: BanishTransitionProps) {
  return (
    <AnimatePresence {...presenceProps}>
      {show && (
        <motion.div
          key="banish"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration, ease: 'easeOut' }}
          className={className}
          {...motionProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
