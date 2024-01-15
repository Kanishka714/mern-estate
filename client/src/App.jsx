import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Header from "./components/header"



    export default function App() {
      return (
        <BrowserRouter>
        <Header/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      );
    }
    