import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Singles from "./pages/Singles";
import Page404 from "./pages/page404";
import Artistas from "./pages/Artistas";
import Albuns from "./pages/Albuns";
import Container from "/src/componentes/Container";
import Footer from "/src/componentes/Footer";
import Header from "/src/componentes/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/singles" element={<Singles />}></Route>
          <Route path="/artistas" element={<Artistas />}></Route>
          <Route path="/albuns" element={<Albuns />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
