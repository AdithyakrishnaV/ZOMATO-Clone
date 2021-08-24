import { Router, Redirect, Route } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";

// page
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
         <Redirect to="./delivery"/>
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
    </>
  );
}

export default App;
