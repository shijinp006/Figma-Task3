import "./App.css";
import { Nav } from "./home/nav/nav";
import { Home } from "./home/home";

function App() {
  return (
    <>
      <div className="w-full">
        <Nav />
        <Home />
      </div>
    </>
  );
}

export default App;
