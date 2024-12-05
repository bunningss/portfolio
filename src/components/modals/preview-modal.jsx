"use client";
import { usePreviewModal } from "@/hooks/controllers";
import { Modal } from "./modal";

export function PreviewModal() {
  const { isOpen, onClose, src } = usePreviewModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="w-full md:w-[90vw] h-[70vh]"
    >
      <iframe src={src} frameborder="0" className="w-full h-full"></iframe>
    </Modal>
  );
}
