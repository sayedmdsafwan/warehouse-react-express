import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route></Route>
            </Routes>
        </div>
    );
}

export default App;
