import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import BlogPage from './pages/BlogPage/BlogPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Router>
        <ScrollToTop />
        <NavigationMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/products" component={Products} /> */}
          <Route path="/blog/:blogId" component={BlogPage} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <Footer className="mt-5" />
    </div>
  );
}

export default App;
