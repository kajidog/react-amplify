import React, { ReactNode } from "react"
import {
    SideBar,
} from '../ui-components';
import usePageTracking from "../hooks/usePageTracking";


export type LayoutProps = {
    children: ReactNode
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
    void usePageTracking()
    return (
        <div style={{ display: "flex" }} >
            <SideBar />
            {props.children}
        </div>
    )
}


export default LayoutComponent;