import { useState, useCallback } from 'react';

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
