import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import GalleryScreen from './screens/GalleryScreen';
import CampRegistrationScreen from './screens/CampRegistrationScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/contact' element={<ContactScreen />} exact />
          <Route path='/gallery' element={<GalleryScreen />} exact />
          <Route
            path='/campregistration'
            element={<CampRegistrationScreen />}
            exact
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
