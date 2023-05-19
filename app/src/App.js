import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Main";

export default function App() {
  return (
    <div>
      <div style={{ margin: 20 }}>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}
