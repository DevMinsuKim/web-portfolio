import { FaChevronDown } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function CloseIcon({ className }: Props) {
  return <FaChevronDown className={className} />;
}
