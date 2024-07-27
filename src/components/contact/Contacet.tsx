import { useScopedI18n } from "@/locales/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SendIcon from "../ui/icons/SendIcon";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkdeinIcon from "../ui/icons/LinkdeinIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";

interface IFormData {
  email: string;
  subject: string;
  text: string;
}

export default function Contact() {
  const scopedT = useScopedI18n("contact");

  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email({ message: "유효한 이메일 주소를 입력해주세요." })
      .max(254, { message: "이메일 주소는 최대 254자까지 입력 가능합니다." }),
    subject: z
      .string()
      .min(1, { message: "제목은 필수 입력 항목입니다." })
      .max(255, { message: "제목은 최대 255자까지 입력 가능합니다." }),
    text: z
      .string()
      .min(1, { message: "내용은 필수 입력 항목입니다." })
      .max(2000, { message: "내용은 최대 2000자까지 입력 가능합니다." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      subject: "",
      text: "",
    },
  });

  const sendEmail = (data: IFormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 min-w-[20rem] bg-primary/10 dark:bg-[#12112F]/70" />
      <div className="absolute inset-0 min-w-[20rem] bg-[url(/images/grid_pattern.svg)] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary backdrop-grayscale" />
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
          className="h-[5rem] sm:h-[9rem]"
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

      <div className="relative mx-auto flex max-w-[20rem] flex-col items-center px-4 pt-28 sm:max-w-screen-xl sm:pt-40 lg:pt-48">
        <p className="text-4xl font-bold sm:text-5xl lg:text-6xl">문의하기</p>
        <p className="mt-4 text-center text-lg sm:mt-7 sm:text-xl">
          {"우측 하단의 채널톡을 이용하시거나\n 이메일로 문의해 주세요!"}
        </p>

        <div className="my-16 flex w-full justify-center xl:my-28">
          <form
            noValidate
            className="flex max-w-[780px] basis-[80%] flex-col gap-1 rounded-md"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="pb-1 pl-1">
                이메일 <span className="text-error">*</span>
                {isEmailFocused && (
                  <span className="text-base-content/50">
                    &nbsp; 예시: ( you@example.com )
                  </span>
                )}
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                className="rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />

              <p
                className={`${
                  errors.email?.message ? "visible" : "invisible"
                } pl-1 pt-1 text-sm text-error sm:text-base`}
              >
                {errors.email?.message ?? "0"}
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="pb-1 pl-1">
                제목 <span className="text-error">*</span>
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                placeholder="제목을 입력해주세요."
                className="rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
              />
              <p
                className={`${
                  errors.subject?.message ? "visible" : "invisible"
                } pl-1 pt-1 text-sm text-error sm:text-base`}
              >
                {errors.subject?.message ?? "0"}
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="text" className="pb-1 pl-1">
                내용 ( 최대 2000자 )<span className="text-error">*</span>
              </label>
              <textarea
                {...register("text")}
                id="text"
                placeholder="내용을 입력해주세요."
                className="max-h-80 min-h-32 resize-none rounded-2xl p-3 outline-none focus:outline-primary dark:bg-base-100"
              />
              <p
                className={`${
                  errors.text?.message ? "visible" : "invisible"
                } pl-1 pt-1 text-sm text-error sm:text-base`}
              >
                {errors.text?.message ?? "0"}
              </p>
            </div>

            <button
              className="btn btn-ghost bg-primary text-white hover:bg-primary/80"
              onClick={handleSubmit(sendEmail)}
            >
              <SendIcon className="h-5 w-5" />
              <p>이메일 보내기</p>
            </button>
          </form>

          <div className="hidden basis-[20%] flex-col gap-y-4 pl-7 pr-7 xl:flex">
            <div>
              <p className="font-bold">Email</p>
              <button className="justify-cente1 btn flex items-center rounded-full bg-base-100 dark:hover:bg-base-content/20">
                <p>cvnefr7704@gmail.com</p>
              </button>
            </div>

            <div>
              <p className="font-bold">GitHub</p>
              <button className="justify-cente1 btn flex items-center rounded-full bg-base-100 dark:hover:bg-base-content/20">
                <GithubIcon className="h-7 w-7" />
              </button>
            </div>

            <div>
              <p className="font-bold">Linkedin</p>
              <button className="btn flex items-center justify-center rounded-full bg-base-100 dark:hover:bg-base-content/20">
                <LinkdeinIcon className="h-7 w-7" />
              </button>
            </div>

            <div>
              <p className="font-bold">YouTube</p>
              <button className="btn flex items-center justify-center rounded-full bg-base-100 dark:hover:bg-base-content/20">
                <YouTubeIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
