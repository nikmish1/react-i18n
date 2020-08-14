import React, { Suspense, lazy } from "react";
///import SampleText from "./components/SampleText/SampleText";
// import logo from "./logo.svg";
import "./i18n";
//import { useTranslation } from "react-i18next";
import "./App.css";

const SampleText = lazy(() => import("./components/SampleText/SampleText"));

function App() {
  // const [state, setstate] = useState({ preferedLng: "en", translate: {} });
  //const { t, i18n } = useTranslation();
  // setstate({ ...state, translate: i18n.changeLanguage("en") });
  //i18n.changeLanguage("en");
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={null}>
          <SampleText />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
