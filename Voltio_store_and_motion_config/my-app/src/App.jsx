import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Canvas/>
      <Home/>
      <Customizer/>
    </div>
  );
}

export default App;
