import "./index.css";
import About from "./components/About";
import Info from "./components/Info";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <main>
        <Info />
        <About />
        <Interest />
      </main>
      <Footer />
    </div>
  );
}

export default App;
