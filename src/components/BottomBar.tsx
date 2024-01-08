import { Fragment } from "react";

import "./BottomBar.css";

/**
 * The bottom bar component
 *
 * @example
 * <BottomBar navItems={[
 *   { name: "Home", path: "/" },
 *   { name: "About", path: "/about" },
 * ]} />
 *
 * @param links The navigation items, each item has a name and a path
 * @returns The bottom bar component
 */
function BottomBar({ links }: BottomBarProps) {
  return (
    <footer className="bottom-bar">
      <nav className="nav-links">
        {links.map((navItem, index, array) => (
          <Fragment key={navItem.name}>
            <a href={navItem.path}>{navItem.name}</a>
            {index < array.length - 1 && <span> • </span>}
          </Fragment>
        ))}
      </nav>
    </footer>
  );
}

interface BottomBarProps {
  /**
   * The navigation items, each item has a name and a path
   */
  links: {
    /**
     * The name of the navigation item
     */
    name: string;
    /**
     * The path to the navigation item
     */
    path: string;
  }[];
}

export default BottomBar;
