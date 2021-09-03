import React from "react";

// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// layout
import MainLayout from "./layouts/Main";

// json data
import contactData from "./data/json/contact.json";

// components data
import { pages, tabs, custom_header } from "./data/";

// markdown component
import MDTab from "./components/MDTab";

// project component
import Project from "./views/Project";

// axios (for api call)
import axios from "axios";

function App() {
  // github repo data (from github call)
  const [repoData, setRepoData] = React.useState([]);

  // github-readme-stats domain
  // default => https://github-readme-stats.vercel.app
  const [api_domain] = React.useState("https://harshraj8843.vercel.app");

  // github username
  const [gh_username] = React.useState('harshraj8843');

  // useEffect for api call
  React.useState(() => {
    // eslint-disable-next-line
    let isMounted = true;

    // function
    const getData = () => {
      // github api call (with authentication header)
      axios.defaults.headers.common[
        "Authorization"
      ] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
      axios
        .get(`https://api.github.com/users/${gh_username}/repos`)
        .then((response) => {
          console.log("axios called");

          // get data and sort by latest update
          var rep_data = response.data;
          rep_data.sort(function (a, b) {
            return b.pushed_at.localeCompare(a.pushed_at);
          });

          // set repo data
          setRepoData(rep_data);
        })
        .catch((err) => {
          console.log("axios called");
          console.log(err);
        });
    };

    // function call
    getData();

    // cleanup
    return () => {
      // eslint-disable-next-line
      isMounted = false;
    };
  });

  return (
    <Router>
      <MainLayout
        tabs={tabs}
        custom_header={custom_header}
        contactData={contactData}
      >
        <Switch>
          {/* project route */}
          <Route path="/projects">
            <Project repoData={repoData} api_domain={api_domain} />
          </Route>

          {/* tabs route */}
          {tabs.map(({ name, url, mdFileName }) => (
            <Route key={name} path={url}>
              <MDTab fileName={mdFileName} />
            </Route>
          ))}

          {/* pages route */}
          {pages.map(({ name, url, component, ...rest }) => (
            <Route key={name} path={url}>
              <>{component}</>
            </Route>
          ))}

          {/* default route */}
          <Redirect key="notfound" from="*" to="/" default noThrow />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
