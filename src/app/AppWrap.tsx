import { ReduxProvider } from "@/redux/provider";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";

function AppWrap({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </ReduxProvider>
  );
}

export default AppWrap;
