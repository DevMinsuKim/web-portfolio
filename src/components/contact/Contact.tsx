"use client";

import { useScopedI18n } from "@/locales/client";
import { SubmitHandler, useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SendIcon from "../ui/icons/SendIcon";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkdeinIcon from "../ui/icons/LinkdeinIcon";
import Footer from "../common/Footer";
import { useModal } from "@/providers/ModalProvider";
import CopyIcon from "../ui/icons/CopyIcon";
import * as Sentry from "@sentry/nextjs";
import { errorMessage } from "../utils/errorMessage";
import { MailAction } from "@/server/contact/mailAction";
import { mailSchema, TypeMailSchema } from "@/schema/mailSchema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Link from "next/link";
import { useContactScrollStore } from "@/store/contactScrollStore";
import TistoryIcon from "../ui/icons/TistoryIcon";

export default function Contact() {
  const t = useScopedI18n("contact");
  const errorT = useScopedI18n("error");
  const TansMailSchema = mailSchema(t);
  const { setTargetRef } = useContactScrollStore();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TypeMailSchema>({
    resolver: zodResolver(TansMailSchema),
    defaultValues: {
      email: "",
      subject: "",
      text: "",
    },
  });

  const { showModal } = useModal();

  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const subject = watch("subject", "");
  const text = watch("text", "");

  const sendMail: SubmitHandler<TypeMailSchema> = async (data) => {
    if (!executeRecaptcha) {
      Sentry.captureException("executeRecaptcha 함수에서 문제 발생.");
      const { title, description, btnText } = errorMessage("2", errorT);
      showModal({
        title: title,
        description: description,
        btnText: btnText,
      });
      return;
    }

    const token = await executeRecaptcha("sendEmail");

    const response = await MailAction(data, token);
    if (response.success) {
      reset();
      showModal({
        title: t("announcement"),
        description: t("emailSentSuccessfully"),
        btnText: t("confirm"),
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      const { title, description, btnText } = errorMessage("2", errorT);
      showModal({
        title: title,
        description: description,
        btnText: btnText,
      });
    }
  };

  const mailTo = () => {
    const mailtoLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    navigator.clipboard
      .writeText(`${process.env.NEXT_PUBLIC_EMAIL}`)
      .then(() => {
        showModal({
          title: t("emailCopied"),
          description: t("pasteAndUse"),
          btnText: t("confirm"),
        });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        window.location.href = mailtoLink;
      })
      .catch((error) => {
        Sentry.captureException(error);
        const { title, description, btnText } = errorMessage("1", errorT);
        showModal({
          title: title,
          description: description,
          btnText: btnText,
        });
      });
  };

  return (
    <section className="relative mt-44 sm:mt-96" ref={setTargetRef}>
      <div className="absolute inset-0 min-w-[20rem] bg-primary/10 dark:bg-[#161430]" />
      <div className="absolute inset-0 min-w-[20rem] bg-[url(/images/grid_pattern.svg)] opacity-10 dark:opacity-15">
        <div className="absolute inset-0 bg-gradient-to-t from-primary" />
      </div>

      <div
        style={{
          position: "absolute",
          minWidth: "20rem",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          className="h-[5rem] md:h-[9rem]"
          style={{
            position: "relative",
            display: "block",
            width: "calc(100% + 0.081rem)",
          }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-base-100"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-base-100"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-base-100"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex flex-col items-center pt-28 md:max-w-screen-xl md:pt-40 lg:pt-48">
        <div className="max-w-[20rem] text-center">
          <p className="text-4xl font-bold md:text-5xl">{t("contactMe")}</p>
          <p className="mt-4 text-center text-lg md:mt-7 md:text-xl">
            {t("useChannelTalkOrEmail")}
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center bg-base-100/40">
          <div className="w-full max-w-[20rem] p-4 px-4 md:hidden">
            <button
              className="btn flex w-full items-center justify-center rounded-full bg-base-100 dark:hover:bg-base-content/20"
              onClick={() => {
                mailTo();
              }}
            >
              <CopyIcon className="h-5 w-5" />
              <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
            </button>

            <div className="mt-4 flex justify-center gap-4">
              <Link
                className="btn rounded-full bg-base-100 dark:hover:bg-base-content/20"
                href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}
                target="_blank"
                aria-label="Github Link"
              >
                <GithubIcon className="h-7 w-7" />
              </Link>

              <Link
                className="btn rounded-full bg-base-100 hover:bg-info/60 hover:text-white"
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
                target="_blank"
                aria-label="Linkdein Link"
              >
                <LinkdeinIcon className="h-7 w-7" />
              </Link>

              <Link
                className="btn rounded-full bg-base-100 hover:bg-[#ea580c] hover:text-white"
                href={process.env.NEXT_PUBLIC_TISTORY_URL ?? ""}
                target="_blank"
                aria-label="Tistory Link"
              >
                <TistoryIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex w-full px-4 md:mb-40 lg:mb-48 lg:justify-center">
          <form
            noValidate
            className="flex w-full max-w-[43.75rem] flex-col gap-2 rounded-md md:gap-4 lg:gap-6"
            onSubmit={handleSubmit(sendMail)}
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="pb-1 pl-1">
                {t("email")} <span className="text-error">*</span>
                {isEmailFocused && (
                  <span className="text-base-content/50">
                    &nbsp; {t("emailPlaceholder1")}
                  </span>
                )}
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder={t("emailPlaceholder2")}
                className="rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                maxLength={254}
              />

              <p
                className={`${
                  errors.email?.message ? "visible" : "invisible"
                } pl-1 pt-1 text-sm text-error md:text-base`}
              >
                {errors.email?.message ?? "0"}
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="pb-1 pl-1">
                {t("subject")} <span className="text-error">*</span>
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                placeholder={t("enterSubject")}
                className="rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
                maxLength={254}
              />
              <p
                className={`${
                  errors.subject?.message ? "visible" : "invisible"
                } pl-1 text-sm text-error md:text-base`}
              >
                {errors.subject?.message ?? "0"}
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="text" className="pb-1 pl-1">
                {t("content")}
                <span className="text-error">*</span>
              </label>
              <textarea
                {...register("text")}
                id="text"
                placeholder={t("enterContent")}
                className="max-h-80 min-h-32 resize-none rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
                maxLength={2000}
              />
              <p
                className={`${
                  errors.text?.message ? "visible" : "invisible"
                } pl-1 text-sm text-error md:text-base`}
              >
                {errors.text?.message ?? "0"}
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-ghost mt-5 bg-primary text-white hover:bg-primary/80 disabled:bg-primary/50 disabled:text-opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-xs text-white" />
              ) : (
                <>
                  <SendIcon className="h-5 w-5" />
                  <p>{t("sendEmail")}</p>
                </>
              )}
            </button>

            <p className="white mb-36 text-center text-xs md:mb-0">
              {t("protectedBy")}
              <Link
                className="font-bold"
                href="https://policies.google.com/privacy"
                target="_blank"
                aria-label="PrivacyPolicy Link"
              >
                {t("privacyPolicy")}
              </Link>
              {t("and")}
              <Link
                className="font-bold"
                href="https://policies.google.com/terms"
                target="_blank"
                aria-label="TrivacyPolicy Link"
              >
                {t("termsOfService")}
              </Link>
              {t("apply")}
            </p>
          </form>

          <div className="ml-4 hidden w-full flex-col gap-y-4 border-l-4 border-base-100 pl-4 md:flex md:basis-[50%] lg:basis-[25%]">
            <div>
              <p className="pb-1 font-bold">Email</p>
              <button
                className="justify-cente1 btn flex items-center rounded-full bg-base-100 dark:hover:bg-base-content/20"
                onClick={() => {
                  mailTo();
                }}
              >
                <CopyIcon className="h-5 w-5" />
                <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
              </button>
            </div>

            <div>
              <p className="pb-1 font-bold">GitHub</p>

              <Link
                className="btn rounded-full bg-base-100 dark:hover:bg-base-content/20"
                href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}
                target="_blank"
                aria-label="Github Link"
              >
                <GithubIcon className="h-7 w-7" />
              </Link>
            </div>

            <div>
              <p className="pb-1 font-bold">Linkedin</p>

              <Link
                className="btn rounded-full bg-base-100 hover:bg-info/60 hover:text-white"
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
                target="_blank"
                aria-label="Linkdein Link"
              >
                <LinkdeinIcon className="h-7 w-7" />
              </Link>
            </div>

            <div>
              <p className="pb-1 font-bold">Tistory</p>

              <Link
                className="btn rounded-full bg-base-100 hover:bg-[#ea580c] hover:text-white"
                href={process.env.NEXT_PUBLIC_TISTORY_URL ?? ""}
                target="_blank"
                aria-label="Tistory Link"
              >
                <TistoryIcon className="h-6 w-6" />
              </Link>
            </div>

            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </div>
        <div className="py-6 md:hidden">
          <Footer />
        </div>
      </div>
    </section>
  );
}
