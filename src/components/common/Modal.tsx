import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  message: {
    title: string;
    description: string;
    btnText: string;
  };
  onClose: () => void;
}

export default function Modal({
  message: { title, description, btnText },
  onClose,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("wheel", preventScroll);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // if (event.target === event.currentTarget) {
    //   onClose();
    // }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex min-w-[320px] items-center justify-center bg-black bg-opacity-50 px-6"
      onClick={handleBackdropClick}
    >
      <div className="text-foreground max-w-screen-xl rounded-xl bg-base-100 px-5 py-4 text-center shadow-lg dark:bg-base-300 dark:shadow-base-shadow sm:m-0">
        {title && (
          <h2 className="mb-4 text-base font-bold sm:text-lg">{title}</h2>
        )}
        {description && (
          <p className="mb-3 text-sm sm:text-base">{description}</p>
        )}
        <button
          className="btn btn-ghost bg-primary text-white hover:bg-primary/80"
          onClick={onClose}
        >
          {btnText}
        </button>
      </div>
    </div>,
    document.body,
  );
}
