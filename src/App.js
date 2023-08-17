import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import NoMatch from "./pages/NoMatch";
import OrdersPage from "./pages/OrdersPage";
import FleetPage from "./pages/FleetPage";
import AddressPage from "./pages/AddressPage";
import PlannerPage from "./pages/PlannerPage";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Sidebar />,
//     children: [
//       {
//         path: "/aa",
//         // index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "a/orders",
//         element: <OrdersPage />,
//       },
//       {
//         path: "fleet",
//         element: <FleetPage />,
//       },
//     ],
//   },
//   {
//     path: "orders",
//     element: <OrdersPage />,
//   },
//   // {
//   //   path: "/fleet",
//   //   element: <FleetPage />,
//   // },
//   {
//     path: "/my-address",
//     element: <AddressPage />,
//   },
//   {
//     path: "/profile",
//     element: <ProfilePage />,
//   },
//   {
//     path: "/ustawienia",
//     element: <SettingsPage />,
//   },
//   {
//     path: "*",
//     element: <NoMatch />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />}>
      <Route index element={<HomePage />} />

      <Route path="/planner" element={<PlannerPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="fleet" element={<FleetPage />} />

      <Route path="my-address" element={<AddressPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="ustawienia" element={<SettingsPage />} />

      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
