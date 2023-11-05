import "./App.css";
import { useLocation, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Experience from "./components/Experience/Experience";
import wave from "./wave.svg";
import { BASE_PATH } from './config';

const App = () => (
  <>
    <div id="main-page" className="mx-8 h-screen overflow-scroll sm:overflow-hidden">
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <div className="grow">
            <AnimatePresence>
              <RoutesWithAnimation />
            </AnimatePresence>
          </div>
        </div>
      </BrowserRouter>
    </div>
    <div className="absolute bottom-0 w-full -z-10 h-36 sm:h-72" style={{backgroundImage: `url(${wave})`, backgroundSize: "cover"}}>
    </div>
  </>
);

export default App;

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(BASE_PATH);
  return (
    <Routes location={location} key={location.key}>
      <Route index element={<Navigate to={`${BASE_PATH}/home`} replace />} />
      <Route path={`${BASE_PATH}/home`} element={<Home />} />
      <Route path={`${BASE_PATH}/experience`} element={<Experience />} />
    </Routes>
  );
}
