import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui-shadcn/alert-dialog';
import { ReactNode } from 'react';

interface ConfirmDeleteDialogProps {
  open: boolean;
  name: string | null;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  description?: string;
  title?: string;
  children?: ReactNode;
}

export default function ConfirmDeleteDialog({
  open,
  name,
  loading,
  onCancel,
  onConfirm,
  description,
  title = '¿Eliminar elemento?',
  children
}: ConfirmDeleteDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={open => { if (!open) onCancel(); }}>
      {children}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description || `¿Estás seguro de que deseas eliminar "${name}"? Esta acción no se puede deshacer.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={onConfirm}>
            {loading ? 'Eliminando...' : 'Eliminar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
