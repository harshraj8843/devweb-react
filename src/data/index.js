// icon colors
import { jsOrange, red, green } from "../theme/colors";

// sidenav main icons
export const pages = [
  {
    name: "Home",
    url: "/",
    icon: "home",
    isInternal: true,
  },
];

// header tabs
export const tabs = [
  {
    name: "skills.js",
    url: "/skills",
    icon: ["fab", "js"],
    color: jsOrange,
    mdFileName: "skills",
  },
  {
    name: "ideas.java",
    url: "/ideas",
    icon: ["fab", "java"],
    color: red,
    mdFileName: "ideas",
  }
];

// custom component header tab
export const custom_components = [
  {
    name: "projects.py",
    url: "/projects",
    icon: ["fab", "python"],
    color: green,
  },
];
