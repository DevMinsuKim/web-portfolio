import { z } from "zod";

export const mailSchema = (t: (key: string, ...args: any[]) => string) =>
  z.object({
    email: z
      .string()
      .email({ message: t("validEmail") })
      .max(254, { message: t("emailMaxLength") }),
    subject: z
      .string()
      .min(1, { message: t("subjectRequired") })
      .max(254, { message: t("subjectMaxLength") }),
    text: z
      .string()
      .min(1, { message: t("contentRequired") })
      .max(2000, { message: t("contentMaxLength") }),
  });

export type TypeMailSchema = z.infer<ReturnType<typeof mailSchema>>;
