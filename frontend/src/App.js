//React router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages & Components
import { Layout, Home, About, LogIn, SignUp, Dashboard, Users, DashLayout, Edit, CreateUser, RouteProtector, PersistLogin } from "./_index";



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          
                {/* Protectet Route */}
                <Route element={<PersistLogin />}>
                  <Route element={<RouteProtector />}>
                      <Route path="dashboard" element={<DashLayout />}>
                          <Route index element={<Dashboard />} />
                          <Route path="users" element={<Users />} />
                          <Route path="users/:id" element={<Edit />} />
                          <Route path="user/create" element={<CreateUser />} />
                      </Route>
                  </Route>
                </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
