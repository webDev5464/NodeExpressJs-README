import { BrowserRouter, Routes, Route } from "react-router-dom"
import Router from "./components/routes/Router"
import PostData from "./components/pages/PostData"
import GetData from "./components/pages/GetData"

export default function App() {
  return (
    <BrowserRouter>
      <Router />
      <hr />
      <Routes>
        <Route path="/" element={<PostData />} />
        <Route path="GetData" element={<GetData />} />
      </Routes>
    </BrowserRouter>
  )
}