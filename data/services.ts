import BrandingAndLogo from "../public/services/branding-and-logo.png";
import WebDesign from "../public/services/web-design.png";
import WebDevelopment from "../public/services/web-development.png";

export interface Service {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    image: BrandingAndLogo,
    imageAlt: "Branding and logo design",
    title: "Branding & Logo Design",
    description:
      "Looking for a new identity for your business? We can find your visual identity and create a branding to truly capture who you are.",
  },
  {
    image: WebDesign,
    imageAlt: "Web Design",
    title: "Web Design",
    description:
      "Maybe your website is up and running, but looking a little dated? We can work with you and your needs to update your website. A fresh coat of paint can make a world of difference when it comes to websites.",
  },
  {
    image: WebDevelopment,
    description:
      "Offering a full service of web development to suit your needs. Websites aren’t one size fits all, and neither should yours be. Specialising in react and typescript we can get you a powerful website up and running",
    title: "Web Development",
    imageAlt: "Web Development",
  },
];
