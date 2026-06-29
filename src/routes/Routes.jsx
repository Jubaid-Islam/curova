import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Emergency from "../pages/Emergency";
import ViewDetails from "../components/ViewDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
        loader: () => fetch('/doctor.json'),
        hydrateFallbackElement: <p>Loading...</p>
      },
      {
        path: "/bookings",
        Component: Bookings
      },
      {
        path: "/blogs",
        Component: Blogs
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/emergency",
        Component: Emergency
      },
      {
        path: "/viewdetails/:id",
        Component:  ViewDetails,
        loader: async () => {
          const res = await fetch("/doctor.json");
          const data = await res.json();
          return data;
        },
        hydrateFallbackElement: <p>Loading...</p>,
      },
    ]
  }

]);