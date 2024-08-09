import { SlCloudDownload } from "react-icons/sl";

type Props = {
  className?: string;
};

export default function DownloadIcon({ className }: Props) {
  return <SlCloudDownload className={className} />;
}
