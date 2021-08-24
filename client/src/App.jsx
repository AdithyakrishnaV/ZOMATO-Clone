import { Router, Redirect, Route } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

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
      <RestaurantLayoutHOC  path="/restaurant/:id" exact component={Temp} />
      <RestaurantLayoutHOC  path="/restaurant/:id/overview" exact component={Temp} />
      <RestaurantLayoutHOC  path="/restaurant/:id/order-online" exact component={Temp} />
      <RestaurantLayoutHOC  path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantLayoutHOC  path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC  path="/restaurant/:id/photos" exact component={Temp} />
    </>
  );
}

export default App;
