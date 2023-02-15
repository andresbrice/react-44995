import "./App.css"; //Importacion y ejecucion
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar brand={"Free Market"} />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:nomCategoria"
            element={<ItemListContainer />}
            component
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
