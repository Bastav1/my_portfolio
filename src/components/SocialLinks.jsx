import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import CodolioIcon from "./CodolioIcon.jsx";
import { socialLinks } from "../data/portfolio.js";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  codolio: CodolioIcon,
};

export default function SocialLinks({
  className = "",
  iconClassName = "h-[18px] w-[18px]",
  linkClassName = "text-ink/70 transition-colors hover:text-accent-dark",
}) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            data-cursor={social.label}
            className={linkClassName}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
