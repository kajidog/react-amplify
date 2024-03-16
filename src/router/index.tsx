import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import LayoutComponent from "../Layout";

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
                </Routes>
            </LayoutComponent>
        </BrowserRouter>
    );
}

export default RouterComponent;