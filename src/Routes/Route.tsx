import { House } from "lucide-react";
import Index from "../Pages/ParkingSystemPortfolio/Pages/Index";

import EmployeIndex from "../Pages/EmployePanel/Pages/EmployeIndex";
import ChoseGate from "../Pages/ParkingSystemPortfolio/Gate/GatePages/ChoseGate";

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
    PagePath: "/gate",
    Pagetitle: "Gate Page",
    TitleIcon: <House />,
    Element: <ChoseGate />,
    hasPermission: false,
    Permission: "User",
  },
];
