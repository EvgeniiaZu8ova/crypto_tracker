import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Details } from "./components/Details";
import { useSocket } from "./hooks/use-socket";
import { wsBaseURL } from "./utils/constants";
import { useEffect } from "react";

function App() {
  const { connect } = useSocket(wsBaseURL);

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
