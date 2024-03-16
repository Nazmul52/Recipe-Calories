import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainBody from "./components/MainBody";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <HeroSection />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
