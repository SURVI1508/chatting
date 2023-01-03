import Home from "./pages/Home";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signin" element={<Register />} /> */}
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
