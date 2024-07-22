import { IoLogoGithub } from "react-icons/io";

type Props = {
  className?: string;
};

export default function GithubIcon({ className }: Props) {
  return <IoLogoGithub className={className} />;
}
