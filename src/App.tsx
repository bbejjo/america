import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurProcess from './components/OurProcess';
import DriveWithUs from './components/DriveWithUs';
import ShipYourCar from './components/ShipYourCar';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fff5e8]">
      <Navbar />
      <Hero />
      <About />
      <OurProcess />
      <DriveWithUs />
      <ShipYourCar />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
