import React from "react";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./utils/data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {data.map((item) => (
          <Route
            key={item.id}
            path={item.name}
            element={<Card image={item.image} tags={item.tags} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
