"use client";
import { usePreviewModal } from "@/hooks/controllers";
import { Modal } from "./modal";

export function PreviewModal() {
  const { isOpen, onClose, src } = usePreviewModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full md:w-[90vw]">
      <iframe src={src} frameborder="0" className="w-full h-[90vh]"></iframe>
    </Modal>
  );
}
