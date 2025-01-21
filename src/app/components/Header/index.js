import React from "react";
import Link from "next/link";
import Nav from "../Nav";
import Button from "../Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">Logo</Link>
      <Nav />
      <Button>Click Me</Button>
    </header>
  );
};

export default Header;
