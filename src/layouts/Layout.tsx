import React, { ReactNode } from "react"
import {
    SideBar,
} from '../ui-components';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">top</Link>
                </li>
                <li>
                    <Link to="/form">form</Link>
                </li>
            </ul>
        </nav>
    );
}


export type LayoutProps = {
    children: ReactNode
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {

    return (
        <div style={{ display: "flex" }} >
            <SideBar />
            <div>
                <Navigation />
                {props.children}
            </div>
        </div>
    )
}


export default LayoutComponent;