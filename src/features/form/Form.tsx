import React, { useState } from 'react'
import {} from 'react-router-dom'

import { StepOne } from './component/StepOne'
import { StepTwo } from './component/StepTwo'
import { Confirm } from './component/Confirm'

import { useWarnOnUnsavedChanges } from '../../hooks/useWarnOnUnsavedChanges'

interface FormData {
    firstName: string
    lastName: string
    email: string
}

export function FormComponent() {
    const [step, setStep] = useState(1) // フォームのステップ
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
    }) // フォームデータ
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false) // 変更フラグ true: リロード時に警告

    const handleStepOneSubmit = (data: FormData) => {
        setFormData({ ...formData, ...data })
        setHasUnsavedChanges(true)
        setStep(2)
    }

    const handleStepTwoSubmit = (data: FormData) => {
        setFormData({ ...formData, ...data })
        setHasUnsavedChanges(true)
        setStep(3) // 確認画面へ
    }

    const handleEdit = (stepNumber: number) => {
        setStep(stepNumber)
    }

    useWarnOnUnsavedChanges(hasUnsavedChanges)

    return (
        <div>
            {step === 1 && (
                <StepOne
                    defaultValues={formData}
                    onSubmit={handleStepOneSubmit}
                />
            )}
            {step === 2 && (
                <StepTwo
                    defaultValues={formData}
                    onSubmit={handleStepTwoSubmit}
                />
            )}
            {step === 3 && <Confirm formData={formData} onEdit={handleEdit} />}
        </div>
    )
}

export default FormComponent
