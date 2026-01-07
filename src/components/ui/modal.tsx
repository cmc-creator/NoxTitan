import * as React from "react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onOpenChange, className, children }) => {
  if (!open) return null;
  const handleClose = () => {
    if (onOpenChange) onOpenChange(false);
  };
  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", className)}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
