import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Inventory from "./components/Inventory/Inventory";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItem from "./components/AddItem/AddItem";
import MyItems from "./components/MyItems/MyItems";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <Inventory />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manageitems"
                    element={<ManageItems></ManageItems>}
                ></Route>
                <Route
                    path="/additem"
                    element={
                        <RequireAuth>
                            <AddItem></AddItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/myitems"
                    element={
                        <RequireAuth>
                            <MyItems></MyItems>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
