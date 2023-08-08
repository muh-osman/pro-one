import { NavLink, Outlet } from "react-router-dom";
import css from "./DashLayout.module.scss";

export default function DashLayout() {
  return (
    <div className={css.dashboard_box}>
      <aside className={css.aside}>
        <NavLink to="users">Users</NavLink>
        <NavLink to="user/create">New User</NavLink>
      </aside>

      <Outlet />
    </div>
  );
}
