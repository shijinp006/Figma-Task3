import "./App.css";
import { Nav } from "./home/nav/nav";
import { Home } from "./home/home";
import { useState } from "react";

function App() {
  const [action,setAction] = useState("")

  
  return (
    <>
      <div className="w-full">
        <Nav  Action = {setAction}/>
        <Home action={action} />
      </div>
    </>
  );
}

export default App;
