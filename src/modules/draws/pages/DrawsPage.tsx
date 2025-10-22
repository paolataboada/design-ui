import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const DrawsPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#01060D" }}>
      {/* NAVBAR */}
      <Navbar />
      <Main />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default DrawsPage;
