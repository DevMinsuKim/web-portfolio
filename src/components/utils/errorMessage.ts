interface errorMessageProps {
  title: string;
  description: string;
  btnText: string;
}

export const errorMessage = (
  errorCode: string,
  t: (key: string, ...args: any[]) => string,
): errorMessageProps => {
  switch (errorCode) {
    case "1":
      return {
        title: t("emailCopyFailed"),
        description: t("againLater"),
        btnText: t("confirm"),
      };
    case "2":
      return {
        title: t("emailSendFailed"),
        description: t("againLater"),
        btnText: t("confirm"),
      };

    default:
      return {
        title: t("apology"),
        description: t("tryAgainLater"),
        btnText: t("retry"),
      };
  }
};
