// Diálogo de confirmación de borrado reutilizable para escritorio y móvil.
// Usa MobileModal en móvil y AlertDialog (shadcn) en escritorio, mostrando botones Atlas personalizados.
// Props:
//   - open: controla la visibilidad del diálogo.
//   - name: nombre del elemento a eliminar (se muestra en el mensaje).
//   - loading: muestra estado de carga en los botones.
//   - onCancel: callback al cancelar.
//   - onConfirm: callback al confirmar borrado.
//   - description: mensaje personalizado opcional.
//   - title: título del diálogo.
//   - children: permite renderizar contenido adicional dentro del modal.
// Internamente, adapta el diseño y controles según el dispositivo (mobile/desktop).

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
import { AtlasButton } from "./AtlasButton";

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
          <AtlasButton
            type="button"
            variant="delete"
            className="w-full"
            disabled={loading}
            onClick={onConfirm}
            style={{ minHeight: 44 }}
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </AtlasButton>
          <AtlasButton
            type="button"
            variant="cancel"
            className="w-full"
            disabled={loading}
            onClick={onCancel}
            style={{ minHeight: 44 }}
          >
            Cancelar
          </AtlasButton>
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
