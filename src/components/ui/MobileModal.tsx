import { ReactNode } from "react";

interface MobileModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

export default function MobileModal({
  open,
  onClose,
  title,
  children,
}: MobileModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/40">
      <div className="flex-1" onClick={onClose} />
      <div className="bg-white dark:bg-zinc-900 w-full rounded-t-lg shadow-lg p-4 animate-slide-up">
        {title && (
          <div className="font-semibold text-lg mb-2 text-center">{title}</div>
        )}
        {children}
      </div>
    </div>
  );
}
