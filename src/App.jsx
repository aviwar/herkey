import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />

      <div className="md:flex">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />
    </div>
  )
}

export default App;
