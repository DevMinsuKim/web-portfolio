import { HiOutlineCursorArrowRipple } from "react-icons/hi2";

type Props = {
  className?: string;
};

export default function CursorArrowIcon({ className }: Props) {
  return <HiOutlineCursorArrowRipple className={className} />;
}
