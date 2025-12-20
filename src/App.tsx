import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DriveWithUs from './components/DriveWithUs';
import ShipYourCar from './components/ShipYourCar';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <DriveWithUs />
      <ShipYourCar />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
