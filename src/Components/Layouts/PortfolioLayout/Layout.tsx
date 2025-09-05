import React from "react";

function Layout({
  children,
  innerClassName,
  OuterClassName = "bg-white",
}: {
  children: React.ReactNode;
  innerClassName?: string;
  OuterClassName?: string;
}) {
  return (
    <div className={`${OuterClassName}`}>
      <div className={`container mx-auto ${innerClassName}`}>{children}</div>
    </div>
  );
}

export default Layout;
