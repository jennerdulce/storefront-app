import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from './components/Cart.js'
import Details from './components/Details.js'
import CheckoutPage from './components/CheckoutPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ItemCard from './components/Products.js'
import Categories from './components/Categories.js'
import CategoryBanner from './components/CategoryBanner.js'
import ThemeContext from './context/ThemeSettings.js'
import store from './store'

function App() {
  return (
    <Router>
      <ThemeContext>
        <Provider store={store}>
          <Header />
          <Cart />
          <Route exact path="/">
          <Categories />
          <CategoryBanner />
          <ItemCard />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Footer />
        </Provider>
      </ThemeContext>
    </Router>
  );
}

export default App;
