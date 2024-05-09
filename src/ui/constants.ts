export const colors = {
  purple: "#800DF2",
  lightPurple: "#F8EBFF",
  darkPurple: "#330561",
  gray: "#6D4DB3",
  lightGray: "#886EC4", //  A693D2
};

type LinkData = {
  href: string;
  text: string;
};

const navLinks: LinkData[] = [
  { href: "intro", text: "Home" },
  { href: "experience", text: "Experience" },
  { href: "projects", text: "Projects" },
  { href: "skills", text: "Skills" },
  // { href: "about", text: "About" },
  // { href: "reach-me", text: "Reach Me" },
];

const workLinks: LinkData[] = [
  { href: "resume", text: "Resume" },
  // { href: "work-together", text: "Work Together" },
];

export const links = {
  nav: navLinks,
  work: workLinks,
};

export default {
  colors,
  links,
};
