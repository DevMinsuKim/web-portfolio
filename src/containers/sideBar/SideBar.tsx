import { useTranslations } from "next-intl";

export default function SideBar() {
  const t = useTranslations("Index");
  return (
    <aside>
      <h1>{t("title")}</h1>
      <ul></ul>
    </aside>
  );
}
