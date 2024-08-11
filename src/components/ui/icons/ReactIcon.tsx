import { FaReact } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function ReactIcon({ className }: Props) {
  return <FaReact className={className} />;
}
