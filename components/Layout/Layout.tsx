import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-primary text-fontColor font-sans text-base overflow-x-hidden flex-col">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
