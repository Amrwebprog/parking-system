import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { Routes, type RoutesType } from "./Route";
import Index from "../Pages/ParkingSystemPortfolio/Pages/Index";
const isAuthenticated = () => !!localStorage.getItem("token");
const AuthRole = () => localStorage.getItem("role");
const EmployeeLayout = ({ Element }: { Element: RoutesType }) => {
  return !isAuthenticated() ? (
    <Navigate to="/login" replace />
  ) : AuthRole() !== Element.Permission ? (
    <Navigate to="/not-authorized" replace />
  ) : (
    Element.Element
  );
};
export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />

      {Routes.map((MyRoute: RoutesType) => {
        return (
          <Route
            key={MyRoute.PagePath}
            path={MyRoute.PagePath}
            element={
              MyRoute.hasPermission ? (
                <EmployeeLayout Element={MyRoute} />
              ) : (
                MyRoute.Element
              )
            }
          />
        );
      })}

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </>
  )
);
