import React, { FC, useEffect, useState } from "react";
import { ArticlePage } from "./pages/ArticlePage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopPage } from "./pages/TopPage";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/articles" component={ArticlePage} />
      </Switch>
    </Router>
  );
};

export default App;
