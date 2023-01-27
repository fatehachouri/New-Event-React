import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CreativeSpeakersComponent from "./components/CreativeSpeakers/CreativeSpeakers";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import OurProgramsPage from "./components/OurProgramsPage";
import Overview from "./components/Overview";
import Questions from "./components/Questions/Questions";
import RegisterHere from "./components/RegisterHere";
import Sponsor from "./components/Sponsor/Sponsor";
import Venue from "./components/Venue/Venue";
import WatchVideo from "./components/WatchVideo";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <Overview />
    <WatchVideo />
    <CreativeSpeakersComponent />
    <OurProgramsPage />
    <RegisterHere />
    <Questions />
    <Venue />
    <Sponsor />
    <ContactUs />
    </>
  )
}
