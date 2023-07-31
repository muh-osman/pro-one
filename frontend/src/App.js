//React router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages & Components
import { Layout, Home, About, LogIn, SignUp } from "./_index";



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
