import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RowMarque from "./components/RowMarque";
import Main from "./components/Main";
import AfterMain from "./components/AfterMain";
import Courses from "./components/Courses";
import TestimonialHeader from "./components/TestimonialHeader";
import TestimnonialBody from "./components/TestimnonialBody";
import Community from "./components/Community";
import FAQS from "./components/FAQS.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RowMarque />
      <Main />
      <AfterMain />
      <Courses />
      <TestimonialHeader />
      <TestimnonialBody />
      <Community />
      <FAQS />
    </div>
  );
}

export default App;
