import React from "react";
import { Route, Link } from "react-router-dom";
/**
 * A <Link> wrapper with support for both active and inactive classNames. Useful for tachyons
 * and similar functional css approaches.
 * Same API as React Router but with option of sending through a child as a function so you
 * can pass isActive down to it. Example: showing an icon when a nav link is highlighted.
 * Stolen from here, pretty much: https://github.com/ReactTraining/react-router/blob/9662a48fbc5de97f820608349ab37b4af5dba896/packages/react-router-dom/modules/NavLink.js
 */
const NavLink = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  inactiveClassName,
  style,
  isActive: getIsActive,
  children,
  ...rest
}) => (
  <Route
    path={typeof to === "object" ? to.pathname : to}
    exact={exact}
    strict={strict}
    location={location}
  >
    {({ location, match }) => {
      const isActive = !!(getIsActive ? getIsActive(match, location) : match);
      const moddedClassName = `${className || ""} ${isActive
        ? activeClassName
        : inactiveClassName}`;
      return (
        <Link
          to={to}
          className={moddedClassName}
          style={isActive ? { ...style, ...activeStyle } : style}
          {...rest}
        >
          {typeof children === "function" ? children({ isActive }) : children}
        </Link>
      );
    }}
  </Route>
);

NavLink.defaultProps = {
  activeClassName: "active",
};

export default NavLink;