import { FaChevronRight } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function ArrowRightIcon({ className }: Props) {
  return <FaChevronRight className={className} />;
}
