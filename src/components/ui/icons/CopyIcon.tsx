import { MdCopyAll } from "react-icons/md";

type Props = {
  className?: string;
};

export default function CopyIcon({ className }: Props) {
  return <MdCopyAll className={className} />;
}
