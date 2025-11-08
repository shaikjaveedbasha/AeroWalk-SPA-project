import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Navbar from './Puma-Project/Navbar';
import Home from './Puma-Project/Home';
import Footer from './Puma-Project/Footer';
import About from './Puma-Project/About';
import Shop from './Puma-Project/Shop';
import Arrivals from './Puma-Project/Arrivals';
import Offers from './Puma-Project/Offers';
import Contact from './Puma-Project/Contact';
import Account from './Puma-Project/Account';
import Routing from './Routing';
import Confirm from './Puma-Project/Confirm';


function App() {
  return (
    <div>
      <Navbar />
      <Routing/>
      <Footer />
    </div>
  );
}

export default App;
