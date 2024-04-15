
import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';

export function Protect() {
    return (
        <Authenticator>
            <Outlet />
        </Authenticator>
    );
}

export default Protect;