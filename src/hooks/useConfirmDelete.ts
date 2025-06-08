// Hook personalizado para gestionar la apertura y cierre de un diálogo de confirmación de borrado.
// Proporciona el estado de visibilidad, el id y nombre del elemento a eliminar, y funciones para abrir/cerrar el diálogo.
// Útil para componentes que requieren confirmación antes de eliminar un recurso.
//
// Retorna:
//   open: booleano que indica si el diálogo está abierto
//   id: id del elemento a eliminar
//   name: nombre del elemento a eliminar
//   openDialog: función para abrir el diálogo con id y nombre
//   closeDialog: función para cerrar el diálogo y limpiar el estado

import { useState, useCallback } from "react";

interface UseConfirmDelete {
  open: boolean;
  id: string | null;
  name: string | null;
  openDialog: (id: string, name: string) => void;
  closeDialog: () => void;
}

export function useConfirmDelete(): UseConfirmDelete {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const openDialog = useCallback((id: string, name: string) => {
    setId(id);
    setName(name);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    setId(null);
    setName(null);
  }, []);

  return { open, id, name, openDialog, closeDialog };
}
