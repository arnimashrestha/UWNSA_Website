import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About_US from "./components/About_US";
import Meet_The_Team from "./components/Meet_The_Team";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import Join_US_v2 from "./components/Join_US_v2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About_US />
      <EventSection />
      <Meet_The_Team />
      <Join_US_v2 />
      <Footer />
    </div>
  );
};

export default App;
