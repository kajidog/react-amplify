import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stepOneSchema } from '../schemas';

interface StepOneProps {
    defaultValues: {
        firstName: string;
        lastName: string;
    };
    onSubmit: (data: any) => void; // 本来はより具体的な型を使用します
}


export const StepOne: React.FC<StepOneProps> = ({ onSubmit, defaultValues }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(stepOneSchema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First Name" />
            {errors.firstName && <p>{errors.firstName?.message}</p>}

            <input {...register("lastName")} placeholder="Last Name" />
            {errors.lastName && <p>{errors.lastName?.message}</p>}

            <button type="submit">Next</button>
        </form>
    );
};
