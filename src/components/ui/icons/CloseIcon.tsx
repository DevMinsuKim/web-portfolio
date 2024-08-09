import { IoCloseOutline } from "react-icons/io5";

type Props = {
  className?: string;
};

export default function CloseIcon({ className }: Props) {
  return <IoCloseOutline className={className} />;
}
