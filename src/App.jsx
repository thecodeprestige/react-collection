import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AnimatedPin from "./pages/3d-animated-pin/AnimatedPin";

function App() {
  return (
    <div className="container mx-auto p-4 text-white react-collection">
      <div className="flex flex-nowrap justify-center react-collection--logos">
        <a className="p-5" href="https://vitejs.dev" target="_blank" title="Vite Logo">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className="p-5" href="https://react.dev" target="_blank" title="React Logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-nowrap justify-center mb-5">
        <h1 className="font-bold uppercase text-cyan-400">
          <a href="/" title="Home">
            React Collection
          </a>
        </h1>
      </div>
      <BrowserRouter>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 react-collection--menus">
          <Link
            className="inline-block p-4 rounded-lg shadow-lg bg-green-600"
            to="/3d-animated-pin"
            title="3D Animated Pin"
          >
            <span className="rounded-lg">3D Animated Pin</span>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d-animated-pin" element={<AnimatedPin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return "";
}

function NotFound() {
  return <h2 className="text-center">404 Page</h2>;
}

export default App;
