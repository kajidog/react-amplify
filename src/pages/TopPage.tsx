import React, { useContext } from "react";
import { AuthContext } from "../app/router/AuthContext";
import { Button } from "@aws-amplify/ui-react";

export const TopPage: React.FC = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <div>
            トップページ
            <Button onClick={signOut}>
                サインアウト
            </Button>
        </div>
    )
}

export default TopPage;