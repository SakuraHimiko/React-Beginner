import Create from "./components/Create";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <>
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
