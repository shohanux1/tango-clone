"use client";

import React from "react";
import SidebarProvider from "../context/SidebarContext";

const ContextProvider = ({ children }: any) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default ContextProvider;
