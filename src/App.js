import { Provider } from 'react-redux'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ItemCard from './components/Products.js'
import Categories from './components/Categories.js'
import CategoryBanner from './components/CategoryBanner.js'
import ThemeContext from './context/ThemeSettings.js'
import store from './store'

function App() {
  return (
    <ThemeContext>
      <Provider store={store}>
        <Header />
        <Categories />
        <CategoryBanner />
        <ItemCard />
        <Footer />
      </Provider>
    </ThemeContext>
  );
}

export default App;
