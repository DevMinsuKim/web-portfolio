import { create } from "zustand";

interface IDeviceState {
  isMobile: boolean;
  isTablet: boolean;
  checkDevice: () => void;
}

const useDeviceStore = create<IDeviceState>((set) => ({
  isMobile: false,
  isTablet: false,
  checkDevice: () => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent,
      );

    const isTabletDevice =
      /ipad|android(?!.*mobi)/i.test(userAgent) ||
      (isTouchDevice && window.innerWidth >= 768 && window.innerWidth <= 1024);

    set({ isMobile: isMobileDevice, isTablet: isTabletDevice });
  },
}));

export default useDeviceStore;
