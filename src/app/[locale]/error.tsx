"use client";

import { errorHandler } from "@/components/utils/errorHandler";
import { useScopedI18n } from "@/locales/client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errorT = useScopedI18n("error");
  const { title, description, btnText } = errorHandler(error, errorT);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center px-4`}
    >
      {title && (
        <h2 className="mb-7 text-center text-xl font-extrabold md:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <div className="mb-9 text-center text-sm md:text-lg">
          <p>{description}</p>
        </div>
      )}

      <button
        className="btn rounded-full border border-base-border bg-base-100 shadow shadow-base-shadow dark:bg-base-300 dark:hover:bg-base-content/20"
        onClick={() => reset()}
      >
        {btnText}
      </button>
    </div>
  );
}
