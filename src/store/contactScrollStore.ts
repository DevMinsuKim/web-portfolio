import { create } from "zustand";

interface IContactScrollStore {
  targetRef: HTMLDivElement | null;
  setTargetRef: (ref: HTMLDivElement) => void;
}

export const useContactScrollStore = create<IContactScrollStore>((set) => ({
  targetRef: null,
  setTargetRef: (ref) => set({ targetRef: ref }),
}));
