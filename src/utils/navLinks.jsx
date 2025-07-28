import Fb from "../assets/fb-logo.png";
import Tw from "../assets/x-logo.svg";
import LinkedIn from "../assets/linkedin.png";
import HomeDash from "../assets/home-nav.svg";
import DocumentDash from "../assets/document-nav.png";

export const navMenu = [
  { label: "Features", url: "/", hashed: true },
  { label: "Pricing", url: "/", hashed: false },
  { label: "Testimonials", url: "/", hashed: true },
  { label: "FAQ", url: "/", hashed: true },
];

export const footerLinks = [
  {
    title: "Company",
    subs: [
      { link: "Pricing", urlLink: "/" },
      { link: "Affliates", urlLink: "/" },
    ],
  },
];

export const socialHolder = {
  title: "Social",
  subs: [
    { link: "Facebook", urlLink: "https://facebook.com/yourusername", img: Fb },
    { link: "LinkedIn", urlLink: "https://linkedin.com/in/yourusername", img: LinkedIn },
    { link: "X", urlLink: "https://twitter.com/yourusername", img: Tw },
  ],
};

export const dashboardMenu = [
  { icon: HomeDash, text: "Home", link: "/" },
  { icon: DocumentDash, text: "Document", link: "/" },
];
