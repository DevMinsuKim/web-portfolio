import { create } from "zustand";

interface DeviceState {
  isMobile: boolean;
  checkIfMobile: () => void;
}

const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false,
  checkIfMobile: () => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const userAgent = navigator.userAgent;
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent,
      );

    set({ isMobile: isTouchDevice || isMobileDevice });
  },
}));

export default useDeviceStore;
