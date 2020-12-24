import Header from "./components/Header";
import Nav from "./components/Nav";
import SongOverview from "./components/SongOverview";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <hr />
        <Switch>
          <Route path="/" exact component={SongOverview} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;