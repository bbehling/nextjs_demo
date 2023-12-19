import SideMenu from "../components/sideMenu";

export default function Layout({ children }) {
  return (
    <>
      <SideMenu />
      <main>{children}</main>
    </>
  );
}
