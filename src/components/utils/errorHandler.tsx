import * as Sentry from "@sentry/nextjs";
import { errorMessage } from "./errorMessage";

interface errorHandlerProps {
  title: string;
  description: string;
  btnText: string;
}

export const errorHandler = (
  error: Error,
  t: (key: string, ...args: any[]) => string,
): errorHandlerProps => {
  if (error) {
    Sentry.captureException(error);

    if (error.message) {
      const errorCode = error.message;
      const { title, description, btnText } = errorMessage(errorCode, t);
      return {
        title: title,
        description: description,
        btnText: btnText,
      };
    } else {
      return {
        title: t("apology"),
        description: t("tryAgainLater"),
        btnText: t("retry"),
      };
    }
  } else {
    Sentry.captureMessage("정의 되지 않은 에러가 발생했습니다.");
    return {
      title: t("apology"),
      description: t("tryAgainLater"),
      btnText: t("retry"),
    };
  }
};
