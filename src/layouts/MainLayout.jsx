import { Outlet } from "react-router";
import MainFooter from "../components/layout/MainFooter";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
  return (
    <>
      <div>
        <header className="bg-white max-w-[1440px] mx-auto">
          <Navbar />
        </header>

        <main className="max-w-[1440px] mx-auto">
          <Outlet />
        </main>

        <footer className="bg-black max-w-[1440px] mx-auto">
          <MainFooter />
        </footer>
      </div>
    </>
  );
}
