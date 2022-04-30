import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItem from "./components/AddItem/AddItem";
import MyItems from "./components/MyItems/MyItems";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/manageitems"
                    element={<ManageItems></ManageItems>}
                ></Route>
                <Route path="/additem" element={<AddItem></AddItem>}></Route>
                <Route path="/myitems" element={<MyItems></MyItems>}></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
