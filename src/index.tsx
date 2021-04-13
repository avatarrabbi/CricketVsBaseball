import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { TopBar } from "./components/TopBar";
import CricketPage from "./pages/CricketPage";
import BaseballPage from "./pages/BaseballPage";
import QuizPage from "./pages/QuizPage";
import { Box } from "@material-ui/core";
import ComparisonPage from "./pages/ComparisonPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <div>
          <TopBar />
          <Box p="10px">
            <Route exact path="/" component={HomePage} />
            <Route path="/cricket" component={CricketPage} />
            <Route path="/baseball" component={BaseballPage} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/compare/:id" component={ComparisonPage} />
          </Box>
        </div>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
