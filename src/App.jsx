import { useState, lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainContent = lazy(() => import('./components/MainContent'));
const Sidebar = lazy(() => import('./components/Sidebar'));

function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />

        <div className="md:flex">
          <Sidebar isSidebarVisible={isSidebarVisible} />
          <MainContent isSidebarVisible={isSidebarVisible} />
        </div>

        <Footer />
      </div>
    </Suspense>
  )
}

export default App;
