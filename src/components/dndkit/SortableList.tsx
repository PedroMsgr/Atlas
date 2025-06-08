// Componente para crear una lista ordenable con DnD Kit.
// Permite envolver elementos hijos y definir la estrategia de ordenación.

import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface SortableListProps {
  items: string[];
  children: React.ReactNode;
  strategy?: typeof verticalListSortingStrategy;
  className?: string;
}

const SortableList: React.FC<SortableListProps> = ({
  items,
  children,
  strategy = verticalListSortingStrategy,
  className,
}) => {
  return (
    <SortableContext items={items} strategy={strategy}>
      <div className={className}>{children}</div>
    </SortableContext>
  );
};

export default SortableList;
