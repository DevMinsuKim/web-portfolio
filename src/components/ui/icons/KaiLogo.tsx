import Klogo from "../../../../public/images/kai_logo.svg";

type Props = {
  className?: string;
};

export default function KaiLogo({ className }: Props) {
  return <Klogo className={className} />;
}
