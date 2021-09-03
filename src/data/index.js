// icon colors
import { jsOrange, red, green } from "../theme/colors";

// components to pass
import Home from "../views/Home";

// json data
import contactData from "./json/contact.json";
import staticData from "./json/static.json";

// package.json
import pkg from "../../package.json";

// sidenav main icons
export const pages = [
  {
    name: "Home",
    url: "/",
    icon: "home",
    isInternal: true,
    component: (
      <Home
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
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

// custom header tab
export const custom_header = [
  {
    name: "projects.py",
    url: "/projects",
    icon: ["fab", "python"],
    color: green,
  },
];
