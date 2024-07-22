import { IoIosInformation } from "react-icons/io";

type Props = {
  className?: string;
};

export default function InfoIcon({ className }: Props) {
  return <IoIosInformation className={className} />;
}
