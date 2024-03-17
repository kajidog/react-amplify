import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import LayoutComponent from "../Layout";
import FormComponent from "../../features/form/Form"
function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">top</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/form">form</Link>
                </li>
            </ul>
        </nav>
    );
}

function RouterComponent() {
    return (
        <BrowserRouter>
            <LayoutComponent>
                <Navigation />
                <Routes>
                    <Route path="/" element={<>top</>} />
                    <Route path="/login" element={<>login</>} />
                    <Route path="/form" element={<FormComponent />} />
                </Routes>
            </LayoutComponent>
        </BrowserRouter>
    );
}

export default RouterComponent;