import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RowMarque from "./components/RowMarque";
import Main from "./components/Main";
import AfterMain from "./components/AfterMain";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RowMarque />
      <Main />
      <AfterMain />
      <Courses />
    </div>
  );
}

export default App;
