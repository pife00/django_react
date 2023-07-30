import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Add from "./pages/add";

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
        </Routes>

      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
