import AboutUs from "./components/AboutUs";
import CreativeSpeakersComponent from "./components/CreativeSpeakers/CreativeSpeakers";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import OurProgramsPage from "./components/OurProgramsPage";
import Overview from "./components/Overview";
import Questions from "./components/Questions/Questions";
import RegisterHere from "./components/RegisterHere";
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
    </>
  )
}
