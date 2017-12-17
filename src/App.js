import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './modules/Navigation';
import Footer from './modules/Footer';
import Home from './modules/pages/Home';
import DeveloperPage from './modules/pages/DeveloperPage';
import CraftsmanPage from './modules/pages/CraftsmanPage';
import Blog from './modules/pages/Blog';
import Resources from './modules/pages/Resources';
import NotFound from './modules/pages/NotFound';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={Home} />
                        <Route path="/thedeveloper" component={DeveloperPage} />
                        <Route path="/thecraftsman" component={CraftsmanPage} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/resources" component={Resources} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;

// <div className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h2>Welcome to React</h2>
// </div>
// <div className="jumbotron">
// <h2>3WireBuild</h2>
// <p className="lead">Designer -- Developer -- Builder</p>
// </div>
// <div className="container mt-4">
// <h2 className="page-title">About</h2>
// <section>
//   <h3 className="section-title"> The Person </h3>
// </section>
// <section>
//   <h3 className="section-title"> The Skills </h3>
// </section>
