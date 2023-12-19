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
 * @param props.navItems The navigation items, each item has a name and a path
 * @returns The bottom bar component
 */
function BottomBar(props: BottomBarProps) {
  return (
    <footer className="bottom-bar">
      <nav className="nav-links">
        {props.links.map((navItem, index, arr) => (
          <Fragment key={navItem.name}>
            <a href={navItem.path}>{navItem.name}</a>
            {index < arr.length - 1 && <span> • </span>}
          </Fragment>
        ))}
      </nav>
    </footer>
  );
}

interface BottomBarProps {
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
