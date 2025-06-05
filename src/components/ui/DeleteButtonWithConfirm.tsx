import ConfirmDeleteDialog from '@/components/ui/ConfirmDeleteDialog';
import { Button as RadixButton } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

interface DeleteButtonWithConfirmProps {
  id: string;
  name: string;
  loading?: boolean;
  onConfirm: () => void;
  title?: string;
  description?: string;
  ariaLabel?: string;
}

export default function DeleteButtonWithConfirm({
  id,
  name,
  loading,
  onConfirm,
  title = '¿Eliminar elemento?',
  description,
  ariaLabel
}: DeleteButtonWithConfirmProps) {
  const [open, setOpen] = useState(false);
  return (
    <ConfirmDeleteDialog
      open={open}
      name={name}
      loading={loading}
      onCancel={() => setOpen(false)}
      onConfirm={onConfirm}
      title={title}
      description={description}
    >
      <RadixButton
        color="red"
        variant="soft"
        size="1"
        onClick={e => { e.stopPropagation?.(); setOpen(true); }}
        disabled={loading}
        aria-label={ariaLabel || `Eliminar ${name}`}
      >
        <TrashIcon />
      </RadixButton>
    </ConfirmDeleteDialog>
  );
}
