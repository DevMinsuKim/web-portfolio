import { create } from "zustand";

interface CursorStore {
  isCustomCursor: boolean;
  toggleCustomCursor: () => void;
}

const useCursorStore = create<CursorStore>((set) => ({
  isCustomCursor: false,
  toggleCustomCursor: () =>
    set((state) => ({ isCustomCursor: !state.isCustomCursor })),
}));

export default useCursorStore;
