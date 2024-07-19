import { create } from "zustand";

interface DeviceState {
  isMobile: boolean;
  checkIfMobile: () => void;
}

const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false,
  checkIfMobile: () => {
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    set({ isMobile });
  },
}));

export default useDeviceStore;
