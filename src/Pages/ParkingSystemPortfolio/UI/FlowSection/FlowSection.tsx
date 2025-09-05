import React from "react";
import type { Flow } from "../Types";
import CardFlow from "./UI/CardFlow";
import DirectionFlow from "./UI/DirectionFlow";
const ProjectFlow: Flow[] = [
  {
    FlowHeader: "Business Portfolio",
    DirectionHeader: "/portfolio",
    FlowProperties: ["Hero", "Flow", "About", "Get Started"],
  },
  {
    FlowHeader: "Login",
    DirectionHeader: "/login",
    FlowProperties: ["Single form", "POST /auth/login", "Redirect by role"],
  },
  {
    FlowHeader: "Gate Screen — Check-in",
    DirectionHeader: "/gate/:gateId",
    FlowProperties: [
      "Gate header + WS status",
      "Visitor/Subscriber tabs",
      "Zone cards (status, rates, availability)",
      "Special rate indicator",
      "Visitor flow (select zone → POST checkin)",
      "Subscriber flow (verify subscription → POST checkin)",
      "Ticket modal + animation",
      "WS: subscribe to gate, zone-update, admin-update",
    ],
  },
  {
    FlowHeader: "Checkpoint Screen — Check-out",
    DirectionHeader: "/checkpoint",
    FlowProperties: [
      "Protected route (employee only)",
      "Ticket input (scan/paste)",
      "POST /tickets/checkout → show breakdown",
      "Subscriber plate verification",
      "Convert to visitor option",
      "Confirmation + WS updates",
    ],
  },
  {
    FlowHeader: "Admin Dashboard",
    DirectionHeader: "/admin/*",
    FlowProperties: [
      "Protected route (admin only)",
      "Manage employees (GET/POST /admin/users)",
      "Parking report (GET /admin/reports/parking-state)",
      "Control panel: open/close zones, update rates, add rush/vacation",
      "Live audit log from admin-update",
    ],
  },
  {
    FlowHeader: "Realtime Updates",
    DirectionHeader: "WebSocket",
    FlowProperties: [
      "Subscribe to gate events",
      "Handle zone-update (occupancy/rates)",
      "Handle admin-update (control actions)",
    ],
  },
];
function FlowSection() {
  return (
    <div className="mt-2   justify-center grid grid-cols-1 gap-1 md:grid-cols- lg:grid-cols-7">
      {ProjectFlow.map((Project, index) => (
        <React.Fragment key={index}>
          <CardFlow
            FlowHeader={Project.FlowHeader}
            FlowProperties={Project.FlowProperties}
          />
          <DirectionFlow DirectionHeader={Project.DirectionHeader} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FlowSection;
