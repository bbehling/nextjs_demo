import SideMenu from "./sideMenu";
import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SideMenu />
      <main>{children}</main>
    </>
  );
}
