import { House } from "lucide-react";
import Index from "../Pages/ParkingSystemPortfolio/Pages/Index";

import EmployeIndex from "../Pages/EmployePanel/Pages/EmployeIndex";

export type Role = "Admin" | "Employee" | "User";
export type RoutesType = {
  innerClassName?: string;
  OuterClassName?: string;
  Pagetitle: string;
  TitleIcon: React.ReactElement;
  Element: React.ReactElement;
  hasPermission: boolean;
  Permission?: Role;
  PagePath: string;
};
export const Routes: RoutesType[] = [
  {
    PagePath: "aa",
    Pagetitle: "HomePage",
    TitleIcon: <House />,
    Element: <Index />,
    hasPermission: false,
    Permission: "User",
    OuterClassName: "bg-black",
  },

  {
    PagePath: "/bb",
    Pagetitle: "HomePage",
    TitleIcon: <House />,
    Element: <EmployeIndex />,
    hasPermission: true,
    Permission: "Employee",
  },
];
