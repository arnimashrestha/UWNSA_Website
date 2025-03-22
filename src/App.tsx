import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About_US from "./components/About_US";
import Meet_The_Team from "./components/Meet_The_Team";
import Join_Us from "./components/Join_Us";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About_US />
      <Meet_The_Team />
      <EventSection />
      <Join_Us />
      <Footer />
    </div>
  );
};

export default App;
