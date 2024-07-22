import { FaChevronUp } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function ArrowUpIcon({ className }: Props) {
  return <FaChevronUp className={className} />;
}
