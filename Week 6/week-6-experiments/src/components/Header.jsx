import React from "react";
import { memo } from "react";
const Header = memo(({ title }) => {
  return <div>{title}</div>;
});

export default Header;
