import { create } from "zustand";

interface ICursorStore {
  isCustomCursor: boolean;
  toggleCustomCursor: () => void;
}

const useCursorStore = create<ICursorStore>((set) => ({
  isCustomCursor: false,
  toggleCustomCursor: () =>
    set((state) => ({ isCustomCursor: !state.isCustomCursor })),
}));

export default useCursorStore;
