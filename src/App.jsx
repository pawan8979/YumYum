import "./App.scss";
import { useState } from "react";
import Header from "./components/Header";
import RecipeLists from "./components/RecipeLists";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeLists setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;