interface Link {
  title: string;
  to: string;
  icon?: any;
}

export const NAV_LINKS: Link[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "New Todo",
    to: "/new-todo",
  },
  {
    title: "Profile",
    to: "/profile",
  },
  {
    title: "Feedback",
    to: "/feedback",
  },
  {
    title: "About",
    to: "/about",
  },
];
