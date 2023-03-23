import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from "./Pages/CryptoHome";
import CryptoDetail from './Pages/CryptoDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
