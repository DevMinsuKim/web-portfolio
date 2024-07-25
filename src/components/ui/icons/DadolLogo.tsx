import Dlogo from "../../../../public/images/dadol_logo.svg";

type Props = {
  className?: string;
};

export default function DadolLogo({ className }: Props) {
  return <Dlogo className={className} />;
}
