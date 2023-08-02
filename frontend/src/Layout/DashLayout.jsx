import { Link, Outlet } from "react-router-dom";
import css from "./DashLayout.module.scss";

export default function DashLayout() {
  return (
    <div className={css.dashboard_box}>
      <aside className={css.aside}>
        <Link to="users">Users</Link>
      </aside>

      <Outlet />
    </div>
  );
}
