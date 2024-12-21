import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms/Header/Header";
import { Sidebar } from "../components/organisms/Sidebar/Sidebar";

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
