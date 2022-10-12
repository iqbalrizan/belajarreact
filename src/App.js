import Headers from "./components/header";
import Main from "./components/main";
import Ourservices from "./components/ourservice";
import Whyus from "./components/whyus";
import Sewamobil from "./components/sewamobil";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Headers />
      <Main />
      <Ourservices />
      <Whyus />
      <Sewamobil />
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
