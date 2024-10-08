"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function ReCaptchaProivder({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCH_KEY ?? ""}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
