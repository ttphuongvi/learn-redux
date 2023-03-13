import "./App.css";
import React from "react";
import { dataRoutes } from "./routesApp/dataRoutes";
import RootPage from "./page";
import { useRoutes } from "react-router-dom";

function App() {
  const content = useRoutes(dataRoutes);

  return <RootPage content={content} />;
}

export default App;
