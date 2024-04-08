import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import MyMap from "./Mymap";
import Snap from "./Snap";

function App() {
  return (
    <BrowserRouter basename="/stressed">
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/mymap" element={<MyMap />} />
        <Route path="/snap" element={<Snap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
