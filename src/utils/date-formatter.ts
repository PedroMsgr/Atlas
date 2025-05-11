// Utilidad para formatear fechas de manera segura

/**
 * Formatea una fecha en formato legible para el usuario
 * @param dateString - Cadena que representa una fecha
 * @param format - Formato de salida ('full' para fecha y hora, 'date' solo para fecha)
 * @param fallback - Texto a mostrar si hay error
 * @returns Fecha formateada o texto alternativo en caso de error
 */
export function formatDate(
  dateString: string | Date | null | undefined, 
  format: 'full' | 'date' = 'full',
  fallback: string = 'No disponible'
): string {
  if (!dateString) return fallback;
  
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return fallback;
    }
    
    if (format === 'full') {
      return date.toLocaleString();
    } else {
      return date.toLocaleDateString();
    }
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return fallback;
  }
}
