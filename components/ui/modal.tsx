"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="bg-gray-950 text-white max-w-4xl border-gray-800">
        <DialogHeader className="pt-4">
          <DialogTitle className="text-white">{title}</DialogTitle>
          <DialogDescription className="text-base mt-6 pt-2">{description}</DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-96">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;