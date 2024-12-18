import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";

export default function Root() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
