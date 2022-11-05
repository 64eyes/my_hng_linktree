import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
