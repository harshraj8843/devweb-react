// icon colors
import { jsOrange, red, green } from "../theme/colors";

// components to pass in pages
import Home from "../views/Home";
import Git from "../views/Git";

// json data
import contactData from "./json/contact.json";
import staticData from "./json/static.json";

// package.json
import pkg from "../../package.json";

// sidenav main icons
export const pages = [
  {
    name: "Home",
    url: "/home",
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
  {
    name: "novicexp/devweb-react",
    url: "/git",
    icon: "code-branch",
    isInternal: true,
    component: <Git filename={"git"} />,
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
