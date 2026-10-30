import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import type { ReactNode } from "react";

export const KaggleIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15V12l-2.5 3H6v-7h2l2.5 3V8h1.5v9zm5 0V8h1.5v9h-1.5z" />
  </svg>
);

export const MediumIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.5 7.5c3-1.5 6-1 6 3v6c0 4-3 4.5-6 3-3-1.5-4.5-4.5-4.5-7.5s1.5-6 4.5-7.5z" />
    <path d="M13.5 7.5c3-1 4.5 1.5 4.5 4.5s-1.5 5.5-4.5 6.5c-.5.2-1-.1-1-.6V8.1c0-.5.5-.8 1-.6z" />
  </svg>
);

export const socialIconMap: Record<string, ReactNode> = {
  LinkedIn: <Linkedin size={16} />,
  GitHub: <Github size={16} />,
  YouTube: <Youtube size={16} />,
  Youtube: <Youtube size={16} />,
  Kaggle: <KaggleIcon size={16} />,
  Medium: <MediumIcon size={16} />,
  Email: <Mail size={16} />,
  Phone: <Phone size={16} />,
};
