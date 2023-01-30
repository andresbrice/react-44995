import "./App.css"; //Importacion y ejecucion
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar brand={"Free Market"} />
      <ItemListContainer greeting={"Bienvenido a Free Market"} />
    </div>
  );
};

export default App;
