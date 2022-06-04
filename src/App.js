import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Aside from "./Components/Aside";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Content />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;
