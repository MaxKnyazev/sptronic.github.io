import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { CustomerTickets } from "./pages/CustomerTickets";
import { CustomerTicketDetail } from "./pages/CustomerTicketDetail";
import { CustomerNewTicket } from "./pages/CustomerNewTicket";
import { SupportAllTickets } from "./pages/SupportAllTickets";
import { SupportUserList } from "./pages/SupportUserList";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: CustomerTickets },
      { path: "customer/tickets", Component: CustomerTickets },
      { path: "customer/ticket/:id", Component: CustomerTicketDetail },
      { path: "customer/new-ticket", Component: CustomerNewTicket },
      { path: "support/all-tickets", Component: SupportAllTickets },
      { path: "support/users", Component: SupportUserList },
      { path: "admin/dashboard", Component: AdminDashboard },
    ],
  },
]);
