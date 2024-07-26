export const viewUpAnimation = (inView: boolean) => {
  return {
    transform: inView ? "none" : "translateY(12.5rem)",
    opacity: inView ? 1 : 0,
    transition:
      "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
  };
};
