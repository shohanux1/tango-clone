import { createContext, useState } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

type SidebarProviderProps = {
  children: React.ReactNode;
};

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
