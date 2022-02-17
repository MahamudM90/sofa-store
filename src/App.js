import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Sofa-Store</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>

      <footer>
        <small>
          Made by{' '}
          <a href="https://mahamudportfolio.netlify.app/?fbclid=IwAR20Gvc8dCURpiIUWW5FlYRP9hIsMMvB8TtJbrnaS4qxsg9Q5bKFCs8l1f0">
            Mahamud
          </a>
          , source code available on{' '}
          <a href="https://github.com/MahamudM90/SOFA-STORE">github</a>
        </small>
      </footer>
    </div>
  );
};

export default App;
