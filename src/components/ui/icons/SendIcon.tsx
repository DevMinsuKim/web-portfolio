import { FiSend } from "react-icons/fi";

type Props = {
  className?: string;
};

export default function SendIcon({ className }: Props) {
  return <FiSend className={className} />;
}
