import { HiOutlineMail } from "react-icons/hi";

type Props = {
  className?: string;
};

export default function EmailIcon({ className }: Props) {
  return <HiOutlineMail className={className} />;
}
