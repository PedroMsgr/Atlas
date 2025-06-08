// Proveedor de contexto DnD Kit para drag & drop en listas y elementos ordenables.
// Permite envolver componentes hijos y manejar eventos de arrastre con sensores personalizados.

import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DndContextProps,
} from "@dnd-kit/core";

interface DndProviderProps {
  onDragEnd: DndContextProps["onDragEnd"];
  children: React.ReactNode;
}

export function DndProvider({ onDragEnd, children }: DndProviderProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      {children}
    </DndContext>
  );
}
