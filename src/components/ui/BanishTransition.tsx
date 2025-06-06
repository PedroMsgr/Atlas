import { AnimatePresence, motion, AnimatePresenceProps, MotionProps } from 'framer-motion';
import React from 'react';

interface BanishTransitionProps extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
  show: boolean; // Condición para mostrar/ocultar
  /**
   * Duración de la animación en segundos (por defecto: 1)
   */
  duration?: number;
  /**
   * Customizar la animación con props de motion.div
   */
  motionProps?: MotionProps;
  /**
   * Estilos adicionales para el contenedor
   */
  className?: string;
}

/**
 * @function BanishTransition: animación fade out/fade condicional.
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
