import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./utils/data";
import Container from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {data.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={<Container item={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
