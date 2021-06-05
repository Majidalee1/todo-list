import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./shared/navbar";
import HomePage from "./pages/Homepage";
import Completed from "./pages/Completed";
import Trash from "./pages/Trashpage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/completed">
              <Completed />
            </Route>
            <Route path="/trash">
              <Trash />
            </Route>
            {/* <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
