import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HeaderMobile, Header, Footer } from "./layout";
import { Home, AboutUs, Collaborator, Collaborators, Contact, Treatment, Treatments, NoFound, Packs, Legal } from "./pages";

function App() {
  return (
    <Router>
      <HeaderMobile />
      <Header />
      <Suspense fallback="loading">
        <div className='content-wrapper'>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/nosotros" component={AboutUs} />
            <Route exact path="/packs" component={Packs} />
            <Route exact path="/colaboradores/:slug" component={Collaborator} />
            <Route exact path="/colaboradores/" component={Collaborators} />
            <Route exact path="/tratamientos/:slug" component={Treatment} />
            <Route exact path="/tratamientos" component={() => <Treatments />} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/legal/:slug" component={Legal} />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
