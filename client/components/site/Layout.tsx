import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BottomBar from "./MobileBottomBar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">{/* offset for sticky header */}
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
}
