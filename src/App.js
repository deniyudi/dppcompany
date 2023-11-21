// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import About from "./pages/About/About";
import { Navbar } from "./components/Elements/Nav/Navbar";
import { Footer } from "./components/Elements/Foot/Footer";
import Board from "./pages/About/BoardOfDirector/Boards";
import MilestoneAward from "./pages/About/MilestoneAwards/MilestoneAward";
import { Contact } from "./pages/Contact/Contact";
import { News } from "./pages/News/News";
import { DetailNews } from "./pages/News/DetailNews";
import LandingPage from "./pages/LandingPages/LandingPage";
import Industries from "./pages/Industries/Industries";
import Career from "./pages/Career/Career";
import NotFound from "./pages/NotFound";
import ProgramCSR from "./pages/ProgramCSR/ProgramCSR";
import AddNews from "./pages/Admin/AddNews";
import NewsAdmin from "./pages/Admin/NewsAdmin";
import EditNews from "./pages/Admin/EditNews";
import Esg from "./pages/ESG/Esg";
// import NavbarCoy from "./components/Elements/Nav/NavbarCoy";

function App() {
  return (
    <>
      <Router>
        {/* <NavbarCoy/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/board" element={<Board />} />
          <Route path="/awards" element={<MilestoneAward />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/detail/:id" element={<DetailNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/career" element={<Career />} />
          <Route path="/programcsr" element={<ProgramCSR />} />
          <Route path="/esg" element={<Esg />} />
          <Route path="/*" element={<NotFound />} />
          {/* Admin  */}
          <Route path="/addnews" element={<AddNews />} />
          <Route path="/editnews/:id" element={<EditNews />} />
          <Route path="/newsadmin" element={<NewsAdmin/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
