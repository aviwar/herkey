import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header toggleSidebar={toggleSidebar} />

      <div className="md:flex">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <MainContent isSidebarVisible={isSidebarVisible} />
      </div>

      <Footer />
    </div>
  )
}

export default App;
