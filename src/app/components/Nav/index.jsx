import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/about">How it Works</a>
        </li>
        <li>
          <a href="/contact">Pricing</a>
        </li>
        <li>
          <a href="/contact">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
