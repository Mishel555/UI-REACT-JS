import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Templates from './components/Templates';
import Themes from './components/Themes';
import Contact from './components/Contact';
import {
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Content}/>
            <Route path="/gallery/:id" component={Gallery}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/templates" component={Templates}/>
            <Route path="/themes" component={Themes}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
