import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductList} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Welcome to our Clothing Brand</h2>
        </div>
    );
}

export default App;
