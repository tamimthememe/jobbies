import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
