"use server";

import * as Sentry from "@sentry/nextjs";
import { mailSchema, TypeMailSchema } from "@/schema/mailSchema";
import nodemailer from "nodemailer";
import { getScopedI18n } from "@/locales/server";

export async function MailAction(
  { email, subject, text }: TypeMailSchema,
  token: string,
) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCH_KEY}&response=${token}`,
    },
  );

  const recaptchaData = await response.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    Sentry.captureException(recaptchaData);
    return { success: false };
  }

  const t = await getScopedI18n("contact");

  const TansMailSchema = mailSchema(t);

  const parsed = TansMailSchema.safeParse({ email, subject, text });

  if (!parsed.success) {
    Sentry.captureException(parsed.error);
    return { success: false };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.EMAIL_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `[웹 포트폴리오] ${subject}`,
      html: `<p>보낸사람 : ${email}</p> <br/> ${text} <br/> <br/> 웹 포트폴리오에서 보냄.`,
    });

    return { success: true };
  } catch (error) {
    Sentry.captureException(error);
    return { success: false };
  }
}
