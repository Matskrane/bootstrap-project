import {Route, BrowserRouter as Router} from 'react-router-dom';
import News from './components/Pages/News';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';




const App = () => {
  return (

    <Router>
      <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/contact" exact component={Contact} />

      <Footer />
    </Router>
  )
}

export default App;
