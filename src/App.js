import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Header from './Header'
import ComparerList from './ComparerList'
import Submit from './Submit'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div class="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/submit" component={Submit} />
            <Route path="/" component={ComparerList} />
          </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
