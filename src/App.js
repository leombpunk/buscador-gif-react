import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { GifsContextProvider } from "./context/GifsContext";

import { Link, Route } from 'wouter'; 

export default function App() {
  return (  
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h1>Buscador de Gifts</h1>
        </Link>
        <GifsContextProvider>
          <Route 
            component={Home}
            path="/"
          />
          <Route 
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route 
            component={Detail}
            path="/gif/:id"
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}