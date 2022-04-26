import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./component/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import { useEffect } from "react";
import AddEditTour from "./pages/AddEditTour";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  //Routing
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addTour" element={<AddEditTour />} />
          <Route path="/editTour" element={<AddEditTour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
