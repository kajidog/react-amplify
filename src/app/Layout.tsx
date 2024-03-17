import React, { ReactNode } from "react"
import {
    SideBar,
} from '../ui-components';


export type LayoutProps = {
    children: ReactNode
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {

    return (
        <div style={{ display: "flex" }} >
            <SideBar />
            {props.children}
        </div>
    )
}


export default LayoutComponent;