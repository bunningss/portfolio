import { Dialog, DialogContent } from "@/components/ui/dialog";

export function Modal({ children, isOpen, onClose, className }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
}
