import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export type AtlasButtonVariant =
  | "primary"
  | "success"
  | "cancel"
  | "delete"
  | "update"
  | "dashboard-primary"
  | "dashboard-secondary"
  | "next"
  | "back"
  | "upload"
  | "login";

export interface AtlasButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AtlasButtonVariant;
  asChild?: boolean;
}

const variantStyles: Record<AtlasButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 focus:ring-blue-400 rounded-2xl py-2.5 px-5 text-base font-semibold shadow-md",
  login:
    "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 focus:ring-blue-400 rounded-2xl py-2.5 px-5 text-base font-semibold shadow-md",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 rounded-2xl py-2 px-4 text-sm font-medium",
  cancel:
    "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400 rounded-2xl py-2 px-4 text-sm font-medium",
  delete:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 rounded-2xl py-2 px-4 text-sm font-medium",
  update:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 rounded-2xl py-2 px-4 text-sm font-medium",
  next: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 rounded-2xl py-2 px-4 text-sm font-medium",
  back: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300 rounded-2xl py-2 px-4 text-sm font-medium",
  upload:
    "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-400 rounded-2xl py-2 px-4 text-sm font-medium",
  "dashboard-primary":
    "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-500 rounded-md py-1.5 px-4 text-sm font-medium",
  "dashboard-secondary":
    "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400 rounded-md py-1.5 px-4 text-sm font-medium",
};

// Ajuste: padding y fuente base más compactos
const baseStyles =
  "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2 min-w-[96px] max-w-full break-words whitespace-normal text-center";

export const AtlasButton = React.forwardRef<
  HTMLButtonElement,
  AtlasButtonProps
>(({ className, variant = "primary", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
});
AtlasButton.displayName = "AtlasButton";
