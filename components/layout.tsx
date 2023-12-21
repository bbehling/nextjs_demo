import SideMenu from "./sideMenu";
import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="d-sm-none">
        <SideMenu />
      </div>
      <main>{children}</main>
    </>
  );
}
