import Nav from "./Nav";
import ContainerCentered from "./ContainerCentered";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Router from "next/router";
import Loader from "../../components/ui/Loading";

const Layout = ({ children }) => {
  const [isloading, SetIsLoading] = useState(false);

  useEffect(() => {
    const loadingStart = () => {
      SetIsLoading(true);
    };
    const loadingStop = () => {
      SetIsLoading(false);
    };

    Router.events.on("routeChangeStart", loadingStart);
    Router.events.on("routeChangeComplete", loadingStop);

    return () => {
      Router.events.off("routeChangeStart", loadingStart);
      Router.events.off("routeChangeComplete", loadingStop);
    };
  }, [Router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="relative">
        {isloading ? (
          <Loader />
        ) : (
            <ContainerCentered>
              {children}
            </ContainerCentered>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
