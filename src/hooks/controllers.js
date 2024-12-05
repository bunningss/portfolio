import { create } from "zustand";

export const usePreviewModal = create((set) => ({
  src: null,
  isOpen: false,
  onOpen: (url) => set({ isOpen: true, src: url }),
  onClose: () => set({ isOpen: false, src: null }),
}));
