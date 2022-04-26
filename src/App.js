import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home/Home";
import Review from "./component/Review/Review";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title/:id" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
