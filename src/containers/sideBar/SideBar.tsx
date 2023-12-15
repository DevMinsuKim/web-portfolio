import { useTranslations } from "next-intl";

export default function SideBar() {
  const t = useTranslations("Index");
  return (
    <aside className="shadow-shadow max-w-xs p-4 rounded-3xl h-screen shadow-white">
      <h1>{t("title")}</h1>
      <ul>
        <li>a</li>
      </ul>
    </aside>
  );
}
