import "./Layout.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";

function Layout({ children }) {
  const [selected, setSelected] = useState();
  
  return (
    <div className="layout">
      <Header />
      <main className="layout__body">
        <Sidebar setSelected={setSelected} />
        {children}
      </main>
    </div>
  );
}

export default Layout;
