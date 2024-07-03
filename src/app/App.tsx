import React from 'react'
import RouterComponent from './router'
import LayoutComponent from '../layouts/Layout'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './router/AuthProvider'

import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import config from '../aws-exports'
Amplify.configure(config)

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <LayoutComponent>
                            <RouterComponent />
                        </LayoutComponent>
                    </AuthProvider>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default App
