import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FormComponent from '../../features/form/Form'
import React from 'react'
import Protect from './Protect'
import TopPage from '../../pages/TopPage'

type RouterProps = {}

const RouterComponent: React.FC<RouterProps> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<Protect />}>
                <Route path="/" element={<TopPage />} />
            </Route>
            <Route path="/form" element={<FormComponent />} />
        </Routes>
    )
}

export default RouterComponent
