import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui-shadcn/alert-dialog";
import { ReactNode } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import MobileModal from "@/components/ui/MobileModal";

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
  title = "¿Eliminar elemento?",
  children,
}: ConfirmDeleteDialogProps) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <MobileModal open={open} onClose={onCancel} title={title}>
        <div className="text-base mb-4 text-center">
          {description ||
            `¿Estás seguro de que deseas eliminar "${name}"? Esta acción no se puede deshacer.`}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-400"
            disabled={loading}
            onClick={onConfirm}
            style={{ minHeight: 44 }}
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </button>
          <button
            type="button"
            className="w-full border border-zinc-300 dark:border-zinc-700 py-2 rounded bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            disabled={loading}
            onClick={onCancel}
            style={{ minHeight: 44 }}
          >
            Cancelar
          </button>
        </div>
        {children}
      </MobileModal>
    );
  }
  return (
    <AlertDialog
      open={open}
      onOpenChange={(open) => {
        if (!open) onCancel();
      }}
    >
      {children}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description ||
              `¿Estás seguro de que deseas eliminar "${name}"? Esta acción no se puede deshacer.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={onConfirm}>
            {loading ? "Eliminando..." : "Eliminar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
