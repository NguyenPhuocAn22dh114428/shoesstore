import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./page/HomePage/HomeComponent/Home";
import ProductMen from "./page/ProductPage/ProductComponent/ProductMen";
import ProductWomen from "./page/ProductPage/ProductComponent/ProductWomen";
import Products from "./page/ProductPage/ProductComponent/Products";
import Sales from "./page/SalesPage/SalesComponent/Sales";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./page/SearchPage/SearchComponent/Search";
import NewArrival from "./page/NewArrival/NewArrivalComponent/NewArrival";

const App = () => (
  <Router>
    <ScrollToTop />
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/men">
        <ProductMen />
      </Route>
      <Route path="/women">
        <ProductWomen />
      </Route>
      <Route path="/sales">
        <Sales />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/newarrival">
        <NewArrival />
      </Route>
    </Switch>
  </Router>
);

export default App;
