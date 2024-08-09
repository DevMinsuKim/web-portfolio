import { GrLanguage } from "react-icons/gr";

type Props = {
  className?: string;
};

export default function LanguageIcon({ className }: Props) {
  return <GrLanguage className={className} />;
}
