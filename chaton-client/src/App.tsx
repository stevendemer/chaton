import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "containers/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
}
