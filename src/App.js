import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as FormProvider } from "./context/FormContext";

import "./css/app.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import Contacts from "./components/contacts/Contacts";
import ImCoding from "./components/fakePage/ImCoding";
import AstroCamp from "./components/fakePage/AstroCamp";
import FullstackLanding from "./components/fakePage/FullstackLanding";
import Talks from "./components/fakePage/Talks";
import Development from "./components/fakePage/Development";
import Training from "./components/fakePage/Training";
import Space from "./components/fakePage/Space";
import Posts from "./components/fakePage/Posts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main_content">
        <Switch>
          <Route path="/5x_training_demo/" exact component={Main} />
          <Route path="/5x_training_demo/imcoding" component={ImCoding} />
          <Route path="/5x_training_demo/astro" component={AstroCamp} />
          <Route
            path="/5x_training_demo/fullstack-landing"
            component={FullstackLanding}
          />
          <Route path="/5x_training_demo/talks" component={Talks} />
          <Route path="/5x_training_demo/dev" component={Development} />
          <Route path="/5x_training_demo/training" component={Training} />
          <Route path="/5x_training_demo/space" component={Space} />
          <Route path="/5x_training_demo/posts" component={Posts} />
          <FormProvider>
            <Route path="/contacts" component={Contacts} />
          </FormProvider>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
