import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchResults from "./components/SearchResults";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="page">
              <SideBar />
              <SearchResults />
            </div>
          </Route>
          <Route exact path="/">
            <div className="page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
